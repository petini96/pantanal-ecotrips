import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Tour } from 'src/model/Tour';

interface TourModule {
  toursPt?: Record<string, Tour>;
  toursEn?: Record<string, Tour>;
  toursEs?: Record<string, Tour>;
}

export const useTourStore = defineStore('tour', () => {
  const tours = ref<Record<string, Tour>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearTours() {
    tours.value = {};
  }

  async function fetchTours(lang = 'pt') {
    // Se já tiver dados carregados, não recarrega (opcional)
    if (Object.keys(tours.value).length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      let module: TourModule;

      switch (lang) {
        case 'en':
          module = await import('src/data/tours/all');
          if (module.toursEn) tours.value = module.toursEn;
          break;
        case 'es':
          module = await import('src/data/tours/all');
          if (module.toursEs) tours.value = module.toursEs;
          break;
        default: // pt
          module = await import('src/data/tours/all');
          if (module.toursPt) tours.value = module.toursPt;
          break;
      }
    } catch (e: any) {
      console.error(e);
      error.value = `Erro ao carregar passeios (${lang}). Verifique se o arquivo /src/data/tours/${lang}.ts existe e exporta corretamente.`;
    } finally {
      loading.value = false;
    }
  }

  const getTourBySlug = computed(() => (slug: string) => {
    return Object.values(tours.value).find((t) => t.slug === slug) || null;
  });

  const allTours = computed(() => Object.values(tours.value));

  return { loading, error, tours, getTourBySlug, allTours, fetchTours, clearTours };
});