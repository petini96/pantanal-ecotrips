<template>
  <q-page :class="['home-page', `theme-${currentTheme}`]">

    <!-- Banner da página inicial -->
    <SimpleBanner 
      :hero_title="t('hero_title')" 
      :hero_subtitle="t('hero_subtitle')" 
      :hero_cta="t('hero_cta')"
      :hero_background="SimpleBannerBackground" 
    />

    <!-- Listagem de todos os tours -->
    <TourPackageSection />

    <!-- Porque nos escolher -->
    <WhyUsSection />

    <!-- Captação de e-mail -->
    <NewsLetterSection />

    <!-- Sobre nós -->
    <AboutUsSection />

    <!-- Perguntas Frequentes -->
    <FacSection />

    <!-- Credibilidade -->
    <CredibilitySection />

  </q-page>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import SimpleBanner from 'src/components/banner/SimpleBanner.vue';
import SimpleBannerBackground from 'src/assets/images/boca_onca_remake.jpg'
import TourPackageSection from 'src/components/sections/home/TourPackageSection.vue';
import WhyUsSection from 'src/components/sections/home/WhyUsSection.vue';
import NewsLetterSection from 'src/components/sections/home/NewsLetterSection.vue';
import AboutUsSection from 'src/components/sections/home/AboutUsSection.vue';
import FacSection from 'src/components/sections/home/FacSection.vue';
import CredibilitySection from 'src/components/sections/home/CredibilitySection.vue';

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
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

const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };
watch(() => route.params.lang, (newLang) => {
  locale.value = langMap[newLang as string] || 'pt-BR';
}, { immediate: true });

onMounted(() => {
  if (!route.params.lang) {
    void router.replace({ name: 'home', params: { lang: 'pt' } });
  }
});


</script>

<style scoped lang="scss">
.home-page {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;
}

.selector-list {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary-color);
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

</style>