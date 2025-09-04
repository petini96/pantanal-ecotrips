<template>
  <q-page :class="['home-page', `theme-${currentTheme}`]">

    <!-- Seletores de Tema e Idioma -->
    <div class="page-controls">
      <div class="language-selector">
        <q-btn-dropdown flat :label="currentLanguageLabel" icon="mdi-translate" class="control-button">
          <q-list dense class="selector-list">
            <q-item v-for="lang in languages" :key="lang.code" clickable v-close-popup @click="changeLanguage(lang.code)">
              <q-item-section>
                <q-item-label>{{ lang.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="theme-selector">
        <q-btn-group flat class="control-button-group">
            <q-btn
              v-for="theme in themes"
              :key="theme.name"
              :label="theme.label"
              @click="setTheme(theme.name as ThemeName)"
              :class="{ 'active-theme': currentTheme === theme.name }"
               size="sm"
            />
        </q-btn-group>
      </div>
    </div>

    <!-- Seção Hero -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content text-center">
        <h1 class="hero-title">{{ t('hero_title') }}</h1>
        <p class="hero-subtitle">{{ t('hero_subtitle') }}</p>
        <q-btn
          color="secondary"
          text-color="white"
          unelevated
          :label="t('hero_cta')"
          size="lg"
          class="hero-cta"
          @click="scrollToTours"
        />
      </div>
    </section>

    <!-- Seção de Passeios -->
    <div id="tours-section" class="tours-section-container q-py-xl">
      <div class="text-center q-mb-xl">
        <h2 class="section-title">{{ t('tours_section_title') }}</h2>
      </div>

      <!-- Contêiner para Rolagem Horizontal no Desktop -->
      <div class="tours-scroll-container">
        <div class="row no-wrap items-stretch q-gutter-lg">
          <div
            v-for="tour in tours"
            :key="tour.id"
            class="tour-card-wrapper"
          >
            <q-card class="tour-card full-height card-shadow" flat bordered @click="viewTour(tour.id)">
              <q-img :src="tour.image" :ratio="16/9" />

              <q-card-section class="flex-grow q-pa-md">
                <h3 class="card-title q-mt-sm q-mb-md">{{ getTourTitle(tour.id) }}</h3>
                <div class="tour-details q-mb-md">
                  <div class="detail-item">
                    <q-icon name="mdi-clock-outline" size="16px" />
                    <span>{{ getTourDuration(tour.id) }}</span>
                  </div>
                  <div class="detail-item">
                    <q-icon name="mdi-star-outline" size="16px" />
                    <span>{{ getTourType(tour.id) }}</span>
                  </div>
                </div>
                <p class="card-description">
                  {{ getTourDescription(tour.id) }}
                </p>
              </q-card-section>

              <q-separator spaced />

              <q-card-section class="price-section q-pa-md">
                 <div class="tour-price">
                  <span class="price-from">{{ t('price_from') }}</span>
                  <span class="price-value">R$ {{ tour.price }}</span>
                </div>
              </q-card-section>

              <q-card-actions class="card-actions-bottom q-pa-md">
                <q-btn
                  color="primary"
                  :label="t('tours_cta_button')"
                  class="full-width"
                  unelevated
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="home-footer text-center q-pa-lg">
       <p class="footer-text q-ma-none">
        © {{ new Date().getFullYear() }} Pantanal Ecotrips. Todos os direitos reservados.
      </p>
    </footer>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

// --- SETUP ---
const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();

// --- SEO ---
useMeta({
  title: 'Pantanal Ecotrips - Roteiros para Pantanal e Bonito',
});

// --- LÓGICA DE TEMA ---
type ThemeName = 'pantanal_verde' | 'bonito_azul';
const currentTheme = ref<ThemeName>('pantanal_verde');

const themeVariables: Record<ThemeName, Record<string, string>> = {
  pantanal_verde: {
    '--primary-color': '#2c5c3a',
    '--secondary-color': '#008fc3',
    '--page-bg-color': '#f4f2e9',
    '--card-bg-color': '#ffffff',
    '--text-primary-color': '#2c3e50',
    '--text-secondary-color': '#777777',
    '--border-color': '#e8e8e8',
    '--footer-bg-color': '#2c3e50',
    // Cores da Barra de Rolagem
    '--scrollbar-thumb-color': '#2c5c3a',
    '--scrollbar-track-color': '#f4f2e9',
  },
  bonito_azul: {
    '--primary-color': '#008fc3',
    '--secondary-color': '#2c5c3a',
    '--page-bg-color': '#f0f4f8',
    '--card-bg-color': '#ffffff',
    '--text-primary-color': '#2c3e50',
    '--text-secondary-color': '#777777',
    '--border-color': '#dde4ea',
    '--footer-bg-color': '#1d2a35',
    // Cores da Barra de Rolagem
    '--scrollbar-thumb-color': '#008fc3',
    '--scrollbar-track-color': '#f0f4f8',
  }
};

watch(currentTheme, (themeName) => {
  const variables = themeVariables[themeName];
  const root = document.documentElement;
  for (const key in variables) {
    root.style.setProperty(key, variables[key] ?? '');
  }
  localStorage.setItem('pantanal-theme', themeName);
}, { immediate: true });

const themes = ref([
  { name: 'pantanal_verde', label: 'Pantanal' },
  { name: 'bonito_azul', label: 'Bonito' },
]);

const setTheme = (themeName: ThemeName) => {
  currentTheme.value = themeName;
};

// --- LÓGICA DE IDIOMA ---
const languages = ref([
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]);
const currentLanguageLabel = computed(() => (route.params.lang as string || 'pt').toUpperCase());
const changeLanguage = (langCode: string) => {
  void router.push({ name: 'home', params: { lang: langCode } });
};
const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };
watch(() => route.params.lang, (newLang) => {
  locale.value = langMap[newLang as string] || 'pt-BR';
}, { immediate: true });

// --- CICLO DE VIDA ---
onMounted(() => {
  const savedTheme = localStorage.getItem('pantanal-theme');
  // **FIX DO ERRO DE TYPESCRIPT AQUI**
  // Verifica se o tema salvo é um dos temas válidos antes de aplicar
  if (savedTheme === 'pantanal_verde' || savedTheme === 'bonito_azul') {
    currentTheme.value = savedTheme;
  }
  if (!route.params.lang) {
    void router.replace({ name: 'home', params: { lang: 'pt' } });
  }
});

// --- DADOS DOS PASSEIOS ---
interface Tour { id: string; image: string; price: string; }
const tours = ref<Tour[]>([
  { id: 'safari_pantanal', image: 'src/assets/images/tours/tour_1.jpg', price: '2.850,00' },
  { id: 'flutuacao_prata', image: 'src/assets/images/tours/tour_2.jpeg', price: '1.980,00' },
  { id: 'combo_pantanal_bonito', image: 'src/assets/images/tours/tour_3.jpg', price: '4.500,00' },
  { id: 'cavalgada_pantaneira', image: 'src/assets/images/tours/tour_4.jpg', price: '1.550,00' },
  { id: 'outro_exemplo_1', image: 'src/assets/images/tours/tour_5.jpg', price: '1.234,00' },
  { id: 'outro_exemplo_2', image: 'src/assets/images/tours/tour_1.jpg', price: '5.678,00' },
]);

// --- FUNÇÕES ---
const getTourTitle = (id: string) => t(`tour_${id}_title`, id);
const getTourDescription = (id: string) => t(`tour_${id}_desc`, id);
const getTourDuration = (id: string) => t(`tour_${id}_duration`, id);
const getTourType = (id: string) => t(`tour_${id}_type`, id);
const scrollToTours = () => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });
const viewTour = (tourId: string) => console.log(`Abrir detalhes para o roteiro: ${tourId}`);
</script>

