import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type MostWantedPackage } from "src/model/MostWantedPackage";
import { reveillon2024En, reveillon2024Es, reveillon2024Pt } from "src/data/most-wanted-package/reveillon2024/PackageData";
 
const mostWantedPackagePt: Record<string, Omit<MostWantedPackage, "id">> = {
   reveillon2024: reveillon2024Pt
};

const mostWantedPackageEn: Record<string, Omit<MostWantedPackage, "id">> = {
  reveillon2024: reveillon2024En
};

const mostWantedPackageEs: Record<string, Omit<MostWantedPackage, "id">> = {
  reveillon2024: reveillon2024Es
};

export const useMostWantedPackageStore = defineStore("mostWantedPackage", () => {
  const mostWantedPackage = ref<Record<string, Omit<MostWantedPackage, "id">>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearMostWantedPackage() {
    mostWantedPackage.value = {};
  }

  async function fetchMostWantedPackage(lang = "pt-BR") {
    if (Object.keys(mostWantedPackage.value).length > 0) return;

    loading.value = true;
    error.value = null;
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      switch (lang) {
        case "en-US":
          mostWantedPackage.value = mostWantedPackageEn;
          break;
        case "es":
          mostWantedPackage.value = mostWantedPackageEs;
          break;
        default:
          mostWantedPackage.value = mostWantedPackagePt;
      }
    } catch (e) {
      error.value = "Falha ao carregar os passeios.";
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  const getMostWantedPackageById = computed(
    () =>
      (id: string): MostWantedPackage | null =>
        mostWantedPackage.value[id] ? { id, ...mostWantedPackage.value[id] } : null,
  );
  const allMostWantedPackage = computed((): MostWantedPackage[] =>
    Object.entries(mostWantedPackage.value).map(([id, mostWantedPackageData]) => ({ id, ...mostWantedPackageData })),
  );

  return { loading, error, getMostWantedPackageById, allMostWantedPackage, fetchMostWantedPackage, clearMostWantedPackage };
});
