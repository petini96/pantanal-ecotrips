<template>
  <div class="media-gallery-container q-pa-md">
    <div class="gallery-content-wrapper">
      <div v-if="paginatedItems.length">
        <div class="row q-col-gutter-md justify-center">
          <div
            v-for="(item, index) in paginatedItems"
            :key="item.src"
            class="col-6 col-sm-4 col-md-3 col-lg-2"
          >
            <div
              class="media-card column cursor-pointer rounded-borders shadow-2 overflow-hidden"
              tabindex="0"
              @click="openViewer(getGlobalIndex(index))"
              @keyup.enter="openViewer(getGlobalIndex(index))"
            >
              <div class="media-card-content">
                <template v-if="item.type === 'video'">
                  <div class="video-thumbnail-wrapper">
                    <q-img
                      v-if="item.thumbnailUrl"
                      :src="item.thumbnailUrl"
                      fit="cover"
                      class="col bg-grey-9"
                      loading="lazy"
                    >
                      <template v-slot:loading>
                        <q-spinner-puff color="white" />
                      </template>
                    </q-img>
                    <div v-else class="video-placeholder bg-grey-9">
                      <q-icon name="videocam" color="grey-5" size="40px" />
                    </div>
                    <div class="absolute-center media-video-overlay">
                      <q-icon name="play_circle_outline" color="white" size="40px" />
                    </div>
                  </div>
                </template>

                <q-img
                  v-else
                  :src="getThumbnail(item)"
                  :alt="item.title"
                  fit="cover"
                  class="col bg-grey-9"
                  loading="lazy"
                  @click.stop="openViewer(getGlobalIndex(index))"
                >
                  <template v-slot:loading>
                    <q-spinner-puff color="white" />
                  </template>
                  <div class="absolute-center full-width full-height media-item-icon-overlay">
                    <q-icon 
                      :name="item.type === 'image' ? 'zoom_in' : 'play_circle_outline'" 
                      color="white" 
                      size="32px" 
                    />
                  </div>
                </q-img>

                <div class="absolute-bottom-left full-width media-item-overlay">
                  <div class="media-item-title q-pa-xs text-caption">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-grey-7 q-pa-xl">
        <q-icon name="movie" size="3rem" />
        <p class="q-mt-md">Nenhuma mídia para exibir no momento.</p>
      </div>
    </div>

    <div v-if="totalPages > 1" class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="totalPages"
        :max-pages="6"
        direction-links
        boundary-numbers
        icon-prev="chevron_left"
        icon-next="chevron_right"
        color="grey-8"
        active-color="primary"
        flat
        round
        size="16px"
        class="modern-pagination"
      />
    </div>

    <q-dialog
      v-model="isViewerOpen"
      maximized
      transition-show="fade"
      transition-hide="fade"
      @before-hide="pauseCurrentMedia"
    >
      <q-card class="bg-deep-dark text-white flex flex-center">
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="closeViewer"
          class="absolute-top-right q-ma-md"
          style="z-index: 10"
        />
        <q-carousel
          v-model="currentSlideIndex"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          infinite
          class="full-width full-height bg-transparent"
          @transition="onSlideTransition"
        >
          <q-carousel-slide
            v-for="(item, index) in items"
            :key="`slide-${index}`"
            :name="index"
            class="column no-wrap flex-center"
          >
            <div class="media-content-wrapper">
              <q-video
                v-if="item.type === 'youtube'"
                :src="`https://www.youtube.com/embed/${item.src}?rel=0&showinfo=0&autoplay=1`"
                class="media-player-item rounded-borders"
                frameborder="0"
                allowfullscreen
              />
              <video
                v-else-if="item.type === 'video'"
                :ref="el => setVideoRef(el, index)"
                :src="item.src"
                controls
                :autoplay="index === currentSlideIndex"
                class="media-player-item rounded-borders"
                style="max-width: 100%; max-height: 100%;"
                preload="metadata"
              ></video>
              <q-img
                v-else-if="item.type === 'image'"
                :src="item.src"
                fit="contain"
                class="media-player-item"
                style="max-width: 100%; max-height: 100%;"
              />
            </div>
            <div v-if="item.title || item.caption" class="q-mt-md text-center media-caption">
              <div class="text-h6">{{ item.title }}</div>
              <div v-if="item.caption" class="text-subtitle1 text-grey-4">{{ item.caption }}</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount, type ComponentPublicInstance } from 'vue';

