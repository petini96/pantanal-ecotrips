<template>
  <q-page v-if="loading && !pkg" class="flex flex-center">
    <q-spinner-dots color="primary" size="4em" />
  </q-page>

  <q-page v-else-if="pkg" :class="['tour-details-page', `theme-${currentTheme}`]">
    
    <SimpleBannerDetails 
      :hero_title="pkg.title"
      :hero_subtitle="`${pkg.durationInDays} ${t('days')} / ${pkg.durationInNights} ${t('nights')}`"
      :hero_image="pkg.image" 
    />

    <div class="page-content q-pa-md q-gutter-y-xl">

      <q-card class="intro-card" flat bordered>
        <q-card-section>
          <div class="core-info-pill-details">
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
            
            <q-separator vertical spaced="sm" />
            
            <button class="info-item cursor-pointer clean-btn" @click="handleShare" aria-label="Compartilhar pacote">
              <q-icon name="mdi-share-variant" class="text-primary q-mr-xs" style="font-size: 1.5rem;" />
              <span>{{ t('share') || 'Compartilhar' }}</span>
            </button>
          </div>
        </q-card-section>
      </q-card>

      <section aria-labelledby="about-title">
        <AboutTourSection 
          id="about-title"
          :tour_details_about_title="t('tour_details_about_title')" 
          :tour_desc="pkg.description" 
        />
      </section>

      <transition name="fade-gallery" mode="out-in">
        <section class="q-my-lg" v-if="pkg.galleryImages" aria-label="Galeria de fotos">
          <HorizontalPhotoGallery :images="pkg.galleryImages ? pkg.galleryImages : []" />
        </section> 
      </transition>

      <section v-if="pkg.itinerary && pkg.itinerary.length > 0" aria-labelledby="itinerary-title">
        <TourItinerarySection
          id="itinerary-title"
          :tour_details_itinerary_title="t('tour_details_itinerary_title')" 
          :itinerary="pkg.itinerary" 
        />
      </section>

      <q-card class="info-card" flat bordered>
        <q-card-section class="row q-col-gutter-md">
          <div class="col-12 col-sm-6" v-if="pkg.packageCategories && pkg.packageCategories.length">
            <h3 class="text-h6 icon-list-title q-mt-none">
              <q-icon name="mdi-shape-outline" />{{ t("categories") }}
            </h3>
            <div class="icon-list">
              <div v-for="category in pkg.packageCategories" :key="category.id" class="icon-list-item">
                <q-icon :name="category.icon" />
                <span>{{ category.name }}</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6" v-if="pkg.packageRecommendedFor && pkg.packageRecommendedFor.length">
            <h3 class="text-h6 icon-list-title q-mt-none">
              <q-icon name="mdi-heart-outline" />{{ t("recommended_for") }}
            </h3>
            <div class="icon-list">
              <div v-for="audience in pkg.packageRecommendedFor" :key="audience.id" class="icon-list-item">
                <q-icon :name="audience.icon" />
                <span>{{ audience.name }}</span>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="info-grid row q-col-gutter-md">
        <div class="col-12 col-md-6" v-if="pkg.included && pkg.included.length > 0">
          <q-card class="info-card included-card" flat bordered>
            <q-card-section>
              <h2 class="text-h6 q-mt-none flex items-center">
                <q-icon name="mdi-check-circle-outline" class="q-mr-sm" />
                <span>{{ t('tour_details_included_title') }}</span>
              </h2>
              <q-list separator class="q-mt-sm">
                <q-item v-for="(item, index) in pkg.included" :key="`inc-${index}`">
                  <q-item-section>
                    <span><strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6" v-if="pkg.notIncluded && pkg.notIncluded.length > 0">
          <q-card class="info-card not-included-card" flat bordered>
            <q-card-section>
              <h2 class="text-h6 q-mt-none flex items-center">
                <q-icon name="mdi-close-circle-outline" class="q-mr-sm" />
                <span>{{ t('tour_details_not_included_title') }}</span>
              </h2>
              <q-list separator class="q-mt-sm">
                <q-item v-for="(item, index) in pkg.notIncluded" :key="`not-inc-${index}`">
                  <q-item-section>
                    <span><strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-card class="packing-card" flat bordered v-if="pkg.shouldIBring && pkg.shouldIBring.length > 0">
        <q-card-section>
          <h2 class="text-h6 q-mt-none flex items-center">
            <q-icon name="mdi-bag-suitcase-outline" class="q-mr-sm" />
            <span>{{ t('tour_details_packing_title') }}</span>
          </h2>
          <q-list separator class="q-mt-sm">
            <q-item v-for="(item, index) in pkg.shouldIBring" :key="`bring-${index}`">
              <q-item-section>
                <span><strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}</span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <section v-if="pkg.hotels && pkg.hotels.length > 0" aria-labelledby="hotels-title">
        <h2 id="hotels-title" class="text-h6 q-mb-sm flex items-center text-primary">
          <q-icon name="mdi-bed-king-outline" class="q-mr-sm" />
          {{ t('hotels') || 'Hotéis e Acomodações' }}
        </h2>
        
        <div class="column q-gutter-y-md">
          <div v-for="(hotel, index) in pkg.hotels" :key="index">
            <q-card class="hotel-card cursor-pointer" flat bordered @click="goToHotelDetails(hotel.slug)">
              <q-card-section horizontal>
                <q-img 
                  :src="hotel.heroImage" 
                  class="col-4 col-sm-3"
                  style="object-fit: cover;"
                  :alt="`Acomodação no ${hotel.name} - Pantanal`"
                />

                <q-card-section class="q-pt-sm col">
                  <h3 class="text-subtitle1 text-weight-bold q-mb-xs q-mt-none">{{ hotel.name }}</h3>
                  
                  <div class="text-caption text-grey-7 q-mb-sm flex items-center" v-if="hotel.location">
                    <q-icon name="mdi-map-marker" size="xs" class="q-mr-xs" />
                    {{ hotel.location.address }}
                  </div>

                  <div class="text-body2 text-grey-8 ellipsis-3-lines">
                    {{ hotel.shortDescription }}
                  </div>
                  
                  <div class="text-right q-mt-sm">
                     <span class="text-primary text-caption text-weight-medium">
                       {{ t('view_details') || 'Ver detalhes' }} <q-icon name="mdi-arrow-right" />
                     </span>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>

      <q-card class="info-card observation-card" flat bordered v-if="pkg.observation">
        <q-card-section>
          <h2 class="text-h6 q-mt-none flex items-center">
            <q-icon name="mdi-information-outline" class="q-mr-sm" />
            <span>{{ t('important_observations') }}</span>
          </h2>
          <p class="q-mt-sm">{{ pkg.observation }}</p>
        </q-card-section>
      </q-card>

      <div class="text-center q-mt-xl">
        <q-btn color="secondary" size="lg" :label="t('tour_details_cta_button')" icon="mdi-whatsapp"
          :href="`https://wa.me/556791452985?text=${encodedWhatsAppMessage}`" target="_blank" 
          @click="trackPackageBookingClick"
        />
      </div>
    </div>
  </q-page>

  <q-page v-else class="flex flex-center">
    <div class="text-center">
      <q-icon name="mdi-alert-circle-outline" size="4rem" color="warning" />
      <p class="text-h6 q-mt-md">{{ t('tour_not_found') }}</p>
      <q-btn :to="`/${locale}`" :label="t('go_home')" color="primary" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, watch } from 'vue';
