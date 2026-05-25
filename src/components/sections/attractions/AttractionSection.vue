<template>
  <div class="attractions-section">
    <div class="header-section text-center q-mb-lg">
      <h2 class="text-h4 text-weight-bold text-primary">{{ t('attractions_title') }}</h2>
      <p class="text-subtitle1 text-grey-8">{{ t('attractions_subtitle') }}</p>
    </div>

    <!-- Filter -->
    <div class="row items-center q-mb-lg q-px-md">
      <div class="col-12 col-sm-auto">
        <q-select
          v-if="categories.length > 0"
          v-model="selectedCategory"
          :options="categoryOptions"
          :label="t('filter_by_category')"
          dense
          outlined
          bg-color="white"
          class="filter-select"
          style="min-width: 200px"
          emit-value
          map-options
          clearable
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="mdi-filter-variant" color="primary" />
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon :name="scope.opt.icon" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </div>

    <!-- Initial loading skeleton grid -->
    <div v-if="loading" class="tours-grid">
      <div v-for="i in 6" :key="`init-sk-${i}`" class="tour-grid-item">
        <q-card class="tour-card skeleton-card" flat bordered>
          <q-skeleton height="220px" square />
          <q-card-section class="card-content-section">
            <div class="row items-center q-gutter-x-sm q-mb-sm">
              <q-skeleton type="text" width="50px" />
              <q-skeleton type="text" width="70px" />
            </div>
            <q-skeleton type="text" class="q-mb-xs" width="85%" style="font-size: 1.25rem" />
            <q-skeleton type="text" width="60%" style="font-size: 1.25rem" />
            <q-skeleton type="text" class="q-mt-sm" width="100%" />
            <q-skeleton type="text" width="90%" />
            <q-skeleton type="text" width="75%" />
            <q-skeleton type="QBtn" class="q-mt-md full-width" height="36px" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Tour grid -->
    <template v-else>
      <div v-if="filteredTours.length > 0" class="tours-grid">
        <!-- Visible tour cards -->
        <div
          v-for="tour in visibleTours"
          :key="tour.id"
          class="tour-grid-item"
        >
          <q-card class="tour-card" flat bordered>
            <q-img
              :src="tour.mainImage"
              :alt="tour.name"
              height="220px"
              fit="cover"
              class="card-image"
              loading="lazy"
            >
              <template v-slot:loading>
                <q-spinner-puff color="primary" />
              </template>
              <div class="absolute-bottom-left bg-transparent q-pa-md image-overlay">
                <div class="tour-category-badge shadow-3" v-if="tour.categories.length">
                  {{ tour.categories[0]?.name }}
                </div>
              </div>
            </q-img>

            <q-card-section class="card-content-section">
              <div class="row items-center no-wrap q-mb-sm">
                <div class="row items-center text-grey-7 text-caption">
                  <q-icon name="mdi-clock-outline" size="xs" class="q-mr-xs" />
                  <span>{{ tour.durationInHours }}h</span>
                  <q-separator vertical class="q-mx-sm" />
                  <q-icon name="mdi-map-marker-distance" size="xs" class="q-mr-xs" />
                  <span>{{ tour.distanceFromCity }}</span>
                </div>
              </div>

              <h3 class="card-title">{{ tour.name }}</h3>
              <p class="card-description">{{ tour.shortDescription }}</p>

              <div class="row q-mt-auto q-pt-sm">
                <div class="col-12">
                  <q-btn
                    :label="t('view_details')"
                    class="full-width cta-button"
                    unelevated
                    no-caps
                    color="primary"
                    outline
                    :to="getTourLink(tour.slug)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Skeleton cards while loading more -->
        <template v-if="isLoadingMore">
          <div v-for="i in skeletonCount" :key="`sk-more-${i}`" class="tour-grid-item">
            <q-card class="tour-card skeleton-card" flat bordered>
              <q-skeleton height="220px" square />
              <q-card-section class="card-content-section">
                <div class="row items-center q-gutter-x-sm q-mb-sm">
                  <q-skeleton type="text" width="50px" />
                  <q-skeleton type="text" width="70px" />
                </div>
                <q-skeleton type="text" class="q-mb-xs" width="85%" style="font-size: 1.25rem" />
                <q-skeleton type="text" width="60%" style="font-size: 1.25rem" />
                <q-skeleton type="text" class="q-mt-sm" width="100%" />
                <q-skeleton type="text" width="90%" />
                <q-skeleton type="text" width="75%" />
                <q-skeleton type="QBtn" class="q-mt-md full-width" height="36px" />
              </q-card-section>
            </q-card>
          </div>
        </template>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center q-pa-xl text-grey-7">
        <q-icon name="mdi-map-search-outline" size="3rem" class="q-mb-md" color="grey-5" />
        <p class="text-body1">{{ t('no_attractions_found') }}</p>
      </div>
    </template>

    <!-- Intersection observer trigger (always in DOM) -->
    <div ref="loadMoreTrigger" class="load-more-trigger" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Tour } from 'src/model/Tour';
