<template>
  <q-page :class="['home-page', `theme-${currentTheme}`]">

    <section class="hero-section">
      <div class="page-controls">
        <div class="language-selector">
          <q-btn-dropdown flat :label="currentLanguageLabel" icon="mdi-translate" class="control-button">
            <q-list dense class="selector-list">
              <q-item v-for="lang in languages" :key="lang.code" clickable v-close-popup
                @click="changeLanguage(lang.code)">
                <q-item-section>
                  <q-item-label>{{ lang.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="theme-selector">
          <q-btn-group flat class="control-button-group">
            <q-btn v-for="theme in themes" :key="theme.name" :label="theme.label"
              @click="layoutConfigStore.setTheme(theme.name as ThemeName)"
              :class="{ 'active-theme': currentTheme === theme.name }" size="sm" />
          </q-btn-group>
        </div>
      </div>
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content text-center">
        <h1 class="hero-title">{{ t('hero_title') }}</h1>
        <p class="hero-subtitle">{{ t('hero_subtitle') }}</p>
        <q-btn color="secondary" text-color="white" unelevated :label="t('hero_cta')" size="lg" class="hero-cta"
          @click="scrollToTours" />
      </div>
    </section>

    <div id="tours-section" class="tours-section-container q-py-xl">
      <div class="text-center q-mb-xl">
        <h2 class="section-title">{{ t('tours_section_title') }}</h2>
      </div>
      <div class="scroll-wrapper">
        <div ref="scrollContainer" class="tours-scroll-container" @mousedown="mouseDownHandler"
          @mouseleave="mouseLeaveHandler" @mouseup="mouseUpHandler" @mousemove="mouseMoveHandler">
          <div class="row no-wrap items-stretch q-gutter-lg">
            <div v-for="tour in tours" :key="tour.id" class="tour-card-wrapper">
              <q-card class="tour-card full-height card-shadow" flat bordered @click="viewTour(tour.id)">
                <q-img :src="tour.image" :ratio="16 / 9" />
                <q-card-section class="flex-grow q-pa-md">
                  <h3 class="card-title q-mt-sm q-mb-md">{{ getTourTitle(tour.id) }}</h3>
                  <div class="tour-details q-mb-md">
                    <q-chip outline :color="currentTheme === 'pantanal_verde' ? 'primary' : 'secondary'" size="sm"
                      icon="mdi-clock-outline">
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

    <section id="why-us-section" class="q-py-xl content-section">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">{{ t('why_us_title') }}</h2>
        </div>
        <div class="row q-col-gutter-lg justify-center items-stretch">
          <div class="col-12 col-sm-6 col-md-3" v-for="(item, index) in whyUsItems" :key="item.icon">
             <q-intersection once transition="slide-up" :delay="index * 150" class="full-height">
               <q-card class="feature-card text-center full-height" flat>
                 <q-card-section>
                   <q-icon :name="item.icon" size="3.5rem" class="feature-icon" aria-hidden="true" />
                   <h3 class="feature-title">{{ t(item.title) }}</h3>
                   <p>{{ t(item.desc) }}</p>
                 </q-card-section>
               </q-card>
             </q-intersection>
           </div>
        </div>
      </div>
    </section>

    <section id="newsletter-section" class="q-py-xl newsletter-bg">
      <div class="container text-center text-white">
        <q-icon name="mdi-email-fast-outline" size="4rem" class="newsletter-icon" />
        <h2 class="section-title text-white">{{ t('newsletter_title') }}</h2>
        <p class="text-h6 q-mt-md" style="max-width: 650px; margin: auto; opacity: 0.9;">
          {{ t('newsletter_subtitle') }}
        </p>
        <q-form @submit.prevent="onNewsletterSubmit" class="q-mt-lg newsletter-form">
          <q-input
            v-model="newsletterEmail"
            :placeholder="t('newsletter_placeholder')"
            type="email"
            :rules="[val => !!val && /.+@.+\..+/.test(val) || t('newsletter_invalid_email')]"
            dark
            standout="bg-white text-black"
            input-class="text-black"
            class="newsletter-input"
          >
            <template v-slot:append>
              <q-btn type="submit" color="secondary" :label="t('newsletter_cta')" unelevated class="newsletter-btn" :loading="newsletterSubmitting" />
            </template>
          </q-input>
        </q-form>
      </div>
    </section>

    <section id="about-us-section" class="q-py-xl content-section about-us-bg">
      <div class="container text-center text-white">
        <h2 class="section-title text-white">{{ t('about_us_title') }}</h2>
        <p class="text-h6 q-mt-md" style="max-width: 800px; margin: auto; opacity: 0.9;">
          {{ t('about_us_content') }}
        </p>
        <q-btn id="about-us-contact-cta" color="secondary" text-color="white" unelevated size="lg" class="q-mt-xl"
          :label="t('about_us_cta')" href="https://wa.me/5567999022073" target="_blank" icon="mdi-whatsapp" />
      </div>
    </section>

    <section id="faq-section" class="q-py-xl content-section">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">{{ t('faq_title') }}</h2>
        </div>
        <div class="faq-list-container">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              v-for="faq in faqItems"
              :key="faq.question"
              group="faqGroup"
              :icon="faq.icon"
              :label="t(faq.question)"
              header-class="faq-question"
              class="faq-item"
            >
              <q-card>
                <q-card-section class="faq-answer">
                  {{ t(faq.answer) }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </section>

    <section id="credibility-section" class="q-py-xl content-section">
      <div class="container text-center">
        <h2 class="section-title">{{ t('credibility_title') }}</h2>
        <p class="text-subtitle1 text-grey-7 q-mb-xl">{{ t('credibility_subtitle') }}</p>
        <div class="row items-center justify-center q-col-gutter-xl">
          <div class="credibility-logo">
            <q-img src="~assets/images/logo_cadastur.png" alt="Logo Cadastur" width="200px" />
          </div>
          <div class="credibility-logo">
            <q-img src="~assets/images/logo_fodors.png" alt="Logo Fodor's Travel" width="180px" />
          </div>
          <div class="credibility-logo">
            <q-img src="~assets/images/logo_petitfute.png" alt="Logo Petit Futé" width="220px" />
          </div>
        </div>
      </div>
    </section>

    <footer class="home-footer text-center q-pa-lg">
      <p class="footer-text q-ma-none">
        © {{ new Date().getFullYear() }} Pantanal Ecotrips. Todos os direitos reservados.
      </p>
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useMeta, useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore, type ThemeName } from 'src/stores/layout-config-store';
import { type Tour, tours as allTours } from 'src/data/tours-data';

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const layoutConfigStore = useLayoutConfigStore();

const { theme: currentTheme } = storeToRefs(layoutConfigStore);

// --- SEO OTIMIZADO PARA A HOMEPAGE ---
useMeta(() => {
  const currentLang = (route.params.lang as string || 'pt');
  const baseURL = 'https://www.pantanalecotrips.roboticsmind.com.br';
  const ogImageURL = `${baseURL}/og-image.jpg`; 

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': t('meta_title'),
    'description': t('meta_description'),
    'url': baseURL,
    'logo': `${baseURL}/pantanal_ecotrips_logo.png`,
    'image': ogImageURL,
    'telephone': '+5567999022073',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Rua 26 de Agosto, 1374, sala 03',
      'addressLocality': 'Campo Grande',
      'addressRegion': 'MS',
      'postalCode': '79002-081',
      'addressCountry': 'BR'
    },
    'sameAs': [
      'https://www.facebook.com/suapagina',
      'https://www.instagram.com/seuusuario'
    ]
  };

  return {
    title: t('meta_title'),
    link: {
      canonical: { rel: 'canonical', href: `${baseURL}/${currentLang}` }
    },
    meta: {
      description: { name: 'description', content: t('meta_description') },
      keywords: { name: 'keywords', content: t('meta_keywords') },
      ogTitle: { property: 'og:title', content: t('meta_title') },
      ogDescription: { property: 'og:description', content: t('meta_description') },
      ogType: { property: 'og:type', content: 'website' },
      ogUrl: { property: 'og:url', content: `${baseURL}/${currentLang}` },
      ogImage: { property: 'og:image', content: ogImageURL },
      ogLocale: { property: 'og:locale', content: locale.value.replace('-', '_') },
      ogSiteName: { property: 'og:site_name', content: 'Pantanal Ecotrips' },
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: t('meta_title') },
      twitterDescription: { name: 'twitter:description', content: t('meta_description') },
      twitterImage: { name: 'twitter:image', content: ogImageURL },
    },
    script: {
      structuredData: {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    },
  };
});

