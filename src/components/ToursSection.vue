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
        v-for="tour in tours"
        :key="tour.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="tour-card full-height" flat bordered>
          <q-img :src="tour.image" :ratio="4/3" class="tour-image">
            <div class="absolute-bottom-left custom-badge">
              <q-icon :name="tour.locationIcon" size="18px" class="q-mr-xs" />
              <span>{{ getTourLocation(tour.location) }}</span>
            </div>
          </q-img>

          <q-card-section>
            <div class="text-h6 card-title q-mb-sm">{{ getTourTitle(tour.id) }}</div>

            <div class="row q-gutter-sm text-caption highlights q-mb-md">
              <div class="highlight-item">
                <q-icon name="mdi-clock-outline" />
                <span>{{ getTourDuration(tour.id) }}</span>
              </div>
              <div class="highlight-item">
                <q-icon name="mdi-map-marker-outline" />
                <span>{{ getTourType(tour.id) }}</span>
              </div>
            </div>

            <p class="text-body2 card-description">
              {{ getTourDescription(tour.id) }}
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

// --- Tradução ---
const { t } = useI18n();

// --- Lógica de Tema (COM TIPAGEM CORRETA) ---
type ThemeName = 'pantanal_verde' | 'bonito_azul';

interface Theme {
  name: ThemeName;
  label: string;
  icon: string;
}

const currentTheme = ref<ThemeName>('pantanal_verde');

const themes = ref<Theme[]>([
  { name: 'pantanal_verde', label: 'Tema Pantanal', icon: 'mdi-leaf' },
  { name: 'bonito_azul', label: 'Tema Bonito', icon: 'mdi-water' },
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


// --- Dados dos Passeios (COM TIPAGEM CORRETA) ---
type TourLocation = 'bonito' | 'pantanal';

interface Tour {
  id: string;
  image: string;
  location: TourLocation;
  locationIcon: string;
}

const tours = ref<Tour[]>([
  {
    id: 'flutuacao_prata',
    image: 'https://www.pantanalecotrips.com.br/upload/passeios/imagem_20200821160351.jpg',
    location: 'bonito',
    locationIcon: 'mdi-fish'
  },
  {
    id: 'safari_pantanal',
    image: 'https://www.pantanalecotrips.com.br/upload/passeios/imagem_20200821162358.jpg',
    location: 'pantanal',
    locationIcon: 'mdi-paw'
  },
  {
    id: 'gruta_lago_azul',
    image: 'https://www.pantanalecotrips.com.br/upload/passeios/imagem_20200821153303.jpg',
    location: 'bonito',
    locationIcon: 'mdi-fish'
  },
  {
    id: 'cavalgada_pantaneira',
    image: 'https://www.pantanalecotrips.com.br/upload/passeios/imagem_20200821162125.jpg',
    location: 'pantanal',
    locationIcon: 'mdi-paw'
  },
]);

// Funções para obter textos traduzidos
const getTourTitle = (id: string) => t(`tour_${id}_title`);
const getTourDescription = (id: string) => t(`tour_${id}_desc`);
const getTourDuration = (id: string) => t(`tour_${id}_duration`);
const getTourType = (id: string) => t(`tour_${id}_type`);
const getTourLocation = (location: TourLocation) => t(`location_${location}`);

// --- Ações ---
const viewTour = (tourId: string) => {
  console.log(`Redirecionando para a página do passeio: ${tourId}`);
  // Lógica de navegação: router.push(`/passeios/${tourId}`);
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

.theme-pantanal_verde {
  --primary-color: #6eab34;
  --accent-color: #008fc3;
  --bg-color: #f8f7f2;
  --text-color-dark: #333;
  --text-color-light: #f5f5f5;
  --card-bg-color: #ffffff;
  --card-border-color: #e0e0e0;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.theme-bonito_azul {
  --primary-color: #008fc3;
  --accent-color: #6eab34;
  --bg-color: #f0f4f8;
  --text-color-dark: #2c3e50;
  --text-color-light: #ffffff;
  --card-bg-color: #ffffff;
  --card-border-color: #dbe2e8;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

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

.tour-image .q-img__content > div {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
}

.custom-badge {
  padding: 4px 12px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: white;
  border-radius: 0 8px 0 0;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 0;
  display: flex;
  align-items: center;
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
  gap: 6px;
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