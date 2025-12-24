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
            throw new Error(`Objeto 'packagesEn' não encontrado.`);
          }
          break;
        }
        case 'es': {
          module = await import('src/data/packages/all');
          if (module?.packagesEs) {
            packages.value = module.packagesEs;
          } else {
            throw new Error(`Objeto 'packagesEs' não encontrado.`);
          }
          break;
        }
        default: {
          module = await import('src/data/packages/all');
          if (module?.packagesPt) {
            packages.value = module.packagesPt;
          } else {
            throw new Error(`Objeto 'packagesPt' não encontrado.`);
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

  // --- GETTERS ---

  const getPackageBySlug = computed(() => {
    return (slug: string): TourPackage | null => {
      return Object.values(packages.value).find((pkg) => pkg?.slug === slug) || null;
    };
  });

  const allPackages = computed((): TourPackage[] => Object.values(packages.value));

  // NOVO: Getter para filtrar por slug da região
  // NOVO: Getter para filtrar por slug da região
  const getPackagesByRegionSlug = computed(() => {
    return (regionSlug: string): TourPackage[] => {
      const list = Object.values(packages.value);

      // Se a lista estiver vazia, não faz nada
      if (list.length === 0) return [];

      console.groupCollapsed(`🔎 Debug Filtro de Região: Buscando por "${regionSlug}"`);
      console.log(list)
      const filtered = list.filter((pkg) => {
        // Acessa o slug da região dentro do pacote
        // Normaliza para lowercase e trim para evitar erros bobos de espaço/maiúscula
        const pkgRegionSlug = pkg.region?.slug?.trim().toLowerCase();
        console.log(pkgRegionSlug)
        const targetSlug = regionSlug?.trim().toLowerCase();

        const isMatch = pkgRegionSlug === targetSlug;

        // LOG DO DETETIVE: Mostra linha a linha a comparação
        console.log(
          `📦 Pacote: "${pkg.title?.substring(0, 20)}..."`,
          `| Região no Dado: "${pkgRegionSlug}"`, 
          `| URL: "${targetSlug}"`, 
          `| Match? ${isMatch ? '✅' : '❌'}`
        );

        return isMatch;
      });

      console.log(`📊 Resultado: ${filtered.length} pacotes encontrados.`);
      console.groupEnd();

      return filtered;
    };
  });

  return {
    loading,
    error,
    packages,
    getPackageBySlug,
    allPackages,
    getPackagesByRegionSlug, // Não esqueça de exportar aqui
    fetchPackages,
    clearPackages,
  };
});