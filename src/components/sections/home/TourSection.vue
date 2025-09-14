<template>
  <div id="tours-section" class="tours-section-container q-py-xl">
    <div class="text-center q-mb-xl">
      <h2 class="section-title">{{ t('tours_section_title') }}</h2>
    </div>

    <div v-if="loading" class="text-center">
      <q-spinner-dots color="primary" size="3rem" />
      <p class="q-mt-md">Carregando passeios...</p>
    </div>

    <div v-else class="scroll-wrapper">
      <div
        ref="scrollContainer"
        class="tours-scroll-container"
        @mousedown="mouseDownHandler"
        @mouseleave="mouseLeaveHandler"
        @mouseup="mouseUpHandler"
        @mousemove="mouseMoveHandler"
      >
        <div class="row no-wrap items-stretch q-gutter-lg">
          <div v-for="tour in tours" :key="tour.id" class="tour-card-wrapper">
            <q-card class="tour-card full-height card-shadow" flat bordered @click="viewTour(tour.id)">
              <q-img :src="tour.image" :ratio="16 / 9" />
              <q-card-section class="flex-grow q-pa-md">
                <h3 class="card-title q-mt-sm q-mb-md">{{ getTourTitle(tour.id) }}</h3>
                <div class="tour-details q-mb-md">
                  <q-chip outline :color="currentTheme === 'pantanal_verde' ? 'primary' : 'secondary'" size="sm" icon="mdi-clock-outline">
                    {{ getTourDuration(tour.id) }}
                  </q-chip>
                  <q-chip outline color="accent" size="sm" icon="mdi-star-outline">
                    {{ getTourType(tour.id) }}
                  </q-chip>
                </div>
                <p class="card-description">{{ getTourDescription(tour.id) }}</p>
              </q-card-section>
              <q-separator spaced />
              <q-card-section class="price-section q-pa-md">
                <div class="tour-price">
                  <span class="price-from">{{ t('price_from') }}</span>
                  <span class="price-value">R$ {{ tour.price }}</span>
                </div>
              </q-card-section>
              <q-card-actions class="card-actions-bottom">
                <q-btn color="primary" :label="t('tours_cta_button')" class="full-width" unelevated />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourStore } from 'src/stores/useTourStore';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const tourStore = useTourStore();
const { allTours: tours, loading } = storeToRefs(tourStore);

onMounted(async () => {
  await tourStore.fetchTours();
});

const getTourTitle = (id: string) => t(`tour_${id}_title`, id);
const getTourDescription = (id: string) => t(`tour_${id}_desc`, id);
const getTourDuration = (id: string) => t(`tour_${id}_duration`, id);
const getTourType = (id: string) => t(`tour_${id}_type`,id);

const viewTour = (tourId: string) => {
  void router.push({ name: 'tourDetails', params: { id: tourId, lang: route.params.lang || 'pt' } });
};

const scrollContainer = ref<HTMLElement | null>(null);
const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const mouseDownHandler = (e: MouseEvent) => {
  if (!scrollContainer.value) return;
  isDown.value = true;
  scrollContainer.value.classList.add('active-scroll');
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};
const mouseLeaveHandler = () => {
  if (!scrollContainer.value) return;
  isDown.value = false;
  scrollContainer.value.classList.remove('active-scroll');
};
const mouseUpHandler = () => {
  if (!scrollContainer.value) return;
  isDown.value = false;
  scrollContainer.value.classList.remove('active-scroll');
};
const mouseMoveHandler = (e: MouseEvent) => {
  if (!isDown.value || !scrollContainer.value) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX.value) * 2;
  scrollContainer.value.scrollLeft = scrollLeft.value - walk;
};
</script>

<style scoped lang="scss">
.price-value {
    color: var(--primary-color);
}

.card-description,
.price-from {
    color: var(--text-secondary-color);
}

.tour-card {
    background-color: var(--card-bg-color);
    border-color: var(--border-color);
}

.section-title {
    font-weight: 800;
    font-size: 2.5rem;
}

.scroll-wrapper {
    position: relative;
    padding: 0 16px;

    @media (min-width: 600px) {

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 60px;
            z-index: 2;
            pointer-events: none;
        }

        &::before {
            left: 16px;
            background: linear-gradient(to right, var(--page-bg-color), transparent);
        }

        &::after {
            right: 16px;
            background: linear-gradient(to left, var(--page-bg-color), transparent);
        }
    }
}

.tours-scroll-container {
    .row {
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 600px) {
        overflow-x: auto;
        padding-bottom: 20px;
        cursor: grab;

        &.active-scroll {
            cursor: grabbing;
            scroll-behavior: auto;
        }

        .row {
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding: 0 32px;
        }
    }
}

.tour-card-wrapper {
    width: 100%;
    max-width: 340px;

    @media (min-width: 600px) {
        flex: 0 0 320px;
    }
}

.tour-card {
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15) !important;
    }
}

.card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    overflow-wrap: break-word;
    word-break: break-word;
}

.tour-details {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.card-description {
    font-family: 'Lato', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5;
    min-height: 85px;
    overflow-wrap: break-word;
    word-break: break-word;
}

.price-section {
    padding-top: 0;
}

.tour-price {
    text-align: left;
}

.price-from {
    font-family: 'Lato', sans-serif;
    font-size: 0.8rem;
}

.price-value {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1;
}

.card-actions-bottom {
    margin-top: auto;
    padding: 16px;
    padding-top: 0;
}
</style>