<style scoped lang="scss">
// Aplica cores do tema
.home-page {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;
}
.section-title, .card-title {
  color: var(--text-primary-color);
}
.hero-cta, .q-btn[color="primary"] {
  background-color: var(--primary-color) !important;
}
.q-btn[color="secondary"] {
  background-color: var(--secondary-color) !important;
}
.price-value {
  color: var(--primary-color);
}
.home-footer {
  background-color: var(--footer-bg-color);
}
.card-description, .price-from, .detail-item {
  color: var(--text-secondary-color);
}
.tour-card {
  background-color: var(--card-bg-color);
  border-color: var(--border-color);
}
.control-button-group .q-btn {
  color: var(--text-primary-color);
  &.active-theme {
    background-color: var(--primary-color);
    color: white;
  }
}
.selector-list {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary-color);
}

// --- CONTROLES GLOBAIS ---
.page-controls {
  position: absolute; top: 16px; right: 16px; z-index: 1000;
  display: flex; gap: 8px;
}
.control-button {
  color: white; background-color: rgba(0,0,0,0.3); border-radius: 8px;
  &.q-btn--dropdown { padding-right: 8px; }
}
.control-button-group {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

// --- SEÇÃO HERO ---
.hero-section {
  position: relative; height: 85vh; display: flex; align-items: center;
  justify-content: center; color: white;
}
.hero-background {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('./../assets/images/boca_onca_remake.jpg');
  background-size: cover; background-position: center;
  filter: brightness(0.7);
}
.hero-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
}
.hero-content {
  position: relative; z-index: 2; padding: 20px;
}
.hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 3.5rem;
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5); line-height: 1.2; margin-bottom: 1rem;
}
.hero-subtitle {
  font-family: 'Lato', sans-serif; font-size: 1.25rem; max-width: 550px;
  margin: 0 auto 2.5rem auto; opacity: 0.9;
}
.hero-cta {
  font-family: 'Montserrat', sans-serif; font-weight: bold; border-radius: 8px;
}

