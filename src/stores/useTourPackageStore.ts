import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type TourPackage } from 'src/model/TourPackage';

// --- Importe todos os seus pacotes aqui ---
import { aventuraBonitoEn, aventuraBonitoEs, aventuraBonitoPt } from 'src/data/packages/AventuraBonito/PackageData';
import { reveillonBonitoEn, reveillonBonitoEs, reveillonBonitoPt } from 'src/data/packages/ReveillonBonito/PackageData';


const packagesPt: Record<string, TourPackage> = {
  aventuraBonito: aventuraBonitoPt,
  reveillonBonito: reveillonBonitoPt, // <-- ADICIONADO
};

const packagesEn: Record<string, TourPackage> = {
  aventuraBonito: aventuraBonitoEn,
  reveillonBonito: reveillonBonitoEn, // <-- ADICIONADO
};

const packagesEs: Record<string, TourPackage> = {
  aventuraBonito: aventuraBonitoEs,
  reveillonBonito: reveillonBonitoEs, // <-- ADICIONADO
};


export const useTourPackageStore = defineStore('tourPackage', () => {
  const packages = ref<Record<string, TourPackage>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearPackages() {
    packages.value = {};
  }

  async function fetchPackages(lang = 'pt-BR') {
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

  const getPackageById = computed(() => (id: string): TourPackage | null => {
    return packages.value[id] || null;
  });

  const allPackages = computed((): TourPackage[] => Object.values(packages.value));

  return { 
    loading, 
    error, 
    packages,
    getPackageById, 
    allPackages, 
    fetchPackages, 
    clearPackages 
  };
});