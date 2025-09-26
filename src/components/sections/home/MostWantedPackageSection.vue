<template>
  <div id="packages-section" class="tours-section-container q-py-xl">
    <div class="text-center q-mb-xl">
      <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
    </div>

    <div v-if="loading" class="text-center">
      <q-spinner-dots color="primary" size="3rem" />
    </div>

    <div v-else class="scroll-wrapper">
      <div ref="scrollContainer" class="tours-scroll-container" @mousedown="mouseDownHandler"
        @mouseleave="mouseLeaveHandler" @mouseup="mouseUpHandler" @mousemove="mouseMoveHandler">
        <div class="row no-wrap items-stretch q-gutter-lg">

          <div v-for="pkg in validPackages" :key="pkg.id" class="tour-card-wrapper">
            <q-card class="package-card-themed" :class="cardThemeClass" flat bordered @click="viewPackage(pkg.id)">

              <HeroBanner
                :image-src="pkg.image"
                :subtitle="t('package_tour')"
                :title="pkg.title"
              />

              <q-card-section class="card-content-section">
                <div class="core-info-pill">
                  <div class="info-item">
                    <q-icon name="mdi-calendar-clock" />
                    <span>{{ pkg.qtdDay }} {{ t('days') }} / {{ pkg.qtdNight }} {{ t('nights') }} </span>
                  </div>
                  <q-separator vertical spaced="sm" />
                  <div v-if="pkg.minNumberPeople" class="info-item">
                    <q-icon name="mdi-account-group" />
                    <span>Mín. {{ pkg.minNumberPeople }} {{ t("people") }}</span>
                  </div>
                </div>

                <h3 class="card-title">{{ pkg.title }}</h3>
                <p class="card-description">{{ pkg.subtitle }}</p>

                <div class="icon-section-wrapper">
                  <div v-if="pkg.packageCategory && pkg.packageCategory.length">
                    <h4 class="icon-list-title"> {{ t("categories") }} </h4>
                    <div class="icon-list">
                      <div v-for="category in pkg.packageCategory" :key="category.name" class="icon-list-item">
                        <q-icon :name="category.icon" />
                        <span>{{ category.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions class="card-actions q-my-md">
                <q-btn :label="t('tours_cta_button')" class="full-width cta-button" unelevated
                  icon-right="mdi-arrow-right" />
              </q-card-actions>
            </q-card>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useMostWantedPackageStore } from 'src/stores/useMostWantedPackageStore';
import { type MostWantedPackage } from 'src/model/MostWantedPackage';
import HeroBanner from 'src/components/banner/HeroBanner.vue';

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

// Propriedade computada que gera a classe do tema dinamicamente
const cardThemeClass = computed(() => `theme-${currentTheme.value}`);

const packageStore = useMostWantedPackageStore();
const { allMostWantedPackage: packages, loading } = storeToRefs(packageStore);

const validPackages = computed(() =>
  packages.value.filter((pkg): pkg is MostWantedPackage & { id: string } => !!pkg.id)
);

const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };

onMounted(async () => {
  const lang = langMap[route.params.lang as string] || 'pt-BR';
  locale.value = lang;
  await packageStore.fetchMostWantedPackage(lang);
});

watch(() => route.params.lang, async (newLang) => {
  packageStore.clearMostWantedPackage();
  const lang = langMap[newLang as string] || 'pt-BR';
  locale.value = lang;
  await packageStore.fetchMostWantedPackage(lang);
});

const viewPackage = (packageId: string) => {
  void router.push({ name: 'packageDetails', params: { id: packageId, lang: route.params.lang || 'pt' } });
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
.section-title {
  font-weight: 800;
  font-size: 2.5rem;
}

.scroll-wrapper {
  position: relative;
  padding: 0 16px;
}

.tours-scroll-container {
  @media (min-width: 600px) {
    overflow-x: auto;
    padding-bottom: 20px;
    cursor: grab;

    &.active-scroll {
      cursor: grabbing;
    }

    .row {
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding: 0 32px;
    }
  }

  @media (max-width: 599px) {
    .row {
      justify-content: center;
    }
  }
}

.tour-card-wrapper {
  width: 100%;
  max-width: 380px;
  padding-bottom: 10px;

  @media (min-width: 600px) {
    flex: 0 0 360px;
  }
}

// === DESIGN COM TEMA DINÂMICO ===
.package-card-themed {
  // --- Tema Padrão (Branco/Claro) ---
  --card-bg-color: #ffffff;
  --card-border-color: #eef2f1;
  --card-primary-color: #319782;
  --card-text-primary: #1a2e29;
  --card-text-secondary: #5c6c68;
  --card-subtle-bg: #f5f8f7;
  --card-shadow: 0 4px 15px rgba(49, 151, 130, 0.08);
  --card-hover-shadow: 0 8px 30px rgba(49, 151, 130, 0.15);

  // --- Sobrescrita para o tema 'pantanal_verde' ---
  &.theme-pantanal_verde {
    --card-bg-color: #1a2e29;
    --card-border-color: #2a413a;
    --card-primary-color: #4db6ac; // Verde mais claro para contraste
    --card-text-primary: #f5f5f5;
    --card-text-secondary: #a0b5af;
    --card-subtle-bg: #223a33;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    --card-hover-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  }

  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 20px;
  box-shadow: none;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-hover-shadow);
  }
}

.card-image {
  border-radius: 20px 20px 0 0;

  .package-tag {
    position: absolute;
    top: 16px;
    left: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
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
}

.icon-list-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--card-text-secondary);
  opacity: 0.7;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;

  &:not(:first-child) {
    margin-top: 16px;
  }
}

// === ALTERAÇÃO AQUI ===
.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px; // Reduz o espaçamento entre os badges
}

// === ALTERAÇÃO AQUI ===
.icon-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--card-text-secondary);

  // Estilos do badge
  background-color: var(--card-subtle-bg);
  padding: 6px 12px;
  border-radius: 20px; // Deixa o badge em formato de pílula

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
    color: var(--card-bg-color) !important; // Cor do texto inverte para contraste
    border-radius: 14px;
    font-weight: 600;
    padding: 14px;
    font-size: 1rem;
    text-transform: none;
  }
}
</style>