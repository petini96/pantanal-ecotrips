<template>
  <q-page padding>
    <div class="container q-py-lg">
      <!-- TÍTULO E DESCRIÇÃO -->
      <div class="q-mb-lg">
        <h1 class="text-h3 text-weight-medium q-mb-sm q-mt-xl">
          {{ t('all_tours_title') }}
        </h1>
        <p class="text-body1 text-grey-8">
          {{ t('all_tours_description') }}
        </p>
      </div>

      <!-- ESTADO DE LOADING -->
      <div
        v-if="store.loading"
        class="row justify-center q-my-xl"
        style="min-height: 300px"
      >
        <q-spinner
          color="primary"
          size="3em"
        />
      </div>

      <!-- ESTADO DE ERRO -->
      <div
        v-else-if="store.error"
        class="text-center q-my-xl"
        style="min-height: 300px"
      >
        <q-icon
          name="o_error_outline"
          color="negative"
          size="3em"
        />
        <p class="text-body1 q-mt-md">{{ t('error_loading_tours') }}</p>
        <p class="text-caption text-grey-7">{{ store.error || store.error }}</p>
      </div>

      <!-- CONTEÚDO CARREGADO -->
      <div v-else-if="paginatedTours.length > 0">
        <!-- Grid de Passeios -->
        <div class="row q-col-gutter-lg">
          <div
            v-for="tour in paginatedTours"
            :key="tour.id"
            class="col-12 col-sm-6 col-md-4"
          >
            <!-- O componente TourCard atualizado -->
            <TourCard :tour="tour" />
          </div>
        </div>

        <!-- Paginação -->
        <div class="q-pa-lg flex flex-center q-mt-md">
          <q-pagination
            v-model="pagination.page"
            :max="totalPages"
            :max-pages="7"
            direction-links
            boundary-numbers
            icon-first="o_first_page"
            icon-last="o_last_page"
            icon-prev="o_chevron_left"
            icon-next="o_chevron_right"
            color="primary"
            active-design="unelevated"
            active-color="primary"
            gutter="sm"
          />
        </div>
      </div>

      <!-- ESTADO VAZIO (Sem passeios) -->
      <div
        v-else
        class="text-center q-my-xl"
        style="min-height: 300px"
      >
        <q-icon
          name="o_explore_off"
          color="grey-6"
          size="3em"
        />
        <p class="text-body1 q-mt-md text-grey-7">Nenhum passeio encontrado.</p>
      </div>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { useTourStore } from 'src/stores/useTourStore';
import { langMap } from 'src/utils/langMap';
import TourCard from 'src/components/tour/TourCard.vue';

const store = useTourStore();
const route = useRoute();
const { t, locale } = useI18n();

// --- LÓGICA DE PAGINAÇÃO ---
const pagination = ref({
  page: 1,
  rowsPerPage: 9, // 9 itens por página (grade 3x3)
});

const allTours = computed(() => store.allTours);

const paginatedTours = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.rowsPerPage;
  const end = start + pagination.value.rowsPerPage;
  return allTours.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(allTours.value.length / pagination.value.rowsPerPage);
});

// --- BUSCA DE DADOS (SSR e i18n) ---

// preFetch (Server-Side Rendering)
defineOptions({
  preFetch: async ({ store: piniaStore, currentRoute }) => {
    const tourStore = useTourStore(piniaStore);
    tourStore.clearTours(); // Limpa dados anteriores
    const langParam = currentRoute.params.lang as string;
    const lang = langMap[langParam] || 'pt';
    await tourStore.fetchTours(lang);
  },
});

// Observa mudanças no parâmetro 'lang' da rota
watch(
  () => route.params.lang,
  (newLangParam) => {
    const newLang = langMap[newLangParam as string] || 'pt';
    locale.value = newLang; // Atualiza o i18n
    pagination.value.page = 1; // Reseta para a página 1 ao mudar idioma
    void store.fetchTours(newLang); // Busca os passeios para o novo idioma
  },
  { immediate: true } // Executa imediatamente ao carregar
);

useMeta(() => {
  const pageTitle = t('all_tours_title');
  const pageDescription = t('all_tours_description');
  
  const currentLang = (route.params.lang as string) || 'pt';
  const baseURL = 'https://www.pantanalecotrips.roboticsmind.com.br';
  const ogImageURL = `${baseURL}/pantanal_ecotrips_logo`;
  const pageUrl = `${baseURL}/${currentLang}/passeios`;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    numberOfItems: allTours.value.length,
    itemListElement: allTours.value.map((tour, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: tour.name,
        description: tour.description,
        image: tour.mainImage,
        url: `${baseURL}/${currentLang}/passeio/${tour.slug}`,
        sku: tour.id,
      },
    })),
  };

  return {
    title: `${pageTitle} | Pantanal Ecotrips`,
    link: {
      canonical: { rel: 'canonical', href: pageUrl },
      pt: { rel: 'alternate', hreflang: 'pt', href: `${baseURL}/pt/passeios` },
      en: { rel: 'alternate', hreflang: 'en', href: `${baseURL}/en/passeios` },
      es: { rel: 'alternate', hreflang: 'es', href: `${baseURL}/es/passeios` },
      xd: { rel: 'alternate', hreflang: 'x-default', href: `${baseURL}/pt/passeios` },
    },
    meta: {
      description: { name: 'description', content: pageDescription },
      ogTitle: { property: 'og:title', content: pageTitle },
      ogDescription: { property: 'og:description', content: pageDescription },
      ogType: { property: 'og:type', content: 'website' },
      ogUrl: { property: 'og:url', content: pageUrl },
      ogImage: { property: 'og:image', content: ogImageURL },
      ogLocale: { property: 'og:locale', content: locale.value.replace('-', '_') },
      ogSiteName: { property: 'og:site_name', content: 'Pantanal Ecotrips' },
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: pageTitle },
      twitterDescription: { name: 'twitter:description', content: pageDescription },
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
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
