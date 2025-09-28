<template>
  <div id="packages-section" class="tours-section-container q-py-xl">
    <div class="text-center q-mb-xl">
      <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
    </div>

    <div v-if="loading" class="text-center">
      <q-spinner-dots color="primary" size="3rem" />
    </div>

    <HorizontalGradientMask v-else @item-click="viewPackage">
      <div
        v-for="pkg in validPackages"
        :key="pkg.id"
        :data-id="pkg.id"
        :data-slug="pkg.slug"
        class="col-12"
        :class="$q.screen.gt.xs ? 'q-pr-lg' : 'q-px-md'"
        :style="$q.screen.gt.xs ? { width: '360px', flexShrink: 0 } : {}"
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
                <span>
                  {{ pkg.durationInDays }} {{ t('days') }} /
                  {{ pkg.durationInNights }} {{ t('nights') }}
                </span>
              </div>
              <template v-if="pkg.minPeople">
                <q-separator vertical spaced="sm" />
                <div class="info-item">
                  <q-icon name="mdi-account-group" />
                  <span>Mín. {{ pkg.minPeople }} {{ t('people') }}</span>
                </div>
              </template>
            </div>
            <h3 class="card-title">{{ pkg.title }}</h3>
            <p class="card-description">{{ pkg.subtitle }}</p>
            <div class="icon-section-wrapper">
              <div v-if="pkg.packageCategories?.length">
                <h4 class="icon-list-title">{{ t('categories') }}</h4>
                <div class="icon-list">
                  <div
                    v-for="category in pkg.packageCategories"
                    :key="category.id"
                    class="icon-list-item"
                  >
                    <q-icon :name="category.icon" />
                    <span>{{ category.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-section-wrapper q-mt-md">
              <div v-if="pkg.packageRecommendedFor?.length">
                <h4 class="icon-list-title">{{ t('recommended_for') }}</h4>
                <div class="icon-list">
                  <div
                    v-for="audience in pkg.packageRecommendedFor"
                    :key="audience.id"
                    class="icon-list-item"
                  >
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
              tabindex="-1"
            />
          </q-card-actions>
        </q-card>
      </div>
    </HorizontalGradientMask>
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { type TourPackage } from 'src/model/TourPackage';
import HeroBanner from 'src/components/banner/HeroBanner.vue';
import HorizontalGradientMask from 'src/components/mask/HorizontalGradientMask.vue';

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

// Função que será chamada pelo evento emitido pelo componente filho
const viewPackage = (packageSlug: string) => {
  void router.push({
    name: 'tourDetails',
    params: {
      slug: packageSlug,
      lang: route.params.lang || 'pt',
    },
  });
};

watch(
  () => route.params.lang,
  async (newLang) => {
    packageStore.clearPackages();
    const lang = langMap[newLang as string] || 'pt-BR';
    locale.value = lang;
    await packageStore.fetchPackages(lang);
  },
  { immediate: true } // Adicionado para buscar os dados na primeira carga
);
</script>

<style scoped lang="scss">
/* O CSS do componente pai permanece exatamente o mesmo */
.section-title {
  font-weight: 800;
  font-size: 2rem;
  @media (min-width: $breakpoint-sm-min) {
    font-size: 2.5rem;
  }
}

.package-card {
  --card-bg-color: #ffffff;
  --card-border-color: #eef2f1;
  --card-primary-color: #4db6ac;
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