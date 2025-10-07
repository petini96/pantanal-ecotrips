<template>
  <div class="mosaic-gallery-container q-pa-md">
    <div v-if="images.length" class="mosaic-grid">
      <q-img
        v-for="(image, index) in images"
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
            v-for="(image, index) in images"
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
import { ref } from 'vue';

// Definimos a estrutura do objeto de imagem que o componente espera
interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

// 1. Definimos a prop 'images' que o componente irá receber.
// Ele espera um array de objetos que sigam a interface 'GalleryImage'.
defineProps<{
  images: GalleryImage[];
}>();

const fullscreenDialog = ref(false);
const currentSlide = ref(0);

const openFullscreen = (index: number) => {
  currentSlide.value = index;
  fullscreenDialog.value = true;
};
</script>

<style scoped lang="scss">
/* O CSS permanece exatamente o mesmo da versão anterior */
.mosaic-gallery-container {
  max-width: 1200px;
  margin: 0 auto;
}

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

/* ESTRUTURA DO MOSAICO */
.mosaic-item:nth-child(1),
.mosaic-item:nth-child(8) {
  grid-column: span 2;
  grid-row: span 2;
}

.mosaic-item:nth-child(4),
.mosaic-item:nth-child(5) {
  grid-row: span 2;
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