export interface MediaItem {
  type: 'image' | 'youtube' | 'video';
  src: string;
  title: string;
  caption?: string;
  thumbnailUrl?: string;
}

const props = withDefaults(defineProps<{
  items: MediaItem[];
  itemsPerPage?: number;
}>(), {
  itemsPerPage: 5,
});

const isViewerOpen = ref(false);
const currentSlideIndex = ref(0);
const currentPage = ref(1);
const videoRefs = ref<Map<number, HTMLVideoElement>>(new Map());

const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage));
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage;
  const end = start + props.itemsPerPage;
  return props.items.slice(start, end);
});

const getGlobalIndex = (paginatedIndex: number): number => {
  return (currentPage.value - 1) * props.itemsPerPage + paginatedIndex;
};

const openViewer = (globalIndex: number) => {
  currentSlideIndex.value = globalIndex;
  isViewerOpen.value = true;
};

const closeViewer = () => {
  pauseCurrentMedia();
  isViewerOpen.value = false;
};

const getThumbnail = (item: MediaItem): string => {
  if (item.type === 'youtube') {
    return `https://img.youtube.com/vi/${item.src}/hqdefault.jpg`;
  }
  if (item.type === 'image') {
    return item.src;
  }
  return item.thumbnailUrl || '';
};

const setVideoRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && el instanceof HTMLVideoElement) {
    videoRefs.value.set(index, el);
  }
};

const pauseAllVideos = () => {
  videoRefs.value.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
};

const pauseCurrentMedia = () => {
  const currentVideo = videoRefs.value.get(currentSlideIndex.value);
  if (currentVideo && !currentVideo.paused) {
    currentVideo.pause();
  }
};

const onSlideTransition = () => {
  pauseAllVideos();
};

watch(() => props.items, () => {
  currentPage.value = 1;
}, { deep: false });

onBeforeUnmount(() => {
  pauseAllVideos();
  videoRefs.value.clear();
});
</script>

<style scoped lang="scss">
.media-gallery-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery-content-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
}

.media-card {
  position: relative;
  aspect-ratio: 16 / 9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #2c2c2c;
  display: flex;
  height: 100%;
  will-change: transform;

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
}

.media-card-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.media-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: background-color 0.3s ease, opacity 0.3s ease;

  .q-icon {
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    .q-icon {
      opacity: 1;
      transform: scale(1.1);
    }
  }
}

.media-item-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  pointer-events: none;
}

.media-item-title {
  font-size: 0.8rem; /* Fonte reduzida para cards menores */
  font-weight: 500;
  color: white;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.media-item-icon-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
}

// Estilos do Dialog
.bg-deep-dark {
  background-color: #121212;
}

.media-content-wrapper {
  max-width: 90vw;
  max-height: 80vh;
  width: 100%;
  height: auto;
}

.media-player-item {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.media-caption {
  max-width: 90%;
  width: 700px;
}

/* --- ESTILOS DA PAGINAÇÃO MODERNA --- */
:deep(.modern-pagination) {
  gap: 4px;

  .q-btn {
    font-weight: 500;
    margin: 0 2px;
    
    /* Hover suave nos números */
    &:not(.bg-primary) {
        &:hover {
            background-color: rgba(0,0,0,0.05);
        }
    }
  }
}

// AJUSTES RESPONSIVOS
@media (max-width: 1023px) {
  .gallery-content-wrapper {
    padding: 8px;
  }
  
  .row {
    --q-gutter-x: 0.5rem;
    --q-gutter-y: 0.5rem;
  }
}

@media (max-width: 599px) {
  .media-caption {
    .text-h6 {
      font-size: 1rem;
      line-height: 1.2;
    }
    .text-subtitle1 {
      font-size: 0.8rem;
    }
  }
  
  .media-item-title {
    font-size: 0.75rem;
  }
}
</style>