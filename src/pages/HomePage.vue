<template>
  <q-page :class="['home-page', `theme-${currentTheme}`]">
    <!-- BANNER PRINCIPAL -->
    <SimpleBanner
      :hero_title="t('hero_title')"
      :hero_subtitle="t('hero_subtitle')"
      :hero_cta="t('hero_cta')"
      :hero_background="SimpleBannerBackground"
    />

    <!-- SEÇÃO DE PACOTES DE PASSEIO -->
    <div v-intersection.once="() => (loadTourPackage = true)" class="section-wrapper">
      <TourPackageSection v-if="loadTourPackage" class="q-mt-xl" />
    </div>

    <div v-intersection.once="() => (loadCtaAllTours = true)" class="section-wrapper-cta">
      <CtaAllToursSection v-if="loadCtaAllTours" />
    </div>

    <!-- SEÇÃO GALERIA DE MÍDIA -->
    <div v-intersection.once="() => (loadMediaGallery = true)" class="section-wrapper">
      <MediaGallery v-if="loadMediaGallery" :items="galleryItems" />
    </div>

    <!-- SEÇÃO POR QUE NÓS -->
    <div v-intersection.once="() => (loadWhyUs = true)" class="section-wrapper">
      <WhyUsSection v-if="loadWhyUs" />
    </div>

    <!-- SEÇÃO GALERIA MOSAICO -->
    <div v-intersection.once="() => (loadMosaicGallery = true)" class="section-wrapper">
      <MosaicGallery v-if="loadMosaicGallery" :images="pantanalImages" />
    </div>

    <!-- SEÇÃO NEWSLETTER -->
    <div v-intersection.once="() => (loadNewsLetter = true)" class="section-wrapper">
      <NewsLetterSection v-if="loadNewsLetter" />
    </div>

    <!-- SEÇÃO SOBRE NÓS -->
    <div v-intersection.once="() => (loadAboutUs = true)" class="section-wrapper">
      <AboutUsSection v-if="loadAboutUs" />
    </div>

    <!-- SEÇÃO FAC -->
    <div v-intersection.once="() => (loadFac = true)" class="section-wrapper">
      <FacSection v-if="loadFac" />
    </div>

    <!-- SEÇÃO CREDIBILIDADE -->
    <div v-intersection.once="() => (loadCredibility = true)" class="section-wrapper">
      <CredibilitySection v-if="loadCredibility" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// `defineAsyncComponent` é importado para o lazy-loading
import { onMounted, ref, watch, defineAsyncComponent } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { langMap } from 'src/utils/langMap';

// Apenas o SimpleBanner (acima da dobra) é importado estaticamente.
import SimpleBanner from 'src/components/banner/SimpleBanner.vue';
import SimpleBannerBackground from 'src/assets/images/boca_onca_remake.webp';

// Refs booleanos para controlar o carregamento de cada seção.
const loadTourPackage = ref(false);
const loadMediaGallery = ref(false);
const loadWhyUs = ref(false);
const loadMosaicGallery = ref(false);
const loadNewsLetter = ref(false);
const loadAboutUs = ref(false);
const loadFac = ref(false);
const loadCredibility = ref(false);
// Ref para o lazy-load do novo componente CTA
const loadCtaAllTours = ref(false); 

// Todos os outros componentes são definidos como assíncronos (lazy-loaded).
const TourPackageSection = defineAsyncComponent(
  () => import('src/components/sections/home/TourPackageSection.vue')
);
const WhyUsSection = defineAsyncComponent(
  () => import('src/components/sections/home/WhyUsSection.vue')
);
const NewsLetterSection = defineAsyncComponent(
  () => import('src/components/sections/home/NewsLetterSection.vue')
);
const AboutUsSection = defineAsyncComponent(
  () => import('src/components/sections/home/AboutUsSection.vue')
);
const FacSection = defineAsyncComponent(
  () => import('src/components/sections/home/FacSection.vue')
);
const CredibilitySection = defineAsyncComponent(
  () => import('src/components/sections/home/CredibilitySection.vue')
);
const MosaicGallery = defineAsyncComponent(
  () => import('src/components/galerry/MosaicGallery.vue')
);
import type { MediaItem } from 'src/components/galerry/MediaGallery.vue';
const MediaGallery = defineAsyncComponent(
  () => import('src/components/galerry/MediaGallery.vue')
);

// Definição do novo componente CTA assíncrono
const CtaAllToursSection = defineAsyncComponent(
  () => import('src/components/sections/home/CtaAllToursSection.vue')
);

// --- Lógica de i18n, Rota e Store ---
const { t, locale } = useI18n(); 
const route = useRoute();
const router = useRouter();
const layoutConfigStore = useLayoutConfigStore();