import { useMeta, useQuasar, copyToClipboard } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { useAnalytics } from 'src/components/composables/useAnalytics';

// Componentes
import SimpleBannerDetails from 'src/components/banner/SimpleBannerDetails.vue';
import AboutTourSection from 'src/components/tour/AboutTourSection.vue';
import TourItinerarySection from 'src/components/tour/TourItinerarySection.vue';

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();
const { trackEvent } = useAnalytics();
const $q = useQuasar();

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const packageStore = useTourPackageStore();
const { getPackageBySlug, loading } = storeToRefs(packageStore);

const packageSlug = computed(() => route.params.slug as string);
const pkg = computed(() => getPackageBySlug.value(packageSlug.value));
const langMap: Record<string, string> = { pt: 'pt', en: 'en', es: 'es' };

// --- Lógica de Dados ---
const fetchData = async () => {
  const lang = langMap[route.params.lang as string] || 'pt';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
};

onMounted(async () => {
  await fetchData();
});

watch(() => route.params.lang, async (newLang) => {
  packageStore.clearPackages();
  const lang = langMap[newLang as string] || 'pt';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
});

// --- Analytics ---
watch(pkg, (newPkg) => {
  if (newPkg) {
    trackEvent('view_item', {
      currency: 'BRL',
      value: 0, 
      items: [{
        item_id: newPkg.slug,
        item_name: newPkg.title,
        item_category: 'Pacote',
        quantity: 1
      }]
    });
  }
}, { immediate: true });

