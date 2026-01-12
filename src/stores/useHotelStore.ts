import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Hotel } from 'src/model/Hotel';

interface HodelModule {
  hotelsPt?: Record<string, Hotel>;
  hotelsEn?: Record<string, Hotel>;
  hotelsEs?: Record<string, Hotel>;
}

export const useHotelStore = defineStore('hotel', () => {
  const hotels = ref<Record<string, Hotel>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearHotels() {
    hotels.value = {};
  }

  async function fetchHotels(lang = 'pt') {
    if (Object.keys(hotels.value).length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      let module: HodelModule;

      switch (lang) {
        case 'en':
          module = await import('src/data/hotels/all');
          if (module.hotelsEn) hotels.value = module.hotelsEn;
          break;
        case 'es':
          module = await import('src/data/hotels/all');
          if (module.hotelsEs) hotels.value = module.hotelsEs;
          break;
        default: // pt
          module = await import('src/data/hotels/all');
          if (module.hotelsPt) hotels.value = module.hotelsPt;
          break;
      }
    } catch (e: any) {
      console.error(e);
      error.value = `Erro ao carregar hoteis (${lang}). Verifique se o arquivo /src/data/hotels/${lang}.ts existe e exporta corretamente.`;
    } finally {
      loading.value = false;
    }
  }

  const getHotelBySlug = computed(() => (slug: string) => {
    return Object.values(hotels.value).find((t) => t.slug === slug) || null;
  });

  const allHotels = computed(() => Object.values(hotels.value));

  return { loading, error, hotels, getHotelBySlug, allHotels, fetchHotels, clearHotels };
});