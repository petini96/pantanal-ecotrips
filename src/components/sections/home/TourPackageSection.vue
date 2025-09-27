<template>
  <div id="packages-section" class="tours-section-container q-py-xl">
    <div class="text-center q-mb-xl">
      <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
    </div>

    <div v-if="loading" class="text-center">
      <q-spinner-dots color="primary" size="3rem" />
    </div>

    <div
      v-else
      class="scroll-mask"
      :class="{
        'show-left-gradient': showLeftGradient,
        'show-right-gradient': showRightGradient
      }"
    >
      <div
        ref="scrollContainer"
        class="tours-scroll-container"
        @mousedown="mouseDownHandler"
        @mouseleave="mouseLeaveHandler"
        @mouseup="mouseUpHandler"
        @mousemove="mouseMoveHandler"
        @scroll.passive="handleScroll"
      >
        <div class="row items-stretch q-gutter-lg" :class="{ 'no-wrap': $q.screen.gt.xs }">
          <div
            v-for="pkg in validPackages"
            :key="pkg.id"
            class="tour-card-wrapper"
            :data-id="pkg.id"
            :data-slug="pkg.slug"
          >
            <q-card class="package-card" flat bordered>
              <HeroBanner
                :image-src="pkg.image"
                :subtitle="t('package_tour')"
                :title="pkg.title"
              />

              <q-card-section class="card-content-section">
                <div class="core-info-pill">
                  <div class="info-item">
                    <q-icon name="mdi-calendar-clock" />
                    <span>{{ pkg.durationInDays }} {{ t('days') }} / {{ pkg.durationInNights }} {{ t('nights') }}</span>
                  </div>
                  <template v-if="pkg.minPeople">
                    <q-separator vertical spaced="sm" />
                    <div class="info-item">
                      <q-icon name="mdi-account-group" />
                      <span>Mín. {{ pkg.minPeople }} {{ t("people") }}</span>
                    </div>
                  </template>
                </div>

                <h3 class="card-title">{{ pkg.title }}</h3>
                <p class="card-description">{{ pkg.subtitle }}</p>

                <div class="icon-section-wrapper">
                  <div v-if="pkg.packageCategories && pkg.packageCategories.length">
                    <h4 class="icon-list-title">{{ t("categories") }}</h4>
                    <div class="icon-list">
                      <div v-for="category in pkg.packageCategories" :key="category.id" class="icon-list-item">
                        <q-icon :name="category.icon" />
                        <span>{{ category.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="icon-section-wrapper q-mt-md">
                  <div v-if="pkg.packageRecommendedFor && pkg.packageRecommendedFor.length">
                    <h4 class="icon-list-title">{{ t("recommended_for") }}</h4>
                    <div class="icon-list">
                      <div v-for="audience in pkg.packageRecommendedFor" :key="audience.id" class="icon-list-item">
                        <q-icon :name="audience.icon" />
                        <span>{{ audience.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions class="card-actions q-my-md">
                <q-btn
                  :label="t('tours_cta_button')"
                  class="full-width cta-button"
                  unelevated
                  icon-right="mdi-arrow-right"
                  @click="viewPackage(pkg.slug)"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { type TourPackage } from 'src/model/TourPackage';
import HeroBanner from 'src/components/banner/HeroBanner.vue';

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const $q = useQuasar();

const packageStore = useTourPackageStore();
const { allPackages: packages, loading } = storeToRefs(packageStore);

const validPackages = computed(() =>
  packages.value.filter((pkg): pkg is TourPackage => !!pkg.id && !!pkg.slug)
);

const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };

onMounted(async () => {
  const lang = langMap[route.params.lang as string] || 'pt-BR';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
  if (scrollContainer.value) {
    resizeObserver.observe(scrollContainer.value);
  }
});

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    resizeObserver.unobserve(scrollContainer.value);
  }
});

watch(() => route.params.lang, async (newLang) => {
  packageStore.clearPackages();
  const lang = langMap[newLang as string] || 'pt-BR';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
});

// ATUALIZADO: A função agora recebe apenas o slug
const viewPackage = (packageSlug: string) => {
  if (isDragging.value) return; // Previne navegação durante o arrastar
  
  void router.push({
    // Lembre-se que o nome da rota no seu router/routes.ts deve ser este
    name: 'tourDetails', 
    params: {
      slug: packageSlug,
      lang: route.params.lang || 'pt'
    }
  });
};

// --- LÓGICA DE SCROLL E GRADIENTES ---
const scrollContainer = ref<HTMLElement | null>(null);
const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isDragging = ref(false);
const dragThreshold = 10;

const scrollPosition = ref(0);
const maxScroll = ref(0);

const showLeftGradient = computed(() => $q.screen.gt.xs && scrollPosition.value > 0);
const showRightGradient = computed(() => $q.screen.gt.xs && scrollPosition.value < maxScroll.value);

const calculateMaxScroll = () => {
  if (scrollContainer.value) {
    maxScroll.value = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth - 1;
  }
};

