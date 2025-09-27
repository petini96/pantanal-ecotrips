import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type TourPackage } from 'src/model/TourPackage';

// --- Importe todos os seus pacotes aqui ---
import { reveillonBonitoEn, reveillonBonitoEs, reveillonBonitoPt } from 'src/data/packages/ReveillonBonito/PackageData';
import { noiteFelizEn, noiteFelizEs, noiteFelizPt } from 'src/data/packages/NoiteFeliz/PackageData';
import { familiaFelizEn, familiaFelizEs, familiaFelizPt } from 'src/data/packages/FamiliaFeliz/PackageData';
import { bonitoAmizadeEn, bonitoAmizadeEs, bonitoAmizadePt } from 'src/data/packages/BonitoAmizade/PackageData';

// --- Monte os dicionários de pacotes por idioma ---
const packagesPt: Record<string, TourPackage> = {
  reveillonBonito: reveillonBonitoPt,
  noiteFeliz: noiteFelizPt,
  familiaFeliz: familiaFelizPt,
  bonitoAmizade: bonitoAmizadePt,
};

const packagesEn: Record<string, TourPackage> = {
  reveillonBonito: reveillonBonitoEn,
  noiteFeliz: noiteFelizEn,
  familiaFeliz: familiaFelizEn,
  bonitoAmizade: bonitoAmizadeEn,
};

const packagesEs: Record<string, TourPackage> = {
  reveillonBonito: reveillonBonitoEs,
  noiteFeliz: noiteFelizEs,
  familiaFeliz: familiaFelizEs,
  bonitoAmizade: bonitoAmizadeEs,
};

export const useTourPackageStore = defineStore('tourPackage', () => {
  const packages = ref<Record<string, TourPackage>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearPackages() {
    packages.value = {};
  }

  async function fetchPackages(lang = 'pt-BR') {
    // Evita recarregar se os dados já estiverem no store
    if (Object.keys(packages.value).length > 0) return;

    loading.value = true;
    error.value = null;
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      switch (lang) {
        case 'en-US':
          packages.value = packagesEn;
          break;
        case 'es':
          packages.value = packagesEs;
          break;
        default:
          packages.value = packagesPt;
      }
    } catch (e) {
      error.value = 'Falha ao carregar os pacotes.';
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  // =======================================================
  // == CORREÇÃO APLICADA AQUI
  // =======================================================

  // NOVO: Getter para buscar pelo slug.
  const getPackageBySlug = computed(() => {
    return (slug: string): TourPackage | null => {
      // Procura no array de pacotes pelo slug correspondente.
      return Object.values(packages.value).find(pkg => pkg.slug === slug) || null;
    };
  });

  const allPackages = computed((): TourPackage[] => Object.values(packages.value));

  return {
    loading,
    error,
    packages,
    getPackageBySlug, // <-- Exportando o getter correto
    allPackages,
    fetchPackages,
    clearPackages
  };
});