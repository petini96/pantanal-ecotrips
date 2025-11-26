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
        @update:model-value="scrollToTop"
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
const itemsPerPage = 7; // Mantém 8 itens fixos para o layout mosaico funcionar

// Calcula o total de páginas (ex: 1105 / 8 = 139 páginas)
const totalPages = computed(() => Math.ceil(props.images.length / itemsPerPage));

// Cria a fatia do array para exibir apenas a página atual
const paginatedImages = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.images.slice(start, end);
});

// Se a lista de imagens mudar externamente, volta para a página 1
watch(() => props.images, () => {
  page.value = 1;
});

// Rola suavemente para o topo ao mudar de página
const scrollToTop = () => {
  const container = document.querySelector('.mosaic-gallery-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth' });
  }
};
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
  grid-auto-flow: dense;
}

.mosaic-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mosaic-item:hover .q-icon {
  opacity: 1;
}

/* LÓGICA DE POSICIONAMENTO DO MOSAICO (Para 8 itens) */
.mosaic-item:nth-child(1),
.mosaic-item:nth-child(8) {
  grid-column: span 2;
  grid-row: span 2;
}

.mosaic-item:nth-child(4),
.mosaic-item:nth-child(5) {
  grid-row: span 2;
}

/* --- ESTILOS DA PAGINAÇÃO (CORRIGIDO PARA CÍRCULO PERFEITO) --- */
:deep(.custom-pagination) {
  align-items: center;
  gap: 6px; /* Espaço entre as bolinhas */

  .q-btn {
    /* --- CORREÇÃO DO CÍRCULO --- */
    /* Define largura e altura fixas e iguais */
    width: 34px !important;       
    height: 34px !important;      
    min-width: 34px !important;   /* Sobrescreve o padrão retangular do Quasar */
    padding: 0 !important;        /* Remove espaçamento interno lateral */
    border-radius: 50% !important; 
    /* --------------------------- */

    font-weight: 500;
    font-size: 15px;

    /* Remove o círculo cinza de foco para ficar limpo */
    &--flat {
      .q-focus-helper {
        display: none !important; 
      }
      
      /* Efeito hover suave apenas no texto/fundo */
      &:hover {
        color: #000;
        background-color: rgba(0,0,0,0.05);
      }
    }
  }

  /* ESTILO DO BOTÃO ATIVO (BOLINHA VERDE) */
  .q-btn--standard {
    background-color: #2E5B3E !important; /* Verde Musgo Escuro */
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
  }
}

@media (max-width: 767px) {
  .mosaic-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .mosaic-item:nth-child(n) {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>