import { useRoute } from 'vue-router';

const ITEMS_PER_PAGE = 10;
const LOADING_DELAY_MS = 700;

const props = defineProps<{
  tours: Tour[];
  loading?: boolean;
}>();

const { t } = useI18n();
const route = useRoute();

const selectedCategory = ref<string | null>(null);
const displayCount = ref(ITEMS_PER_PAGE);
const isLoadingMore = ref(false);
const loadMoreTrigger = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const getTourLink = (slug: string) => {
  const currentLang = route.params.lang || 'pt';
  const typeMap: Record<string, string> = { pt: 'passeio', en: 'tour', es: 'excursion' };
  const type = typeMap[currentLang as string] || 'passeio';
  return { name: 'singleTourDetails', params: { lang: currentLang, slug, type } };
};

const categories = computed(() => {
  const allTags = props.tours.flatMap(t => t.categories);
  const uniqueTags = new Map();
  allTags.forEach(tag => {
    if (!uniqueTags.has(tag.id)) uniqueTags.set(tag.id, tag);
  });
  return Array.from(uniqueTags.values()).sort((a, b) => a.name.localeCompare(b.name));
});

const categoryOptions = computed(() =>
  categories.value.map(c => ({ label: c.name, value: c.id, icon: c.icon }))
);

const filteredTours = computed(() => {
  if (!selectedCategory.value) return props.tours;
  return props.tours.filter(t => t.categories.some(c => c.id === selectedCategory.value));
});

const visibleTours = computed(() => filteredTours.value.slice(0, displayCount.value));
const hasMore = computed(() => displayCount.value < filteredTours.value.length);

// Show 3 skeleton cards (one grid row on desktop) while loading more
const skeletonCount = computed(() =>
  Math.min(3, filteredTours.value.length - displayCount.value)
);

const loadMore = async () => {
  if (isLoadingMore.value || !hasMore.value) return;
  isLoadingMore.value = true;
  await new Promise<void>(resolve => setTimeout(resolve, LOADING_DELAY_MS));
  displayCount.value += ITEMS_PER_PAGE;
  isLoadingMore.value = false;
};

const setupObserver = () => {
  observer?.disconnect();
  observer = null;
  if (!loadMoreTrigger.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting && hasMore.value) void loadMore();
    },
    { rootMargin: '200px', threshold: 0 }
  );
  observer.observe(loadMoreTrigger.value);
};

watch(filteredTours, () => {
  displayCount.value = ITEMS_PER_PAGE;
  isLoadingMore.value = false;
  void nextTick(() => setupObserver());
});

onMounted(() => {
  void nextTick(() => setupObserver());
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped lang="scss">
.attractions-section {
  padding: 0;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 16px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
}

.tour-grid-item {
  display: flex;
  flex-direction: column;
}

.tour-card {
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-color: rgba(0, 0, 0, 0.05);

  &:hover:not(.skeleton-card) {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
}

.skeleton-card {
  pointer-events: none;
}

.card-image {
  position: relative;
}

.image-overlay {
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.tour-category-badge {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  display: inline-block;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.card-content-section {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 0 0 10px 0;
  color: var(--text-primary-color);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 3rem;
}

.card-description {
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  line-height: 1.5;
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cta-button {
  border-radius: 12px;
  font-weight: 600;
  border-width: 1.5px;

  &:hover {
    background-color: var(--primary-color) !important;
    color: white !important;
  }
}

.load-more-trigger {
  height: 1px;
  margin-top: 40px;
}
</style>