// --- SEÇÃO DE PASSEIOS ---
.section-title {
  font-weight: 800; font-size: 2.5rem;
}
.tours-scroll-container {
  .row {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: $breakpoint-md-min) {
    overflow-x: auto;
    padding-bottom: 20px;
    .row {
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
}
.tour-card-wrapper {
  width: 100%;
  max-width: 340px;
  @media (min-width: $breakpoint-md-min) {
    flex: 0 0 320px;
  }
}

// --- CARD DE PASSEIO ---
.tour-card {
  border-radius: 12px; transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; width: 100%;
  display: flex; flex-direction: column;
  border: 1px solid var(--border-color);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15) !important;
  }
}
.flex-grow { flex-grow: 1; }
.card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 1.25rem; line-height: 1.3;
  overflow-wrap: break-word; word-break: break-word;
}
.tour-details { display: flex; gap: 16px; }
.detail-item {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Lato', sans-serif; font-size: 0.9rem;
}
.card-description {
  font-family: 'Lato', sans-serif; font-size: 0.95rem;
  line-height: 1.5; min-height: 85px;
  overflow-wrap: break-word; word-break: break-word;
}
.price-section { padding-top: 0; }
.tour-price { text-align: left; }
.price-from {
  font-family: 'Lato', sans-serif; font-size: 0.8rem;
}
.price-value {
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 1.75rem; line-height: 1;
}
.card-actions-bottom {
  margin-top: auto; padding: 0 16px 16px 16px;
}
.home-footer { color: white; }
.footer-text { color: rgba(255,255,255,0.8); }

// --- RESPONSIVIDADE ---
@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; }
  .section-title { font-size: 2rem; }
}
@media (max-width: 600px) {
  .hero-title { font-size: 2.2rem; }
}
</style>