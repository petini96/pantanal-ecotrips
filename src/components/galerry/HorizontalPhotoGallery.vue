<template>
  <div class="square-gallery-container q-pa-md q-mb-xxl">
    
    <div v-if="paginatedImages.length" class="uniform-grid">
      <q-img
        v-for="(image, index) in paginatedImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :ratio="1"
        class="gallery-item rounded-borders shadow-2 cursor-pointer"
        fit="cover"
        @click="openFullscreen(index)"
      >
        <div class="absolute-full flex flex-center hover-overlay transition-generic">
          <q-icon name="zoom_in" color="white" size="32px" />
        </div>
        
        <div v-if="image.caption" class="absolute-bottom text-subtitle2 text-center q-pa-xs bg-transparent-black">
          {{ truncateText(image.caption, 20) }}
        </div>
      </q-img>
    </div>

    <div v-else class="text-center text-grey q-pa-xl">
      Nenhuma imagem para exibir.
    </div>

    <div v-if="totalPages > 1" class="row justify-center q-mt-xl flex-center">
      <q-pagination
        v-model="page"
        :max="totalPages"
        :max-pages="maxPagesDisplay"
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
          style="z-index: 9999;"
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
              style="max-width: 95vw; max-height: 85vh;"
            />
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const props = defineProps<{
  images: GalleryImage[];
}>();

const page = ref(1);
const itemsPerPage = ref(4); // Começa com 4
const maxPagesDisplay = ref(5);

const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

// --- LÓGICA RESPONSIVA PRINCIPAL ---
const updateLayout = () => {
  const width = window.innerWidth;

  if (width < 600) {
    // Mobile: Mostra apenas 1 por vez
    itemsPerPage.value = 1;
    maxPagesDisplay.value = 3; 
  } else if (width < 1024) {
    // Tablet: Mostra 2 por vez (metade do desktop)
    itemsPerPage.value = 2;
    maxPagesDisplay.value = 5;
  } else {
    // Desktop: Mostra 4 por vez
    itemsPerPage.value = 4;
    maxPagesDisplay.value = 6;
  }
};

onMounted(() => {
  updateLayout();
  window.addEventListener('resize', updateLayout);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout);
});

const totalPages = computed(() => Math.ceil(props.images.length / itemsPerPage.value));

const paginatedImages = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return props.images.slice(start, end);
});

watch(() => props.images, () => {
  page.value = 1;
});

// Garante que se o usuário redimensionar a tela e o número de páginas mudar, ele não fique numa página inexistente
watch(totalPages, (newTotal) => {
  if (page.value > newTotal) page.value = newTotal || 1;
});

const fullscreenDialog = ref(false);
const currentSlide = ref(0);

const openFullscreen = (index: number) => {
  currentSlide.value = index;
  fullscreenDialog.value = true;
};
</script>

<style scoped lang="scss">
.square-gallery-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- GRID RESPONSIVO --- */
/* O CSS precisa "bater" com a lógica do Javascript (itemsPerPage) */

.uniform-grid {
  display: grid;
  gap: 16px;
  
  /* Desktop (> 1024px): 4 Colunas (para bater com itemsPerPage = 4) */
  grid-template-columns: repeat(4, 1fr);
}

.gallery-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden; 
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.2) !important;
}

.hover-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .hover-overlay {
  opacity: 1;
}

.bg-transparent-black {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  width: 100%;
}

:deep(.custom-pagination) {
  align-items: center;
  gap: 6px;
  
  .q-btn {
    border-radius: 8px !important;
  }
  
  .q-btn--standard {
    background-color: #2E5B3E !important;
    color: white !important;
  }
}

/* --- MEDIA QUERIES --- */

/* Tablet (600px - 1023px) -> 2 Colunas */
@media (max-width: 1023px) {
  .uniform-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile (< 600px) -> 1 Coluna (Foco total na imagem) */
@media (max-width: 599px) {
  .square-gallery-container {
    padding: 0; /* Remove padding lateral no mobile para imagem maior */
  }

  .uniform-grid {
    grid-template-columns: 1fr;
    gap: 0; /* Remove gap no mobile se quiser estilo "Instagram", ou mantenha 8px */
  }
  
  .gallery-item {
    border-radius: 0 !important; /* Retira bordas arredondadas no mobile para full width */
  }
}
</style>