<template>
  <div :class="['tours-section-container', `theme-${currentTheme}`]">

    <div class="theme-selector-tours">
      <q-btn-group flat>
        <q-btn
          v-for="theme in themes"
          :key="theme.name"
          :icon="theme.icon"
          @click="setTheme(theme.name)"
          :class="{ 'active-theme': currentTheme === theme.name }"
          class="theme-button"
        >
          <q-tooltip>{{ theme.label }}</q-tooltip>
        </q-btn>
      </q-btn-group>
    </div>

    <div class="text-center q-mb-xl">
      <h2 class="section-title q-ma-none">{{ t('tours_section_title') }}</h2>
      <p class="section-subtitle">{{ t('tours_section_subtitle') }}</p>
    </div>

    <div class="row items-stretch q-gutter-lg justify-center">

      <div
        v-for="tour in loadedTours"
        :key="tour.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="tour-card full-height" flat bordered>
          <q-img :src="tour.mainImage" :ratio="4/3" class="tour-image" />

          <q-card-section>
            <div class="text-h6 card-title q-mb-sm">{{ tour.name }}</div>

            <div class="column q-gutter-xs text-caption highlights q-mb-md">
              <div class="highlight-item">
                <q-icon name="mdi-earth" size="18px" />
                <span><strong>Região:</strong> {{ getRegionFromTour(tour)?.name || 'N/A' }}</span>
              </div>

              <div class="highlight-item">
                <q-icon name="mdi-map-marker-outline" size="18px" />
                <span><strong>Cidade:</strong> {{ tour.city.name }}</span>
              </div>

              <div class="highlight-item">
                <q-icon name="mdi-clock-outline" size="18px" />
                <span><strong>Duração:</strong> {{ tour.durationInHours }} horas</span>
              </div>
            </div>
            <p class="text-body2 card-description">
              {{ tour.description }}
            </p>
          </q-card-section>

          <q-card-actions class="card-actions-bottom">
            <q-btn
              class="full-width cta-button"
              color="primary"
              unelevated
              :label="t('tours_cta_button')"
              icon-right="mdi-arrow-right-thin"
              @click="viewTour(tour.id)"
            />
          </q-card-actions>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

// 1. IMPORTAR OS MODELOS E DADOS REAIS
import type { Tour } from 'src/model/Tour';
import type { Region } from 'src/model/Region';
import { bonitoSerraBodoquenaPt, pantanalSulPt } from 'src/data/regions/Regions';
import { bocaDaOncaPt } from 'src/data/tours/BocaDaOnca';
// Simulação de outros passeios para o exemplo funcionar
import { estanciaMimosaPt } from 'src/data/tours/EstanciaMimosa';
import { rioDaPrataPt } from 'src/data/tours/RioDaPrata';
import { buracoDasArarasPt } from 'src/data/tours/BuracoDasAraras';

const { t } = useI18n();

// 2. LÓGICA PARA ENCONTRAR A REGIÃO A PARTIR DA CIDADE (A PARTE CENTRAL DA SOLUÇÃO)
const allRegions: Region[] = [bonitoSerraBodoquenaPt, pantanalSulPt];

const getRegionFromTour = (tour: Tour): Region | null => {
  const cityId = tour.city.id;
  if (!cityId) return null;
  return allRegions.find(region => region.cities.some(city => city.id === cityId)) || null;
};

// 3. CARREGAR DADOS REAIS DOS PASSEIOS (ao invés de dados mocados)
const loadedTours = ref<Tour[]>([
  bocaDaOncaPt,
  estanciaMimosaPt,
  rioDaPrataPt,
  buracoDasArarasPt
]);

// --- Lógica de Tema (sem alterações) ---
type ThemeName = 'light' | 'dark';

interface Theme {
  name: ThemeName;
  label: string;
  icon: string;
}

const currentTheme = ref<ThemeName>('dark'); // Mudei para azul para combinar com os passeios de Bonito

const themes = ref<Theme[]>([
  { name: 'light', label: 'Tema Pantanal', icon: 'mdi-leaf' },
  { name: 'dark', label: 'Tema Bonito', icon: 'mdi-water' },
]);

onMounted(() => {
  const savedTheme = localStorage.getItem('tour-theme') as ThemeName;
  if (savedTheme && themes.value.some(t => t.name === savedTheme)) {
    currentTheme.value = savedTheme;
  }
});

const setTheme = (themeName: ThemeName) => {
  currentTheme.value = themeName;
  localStorage.setItem('tour-theme', themeName);
};

// --- Ações ---
const viewTour = (tourId: string) => {
  console.log(`Redirecionando para a página do passeio: ${tourId}`);
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

.tours-section-container {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  padding: 60px 20px;
  background-color: var(--bg-color);
  color: var(--text-color-dark);
  transition: background-color 0.4s ease;
  position: relative;
}

.theme-selector-tours {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.theme-selector-tours .theme-button {
  color: var(--primary-color);
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  opacity: 0.8;
}

.theme-selector-tours .active-theme {
  background-color: var(--primary-color);
  color: var(--text-color-light);
  opacity: 1;
}

.section-title {
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-color-dark);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.tour-card {
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  display: flex;
  flex-direction: column;
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.card-title {
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-color-dark);
}

.card-description {
  color: var(--text-color-dark);
  opacity: 0.85;
  flex-grow: 1;
}

.highlights {
  opacity: 0.9;
  color: var(--text-color-dark);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.highlight-item strong {
  font-weight: 500;
}

.q-card__section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-actions-bottom {
  padding: 16px;
  padding-top: 0;
}

.cta-button {
  border-radius: 8px;
  font-weight: bold;
  text-transform: none;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>