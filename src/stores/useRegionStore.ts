import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Region } from 'src/model/Region';

// Interface ajustada para refletir que os dados são Arrays (Region[])
interface RegionLanguageModule {
  allRegionsPt?: Region[];
  allRegionsEn?: Region[];
  allRegionsEs?: Region[];
}

export const useRegionStore = defineStore('region', () => {
  // Alterado de {} para [] pois seus dados são listas
  const regions = ref<Region[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearRegion() {
    regions.value = [];
  }

  async function fetchRegion(lang = 'pt') {
    // Se já tem dados carregados, não busca de novo
    if (regions.value.length > 0) return;
    
    loading.value = true;
    error.value = null;

    try {
      // Simula delay de rede (pode remover em produção se não precisar)
      await new Promise((resolve) => setTimeout(resolve, 300)); 

      // Define o tipo do módulo importado
      let module: RegionLanguageModule | null = null;

      // O import path deve bater com o local real do seu arquivo
      module = await import('src/data/regions/all'); 

      if (!module) throw new Error('Módulo não carregado');

      switch (lang) {
        case 'en': {
          if (module.allRegionsEn) {
            regions.value = module.allRegionsEn;
          } else {
            throw new Error(`Lista 'allRegionsEn' não encontrada.`);
          }
          break;
        }
        case 'es': {
          if (module.allRegionsEs) {
            regions.value = module.allRegionsEs;
          } else {
            throw new Error(`Lista 'allRegionsEs' não encontrada.`);
          }
          break;
        }
        default: {
          // Fallback para PT
          if (module.allRegionsPt) {
            regions.value = module.allRegionsPt;
          } else {
            throw new Error(`Lista 'allRegionsPt' não encontrada.`);
          }
          break;
        }
      }
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      error.value = `Falha ao carregar as regiões (${lang}): ${errorMessage}`;
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  // --- GETTERS (FILTROS) ---

  // Filtra a região específica pelo SLUG
  const getRegionBySlug = computed(() => {
    return (slug: string): Region | undefined => {
      // Como regions.value agora é um array, usamos .find direto
      return regions.value.find((r) => r.slug === slug);
    };
  });

  // Retorna todas as regiões (já é a lista)
  const allRegions = computed((): Region[] => regions.value);

  return {
    loading,
    error,
    regions,
    getRegionBySlug, // <--- O filtro que você queria
    allRegions,
    fetchRegion,
    clearRegion,
  };
});