const themes = ref([
  { name: 'pantanal_verde', label: 'Pantanal' },
  { name: 'bonito_azul', label: 'Bonito' },
]);

const languages = ref([
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]);

const currentLanguageLabel = computed(() => (route.params.lang as string || 'pt').toUpperCase());

const changeLanguage = (langCode: string) => {
  void router.push({ name: route.name || 'home', params: { ...route.params, lang: langCode } });
};

const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };
watch(() => route.params.lang, (newLang) => {
  locale.value = langMap[newLang as string] || 'pt-BR';
}, { immediate: true });

onMounted(() => {
  if (!route.params.lang) {
    void router.replace({ name: 'home', params: { lang: 'pt' } });
  }
});

const tours = ref<Tour[]>(allTours)

// Dados para a seção "Por que nós?"
const whyUsItems = ref([
  { icon: 'mdi-map-marker-path', title: 'why_us_item1_title', desc: 'why_us_item1_desc' },
  { icon: 'mdi-trophy', title: 'why_us_item2_title', desc: 'why_us_item2_desc' },
  { icon: 'mdi-account-group-outline', title: 'why_us_item3_title', desc: 'why_us_item3_desc' },
  { icon: 'mdi-lifebuoy', title: 'why_us_item4_title', desc: 'why_us_item4_desc' }
]);

