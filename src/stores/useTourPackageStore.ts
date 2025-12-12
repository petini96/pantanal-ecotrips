import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type TourPackage } from 'src/model/TourPackage';

interface PackageLanguageModule {
  packagesPt?: Record<string, TourPackage>;
  packagesEn?: Record<string, TourPackage>;
  packagesEs?: Record<string, TourPackage>;
}

export const useTourPackageStore = defineStore('tourPackage', () => {
  const packages = ref<Record<string, TourPackage>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearPackages() {
    packages.value = {};
  }

  async function fetchPackages(lang = 'pt') {
    if (Object.keys(packages.value).length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 300)); // Simula delay

      let module: PackageLanguageModule | null = null;

      switch (lang) {
        case 'en': {
          
          module = await import('src/data/packages/all');
          if (module?.packagesEn) {
            packages.value = module.packagesEn;
          } else {
            throw new Error(`Objeto 'packagesEn' não encontrado no módulo '/src/data/packages/en.ts'. Verifique a exportação.`);
          }
          break;
        }
        case 'es': {
          
          module = await import('src/data/packages/all');
          if (module?.packagesEs) {
            packages.value = module.packagesEs;
          } else {
            throw new Error(`Objeto 'packagesEs' não encontrado no módulo '/src/data/packages/es.ts'. Verifique a exportação.`);
          }
          break;
        }
        default: {
          
          module = await import('src/data/packages/all');
          if (module?.packagesPt) {
            packages.value = module.packagesPt;
          } else {
            throw new Error(`Objeto 'packagesPt' não encontrado no módulo '/src/data/packages/pt.ts'. Verifique a exportação.`);
          }
          break;
        }
      }
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      error.value = `Falha ao carregar os pacotes (${lang}): ${errorMessage}`;
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  const getPackageBySlug = computed(() => {
    return (slug: string): TourPackage | null => {
      return Object.values(packages.value).find((pkg) => pkg?.slug === slug) || null;
    };
  });

  const allPackages = computed((): TourPackage[] => Object.values(packages.value));

  return {
    loading,
    error,
    packages,
    getPackageBySlug,
    allPackages,
    fetchPackages,
    clearPackages,
  };
});