const resizeObserver = new ResizeObserver(() => {
  calculateMaxScroll();
  handleScroll();
});

const handleScroll = () => {
  if (scrollContainer.value) {
    scrollPosition.value = scrollContainer.value.scrollLeft;
    if (scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth - 1 !== maxScroll.value) {
      calculateMaxScroll();
    }
  }
};

const mouseDownHandler = (e: MouseEvent) => {
  if (!$q.screen.gt.xs || !scrollContainer.value) return;
  isDown.value = true;
  isDragging.value = false;
  scrollContainer.value.classList.add('active-scroll');
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};

const mouseLeaveHandler = () => {
  if (!$q.screen.gt.xs || !scrollContainer.value) return;
  isDown.value = false;
  scrollContainer.value.classList.remove('active-scroll');
};

// ATUALIZADO: Agora busca o 'dataset.slug' para navegar
const mouseUpHandler = (e: MouseEvent) => {
  if (!$q.screen.gt.xs || !scrollContainer.value) return;
  isDown.value = false;
  scrollContainer.value.classList.remove('active-scroll');

  if (!isDragging.value) {
    const cardWrapper = (e.target as HTMLElement).closest('.tour-card-wrapper');
    if (cardWrapper instanceof HTMLElement) {
      const packageSlug = cardWrapper.dataset.slug; // Pega o slug do data attribute
      if (packageSlug) {
        viewPackage(packageSlug); // Navega usando o slug
      }
    }
  }
};

const mouseMoveHandler = (e: MouseEvent) => {
  if (!isDown.value || !$q.screen.gt.xs || !scrollContainer.value) return;
  e.preventDefault();

  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = x - startX.value;

  if (Math.abs(walk) > dragThreshold) {
    isDragging.value = true;
  }
  
  if (isDragging.value) {
    scrollContainer.value.scrollLeft = scrollLeft.value - walk * 1.5;
  }
};
</script>

<style scoped lang="scss">
/* Seu CSS completo e funcional permanece aqui... */
.section-title {
  font-weight: 800;
  font-size: 2rem;
  @media (min-width: $breakpoint-sm-min) {
    font-size: 2.5rem;
  }
}

.scroll-mask {
  position: relative;
  padding: 0;
  @media (max-width: $breakpoint-xs-max) {
    overflow: hidden;
  }
}

.scroll-mask::before,
.scroll-mask::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scroll-mask::before {
  left: 0;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
}

.scroll-mask::after {
  right: 0;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
}

.scroll-mask.show-left-gradient::before {
  opacity: 1;
}
.scroll-mask.show-right-gradient::after {
  opacity: 1;
}

.tours-scroll-container {
  .row {
    justify-content: center;
  }

  @media (min-width: $breakpoint-sm-min) {
    display: flex;
    overflow-x: scroll;
    cursor: grab;
    padding-bottom: 20px;
    margin-bottom: -20px;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, etc. */
    }

    &.active-scroll {
      cursor: grabbing;
      scroll-behavior: auto;
    }

    .row {
      padding: 0 32px;
      justify-content: flex-start;
    }
  }
}

.tour-card-wrapper {
  width: 100%;
  max-width: 380px;
  padding: 0 16px 10px 16px;

  @media (min-width: $breakpoint-sm-min) {
    width: 360px;
    flex: 0 0 360px;
    padding: 0;
  }
}

.package-card {
  --card-bg-color: #ffffff;
  --card-border-color: #eef2f1;
  --card-primary-color: #4DB6AC;
  --card-text-primary: #1a2e29;
  --card-text-secondary: #6c7a77;
  --card-subtle-bg: #f5f8f7;
  --card-shadow: 0 4px 15px rgba(77, 182, 172, 0.1);
  --card-hover-shadow: 0 8px 30px rgba(77, 182, 172, 0.18);
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 20px;
  box-shadow: none;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-hover-shadow);
  }
}

.card-content-section {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.core-info-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--card-subtle-bg);
  border-radius: 30px;
  margin-bottom: 20px;
  color: var(--card-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;

    .q-icon {
      color: var(--card-primary-color);
      font-size: 1.2rem;
    }
  }
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.3;
  margin: 0 0 8px 0;
  color: var(--card-text-primary);
}

.card-description {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--card-text-secondary);
  margin-bottom: 24px;
}

.icon-section-wrapper {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--card-border-color);

  & + .icon-section-wrapper {
    border-top: none;
    padding-top: 0;
  }
}

.icon-list-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--card-text-secondary);
  opacity: 0.7;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}

.icon-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--card-text-secondary);
  background-color: var(--card-subtle-bg);
  padding: 6px 12px;
  border-radius: 20px;

  .q-icon {
    color: var(--card-primary-color);
    font-size: 1.2rem;
  }
}

.card-actions {
  padding: 24px;
  padding-top: 0;

  .cta-button {
    background: var(--card-primary-color) !important;
    color: #ffffff !important;
    border-radius: 14px;
    font-weight: 600;
    padding: 14px;
    font-size: 1rem;
    text-transform: none;
  }
}
</style>