const { theme: currentTheme } = storeToRefs(layoutConfigStore);

// --- preFetch (SSR) ---
defineOptions({
  preFetch: async ({ store, currentRoute }) => {
    const packageStore = useTourPackageStore(store);
    packageStore.clearPackages();
    const langParam = currentRoute.params.lang as string;
    const lang = langMap[langParam] || 'pt';
    await packageStore.fetchPackages(lang);
  },
});

// --- Dados das Galerias (Mock) ---
const bucketBaseUrl = 'https://minio-s3.roboticsmind.com.br/general-bucket/mimosa';
const videoData = [
  { fileName: 'Cópia de homem sinzinho.mp4', title: 'Homem Sinhozinho' },
  { fileName: 'Cópia de sinzinho mulher drone.mp4', title: 'Sinhozinho Mulher (Drone)' },
  { fileName: 'Cópia de trilha drone 3.mp4', title: 'Trilha de Drone' },
  { fileName: 'GH010573.MP4', title: 'Paisagem Aérea GH010573' },
  { fileName: 'Cópia de drone cachoeira do sol pessoas 2.mp4', title: 'Cachoeira do Sol com Pessoas' },
  { fileName: 'Cópia de drone flutuação pessoas.mp4', title: 'Flutuação com Pessoas (Drone)' },
];

const galleryItems: MediaItem[] = videoData.map((video) => ({
  type: 'video',
  src: `${bucketBaseUrl}/${encodeURIComponent(video.fileName)}`,
  title: video.title,
}));

const pantanalImages = ref([
  { src: 'https://pantanalecotrips.com.br/sites/default/files/obrasrealizadas/264498_106084456262802_1087015055_n.jpg', alt: 'Montanhas', caption: 'Vista panorâmica das montanhas' },
  { src: 'https://pantanalecotrips.com.br/sites/default/files/obrasrealizadas/boca_da_ona_17.jpg', alt: 'Cidade à noite', caption: 'Luzes da cidade ao anoitecer' },
  { src: 'https://pantanalecotrips.com.br/sites/default/files/obrasrealizadas/mirante_serra_da_bodoquena__viewpoint__rico.jpg', alt: 'Ponte estaiada', caption: 'Arquitetura moderna' },
  { src: 'https://pantanalecotrips.com.br/sites/default/files/obrasrealizadas/flutaao_rio_da_prata_07.jpg', alt: 'Gato', caption: 'Felino observador' },
]);


// --- SEO (Meta Tags) ---
useMeta(() => {
  const currentLang = (route.params.lang as string) || 'pt';
  const baseURL = 'https://www.pantanalecotrips.roboticsmind.com.br';
  const ogImageURL = `${baseURL}/pantanal_ecotrips_logo.png`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: t('meta_title'),
    description: t('meta_description'),
    url: baseURL,
    logo: `${baseURL}/pantanal_ecotrips_logo.png`,
    image: ogImageURL,
    telephone: '+5567999022073',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua 26 de Agosto, 1374, sala 03',
      addressLocality: 'Campo Grande',
      addressRegion: 'MS',
      postalCode: '79002-081',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.facebook.com/pantanalecotrips',
      'https://www.instagram.com/pantanalecotrips2'
    ],
  };

  return {
    title: t('meta_title'),
    link: {
      canonical: { rel: 'canonical', href: `${baseURL}/${currentLang}` },
      pt: { rel: 'alternate', hreflang: 'pt', href: `${baseURL}/pt` },
      en: { rel: 'alternate', hreflang: 'en', href: `${baseURL}/en` },
      es: { rel: 'alternate', hreflang: 'es', href: `${baseURL}/es` },
      xd: { rel: 'alternate', hreflang: 'x-default', href: `${baseURL}/pt` },
    },
    meta: {
      description: { name: 'description', content: t('meta_description') },
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
        innerHTML: JSON.stringify(structuredData),
      },
    },
  };
});

// --- Hooks de Rota ---
watch(
  () => route.params.lang,
  (newLang) => {
    locale.value = langMap[newLang as string] || 'pt';
  },
  { immediate: true }
);

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
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
}
.content-section {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;
}

/* Estilo para o wrapper que evita "pulos" de layout (CLS)
  ao carregar componentes lazy-loaded.
*/
.section-wrapper {
  min-height: 50vh; /* Altura padrão para seções */
}

/* Wrapper para a nova seção CTA de 100vh.
  Isso garante que o placeholder (antes do lazy-load)
  já tenha a altura correta, evitando CLS.
*/
.section-wrapper-cta {
  min-height: 100vh; /* Altura específica para o CTA de tela cheia */
}
</style>