const trackPackageBookingClick = () => {
  if (!pkg.value) return;

  trackEvent('click_whatsapp', {
    local_clique: 'pagina_detalhe_pacote',
    package_name: pkg.value.title,
    package_duration: `${pkg.value.durationInDays}D/${pkg.value.durationInNights}N`,
    min_people: pkg.value.minPeople || 1
  });
};

// --- Ações ---
const goToHotelDetails = (hotelSlug: string) => {
  void router.push({
    name: 'hotelsDetails',
    params: { 
      lang: locale.value, 
      slug: hotelSlug 
    }
  });
};

const handleShare = async () => {
  const url = window.location.href;
  const title = pkg.value?.title || 'Pantanal Ecotrips';
  
  if (navigator.share) {
    try {
      await navigator.share({ title: title, url: url });
    } catch (err) {
      console.log('Share cancelled', err);
    }
  } else {
    copyToClipboard(url)
      .then(() => {
        $q.notify({
          message: 'Link copiado!',
          color: 'positive',
          icon: 'mdi-check',
          timeout: 2000
        });
      })
      .catch(() => {
        $q.notify({
          message: 'Erro ao copiar link',
          color: 'negative'
        });
      });
  }
};

const encodedWhatsAppMessage = computed(() => {
  const title = pkg.value?.title ?? 'este pacote';
  return encodeURIComponent(t('whatsapp_message', { tour: title }));
});

// --- SEO AVANÇADO & DADOS ESTRUTURADOS (JSON-LD) ---
// Função auxiliar para gerar Schema.org
const generateStructuredData = (packageData: any) => {
  if (!packageData) return {};
  const baseUrl = 'https://www.pantanalecotrips.com.br';
  
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip", 
    "name": packageData.title,
    "description": packageData.subtitle,
    "image": packageData.image,
    "url": `${baseUrl}/${locale.value}/tours/${packageData.slug}`,
    "touristType": [
      "Ecotourism",
      "WildlifeEnthusiast"
    ],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": packageData.itinerary?.length || 0,
      "itemListElement": packageData.itinerary?.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": item.title,
          "description": Array.isArray(item.descriptionItems) ? item.descriptionItems.join(' ') : item.descriptionItems
        }
      }))
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Pantanal Ecotrips",
      "url": baseUrl,
      "image": `${baseUrl}/icons/logo.png` 
    },
    "offeredBy": {
      "@type": "Organization",
      "name": "Pantanal Ecotrips"
    },
    "location": {
      "@type": "Place",
      "name": "Pantanal Jungle Lodge", // Reforço de palavra-chave de local
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Mato Grosso do Sul",
        "addressCountry": "BR"
      }
    }
  };
};