// Dados para a seção de FAQ
const faqItems = ref([
  { icon: 'mdi-calendar-check', question: 'faq_q1', answer: 'faq_a1' },
  { icon: 'mdi-weather-partly-cloudy', question: 'faq_q2', answer: 'faq_a2' },
  { icon: 'mdi-airplane', question: 'faq_q3', answer: 'faq_a3' },
  { icon: 'mdi-credit-card-outline', question: 'faq_q4', answer: 'faq_a4' },
  { icon: 'mdi-account-multiple-plus', question: 'faq_q5', answer: 'faq_a5' }
]);

// Lógica para o formulário de Newsletter
const newsletterEmail = ref('');
const newsletterSubmitting = ref(false);
const onNewsletterSubmit = () => {
  newsletterSubmitting.value = true;
  // Simula uma chamada de API
  setTimeout(() => {
    newsletterSubmitting.value = false;
    $q.notify({
      icon: 'mdi-check-circle',
      color: 'positive',
      message: t('newsletter_success'),
      position: 'top'
    });
    newsletterEmail.value = ''; // Limpa o campo
  }, 1500);
};

const getTourTitle = (id: string) => t(`tour_${id}_title`, id);
const getTourDescription = (id: string) => t(`tour_${id}_desc`, id);
const getTourDuration = (id: string) => t(`tour_${id}_duration`, id);
const getTourType = (id: string) => t(`tour_${id}_type`, id);

const scrollToTours = () => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });

const viewTour = (tourId: string) => {
  void router.push({ name: 'tourDetails', params: { id: tourId, lang: route.params.lang || 'pt' } });
};

// Lógica de scroll (existente)
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
/* SEU CSS EXISTENTE VAI AQUI */
.home-page {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;
}
.section-title,
.card-title {
  color: var(--text-primary-color);
}
.hero-cta,
.q-btn[color="primary"] {
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
.card-description,
.price-from {
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
.page-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1000;
  display: flex;
  gap: 8px;
}
.control-button {
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  &.q-btn--dropdown {
    padding-right: 8px;
  }
}
.control-button-group {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.hero-section {
  position: relative;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}
@keyframes kenBurnsEffect {
  0% {
    transform: scale(1.05) translate(0, 0);
  }

  100% {
    transform: scale(1.15) translate(-2%, 2%);
  }
}
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/images/boca_onca_remake.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  animation: kenBurnsEffect 25s ease-in-out infinite alternate;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 20px;
}
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3.5rem;
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;
  max-width: 550px;
  margin: 0 auto 2.5rem auto;
  opacity: 0.9;
}
.hero-cta {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  border-radius: 8px;
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
.flex-grow {
  flex-grow: 1;
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
.home-footer {
  color: white;
}
.footer-text {
  color: rgba(255, 255, 255, 0.8);
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
  .section-title {
    font-size: 2rem;
  }
}
@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
}
.content-section {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;
}
.section-title.text-white {
  color: #fff;
}
.feature-card {
  background-color: transparent;
  height: 100%;
}
.feature-icon {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.feature-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  color: var(--text-primary-color);
}
.feature-card p {
  color: var(--text-secondary-color);
}
.about-us-bg {
  position: relative;
  background-image: url('~assets/images/pantanal_background.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.about-us-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.about-us-bg .container {
  position: relative;
  z-index: 2;
}
.credibility-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease;
}
.credibility-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

/* --- NOVOS ESTILOS PARA NEWSLETTER E FAQ --- */
.newsletter-bg {
  position: relative;
  background-color: var(--primary-color);
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/wildlife_pattern.svg');
  background-size: 300px, 300px;
  background-attachment: scroll;
}
.newsletter-icon {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}
.newsletter-form {
  max-width: 500px;
  margin: auto;
}
.newsletter-input .q-field__control {
  border-radius: 999px !important;
}
.newsletter-btn {
  border-radius: 999px;
  height: 100%;
}

.faq-list-container {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  border-bottom: 1px solid var(--border-color);
  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
.faq-question {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary-color);
}
.faq-answer {
  background-color: var(--page-bg-color);
  color: var(--text-secondary-color);
  line-height: 1.6;
}
</style>