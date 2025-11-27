<template>
  <div class="mosaic-gallery-container q-pa-md">
    <div v-if="paginatedImages.length" class="mosaic-grid">
      <q-img
        v-for="(image, index) in paginatedImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="mosaic-item rounded-borders shadow-4 cursor-pointer"
        fit="cover"
        @click="openFullscreen(index)"
      >
        <q-icon
          name="zoom_in"
          class="absolute-all-T full-width full-height"
          size="32px"
          color="white"
          style="background-color: rgba(0, 0, 0, 0.4); opacity: 0; transition: opacity 0.3s;"
        />
      </q-img>
    </div>

    <div v-else class="text-center text-grey q-pa-xl">
      Nenhuma imagem para exibir.
    </div>

    <div v-if="totalPages > 1" class="row justify-center q-mt-lg flex-center">
      <q-pagination
        v-model="page"
        :max="totalPages"
        :max-pages="6"
        boundary-numbers
        direction-links
        flat
        round
        color="grey-9"
        active-text-color="white"
        size="16px"
        class="custom-pagination"
      />
    </div>

    <q-dialog v-model="fullscreenDialog" maximized transition-show="fade" transition-hide="fade">
      <q-card class="bg-black text-white">
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="fullscreenDialog = false"
          class="absolute-top-right q-ma-md"
          color="white"
          style="z-index: 1;"
        />
        
        <q-carousel
          v-model="currentSlide"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          infinite
          class="full-width full-height bg-transparent"
        >
          <q-carousel-slide
            v-for="(image, index) in paginatedImages"
            :key="index"
            :name="index"
            class="column no-wrap flex-center"
          >
            <q-img
              :src="image.src"
              :alt="image.alt"
              fit="contain"
              class="rounded-borders full-height"
              style="max-width: 90vw;"
            />
            <div v-if="image.caption" class="q-mt-md text-center text-body1">
              {{ image.caption }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// Definição da interface das imagens
interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

// Recebe a lista completa de imagens via Props
const props = defineProps<{
  images: GalleryImage[];
}>();

// --- LÓGICA DE PAGINAÇÃO ---
const page = ref(1);
const itemsPerPage = 7; 

const totalPages = computed(() => Math.ceil(props.images.length / itemsPerPage));

const paginatedImages = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.images.slice(start, end);
});

watch(() => props.images, () => {
  page.value = 1;
});

// A função scrollToTop foi removida para evitar o salto na tela
// ---------------------------

// --- LÓGICA DO LIGHTBOX ---
const fullscreenDialog = ref(false);
const currentSlide = ref(0);

const openFullscreen = (index: number) => {
  currentSlide.value = index;
  fullscreenDialog.value = true;
};
</script>

<style scoped lang="scss">
.mosaic-gallery-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* --- GRID DO MOSAICO --- */
.mosaic-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  /* Altura fixa para manter o container estável */
  grid-auto-rows: 200px; 
  grid-auto-flow: dense;
}

.mosaic-item {
  width: 100%;
  height: 100%; 
}

.mosaic-item:hover .q-icon {
  opacity: 1;
}

/* LÓGICA DE POSICIONAMENTO DO MOSAICO */
.mosaic-item:nth-child(1),
.mosaic-item:nth-child(8) {
  grid-column: span 2;
  grid-row: span 2;
}

.mosaic-item:nth-child(4),
.mosaic-item:nth-child(5) {
  grid-row: span 2;
}

/* --- ESTILOS DA PAGINAÇÃO --- */
:deep(.custom-pagination) {
  align-items: center;
  gap: 6px; 

  .q-btn {
    width: 34px !important;       
    height: 34px !important;      
    min-width: 34px !important;   
    padding: 0 !important;        
    border-radius: 50% !important; 

    font-weight: 500;
    font-size: 15px;

    &--flat {
      .q-focus-helper {
        display: none !important; 
      }
      &:hover {
        color: #000;
        background-color: rgba(0,0,0,0.05);
      }
    }
  }

  .q-btn--standard {
    background-color: #2E5B3E !important;
    color: white !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.25);
    
    .q-focus-helper {
        display: none !important;
    }
  }
}

/* RESPONSIVIDADE */
@media (max-width: 1023px) {
  .mosaic-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 180px; 
  }
}

@media (max-width: 767px) {
  .mosaic-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px; 
  }
  .mosaic-item:nth-child(n) {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>