useMeta(() => {
  if (!pkg.value) {
    return { title: t('tour_not_found') };
  }
  const baseUrl = 'https://www.pantanalecotrips.com.br';
  const currentLang = (route.params.lang as string || 'pt');

  // Lógica de Título Otimizado
  // Se o título do pacote não tiver "Pantanal", adicionamos.
  const pageTitle = pkg.value.title.toLowerCase().includes('pantanal') 
    ? pkg.value.title 
    : `${pkg.value.title} - Pantanal Jungle Lodge`;

  // Descrição para SEO (Meta Description)
  const metaDesc = pkg.value.subtitle 
    ? pkg.value.subtitle 
    : `Pacote de viagem ${pkg.value.title} no Pantanal Sul. Incluso hospedagem, passeios e pensão completa.`;

  return {
    title: `${pageTitle} | Pantanal Ecotrips`,
    meta: {
      description: { name: 'description', content: metaDesc },
      keywords: { name: 'keywords', content: `pantanal jungle lodge, jungle lodge, pacote pantanal, ecoturismo, passo do lontra, ${pkg.value.title}, turismo ms` },
      
      // Open Graph (WhatsApp/Facebook)
      ogTitle: { property: 'og:title', content: pageTitle },
      ogDescription: { property: 'og:description', content: metaDesc },
      ogType: { property: 'og:type', content: 'website' },
      ogUrl: { property: 'og:url', content: `${baseUrl}/${currentLang}/tours/${pkg.value.slug}` },
      ogImage: { property: 'og:image', content: pkg.value.image },
      ogSiteName: { property: 'og:site_name', content: 'Pantanal Ecotrips' },
      
      // Twitter
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: pageTitle },
      twitterDesc: { name: 'twitter:description', content: metaDesc },
      twitterImage: { name: 'twitter:image', content: pkg.value.image },
    },
    link: {
      canonical: { rel: 'canonical', href: `${baseUrl}/${currentLang}/tours/${pkg.value.slug}` },
    },
    // Injeção do Schema JSON-LD
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(generateStructuredData(pkg.value))
      }
    }
  };
});

const HorizontalPhotoGallery = defineAsyncComponent(
  () => import('src/components/galerry/HorizontalPhotoGallery.vue')
);
</script>

<style scoped lang="scss">
.tour-details-page {
  background-color: #f8f9fa;
}

.page-content {
  max-width: 960px;
  margin: -100px auto 60px auto;
  position: relative;
  z-index: 3;

  @media (max-width: $breakpoint-sm-max) {
    margin-top: -60px;
  }
}

.clean-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
}

.intro-card,
.info-card,
.packing-card {
  border-radius: 16px;
  border: 1px solid #eef2f1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.core-info-pill-details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #34495e;

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;

    .q-icon {
      color: var(--q-primary);
      font-size: 1.5rem;
    }
  }
  
  .cursor-pointer {
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }
  }
}

/* Títulos das seções (H2 simulando style h6) */
.info-card h2,
.info-card h3,
.packing-card h2 {
  font-weight: 700;
  font-size: 1.25rem; /* Equivalente ao text-h6 do Quasar */
  color: #2c3e50;
  line-height: 2rem;
  
  .q-icon {
    color: var(--q-primary);
    font-size: 1.5rem;
  }
}

.included-card h2 .q-icon {
  color: #2ecc71;
}

.not-included-card h2 .q-icon {
  color: #e74c3c;
}

.observation-card h2 .q-icon {
  color: #3498db;
}

.icon-list-title {
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  .q-icon {
    margin-right: 8px;
    font-size: 1.5rem;
  }
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.icon-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #34495e;
  background-color: #f5f8f7;
  padding: 8px 16px;
  border-radius: 20px;

  .q-icon {
    color: var(--q-primary);
    font-size: 1.3rem;
  }
}

.q-list--separator>.q-item {
  border-top: 1px solid #f0f0f0;
}

/* Hotel Card Style */
.hotel-card {
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .q-img {
    border-radius: 12px 12px 0 0;
  }
}
</style>