import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type Tour } from "src/model/Tour";

// ===================================================================
// PASSO 1: Importar todos os arquivos de dados dos passeios
// ===================================================================
import { birdwatchingPt, birdwatchingEn, birdwatchingEs } from "src/data/tours/Birdwatching";
import { bocaDaOncaPt, bocaDaOncaEn, bocaDaOncaEs } from "src/data/tours/BocaDaOnca";
import { boteRioFormosoPt, boteRioFormosoEn, boteRioFormosoEs } from "src/data/tours/BoteRioFormoso";
import { buracoDasArarasPt, buracoDasArarasEn, buracoDasArarasEs } from "src/data/tours/BuracoDasAraras";
import { cabanasArvorismoPt, cabanasArvorismoEn, cabanasArvorismoEs } from "src/data/tours/CabanasArvorismo";
import { canoeingPt, canoeingEn, canoeingEs } from "src/data/tours/Canoeing";
import { chalanaPiranhaFishingPt, chalanaPiranhaFishingEn, chalanaPiranhaFishingEs } from "src/data/tours/ChalanaPiranhaFishing";
import { ecologicalSafariPt, ecologicalSafariEn, ecologicalSafariEs } from "src/data/tours/EcologicalSafari";
import { ecologicalWalkPt, ecologicalWalkEn, ecologicalWalkEs } from "src/data/tours/EcologicalWalk";
import { estanciaMimosaPt, estanciaMimosaEn, estanciaMimosaEs } from "src/data/tours/EstanciaMimosa";
import { fluvialSafariPt, fluvialSafariEn, fluvialSafariEs } from "src/data/tours/FluvialSafari";
import { grutaLagoAzulPt, grutaLagoAzulEn, grutaLagoAzulEs } from "src/data/tours/GrutaLagoAzul";
import { horsebackRidingPt, horsebackRidingEn, horsebackRidingEs } from "src/data/tours/HorsebackRiding";
import { jaguarSafariPt, jaguarSafariEn, jaguarSafariEs } from "src/data/tours/JaguarSafari";
import { jeepSafariPt, jeepSafariEn, jeepSafariEs } from "src/data/tours/JeepSafari";
import { jungleCampingPt, jungleCampingEn, jungleCampingEs } from "src/data/tours/JungleCamping";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "src/data/tours/MotorBoatTrip";
import { nocturnalSpotlightingPt, nocturnalSpotlightingEn, nocturnalSpotlightingEs } from "src/data/tours/NocturnalSpotlighting";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "src/data/tours/PiranhaFishing";
import { rioDaPrataPt, rioDaPrataEn, rioDaPrataEs } from "src/data/tours/RioDaPrata";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "src/data/tours/RiverFloating";

// ===================================================================
// PASSO 2: Montar os dicionários de passeios por idioma
// ===================================================================
const toursPt: Record<string, Tour> = {
  [birdwatchingPt.id]: birdwatchingPt,
  [bocaDaOncaPt.id]: bocaDaOncaPt,
  [boteRioFormosoPt.id]: boteRioFormosoPt,
  [buracoDasArarasPt.id]: buracoDasArarasPt,
  [cabanasArvorismoPt.id]: cabanasArvorismoPt,
  [canoeingPt.id]: canoeingPt,
  [chalanaPiranhaFishingPt.id]: chalanaPiranhaFishingPt,
  [ecologicalSafariPt.id]: ecologicalSafariPt,
  [ecologicalWalkPt.id]: ecologicalWalkPt,
  [estanciaMimosaPt.id]: estanciaMimosaPt,
  [fluvialSafariPt.id]: fluvialSafariPt,
  [grutaLagoAzulPt.id]: grutaLagoAzulPt,
  [horsebackRidingPt.id]: horsebackRidingPt,
  [jaguarSafariPt.id]: jaguarSafariPt,
  [jeepSafariPt.id]: jeepSafariPt,
  [jungleCampingPt.id]: jungleCampingPt,
  [motorBoatTripPt.id]: motorBoatTripPt,
  [nocturnalSpotlightingPt.id]: nocturnalSpotlightingPt,
  [piranhaFishingPt.id]: piranhaFishingPt,
  [rioDaPrataPt.id]: rioDaPrataPt,
  [riverFloatingPt.id]: riverFloatingPt,
};

const toursEn: Record<string, Tour> = {
  [birdwatchingEn.id]: birdwatchingEn,
  [bocaDaOncaEn.id]: bocaDaOncaEn,
  [boteRioFormosoEn.id]: boteRioFormosoEn,
  [buracoDasArarasEn.id]: buracoDasArarasEn,
  [cabanasArvorismoEn.id]: cabanasArvorismoEn,
  [canoeingEn.id]: canoeingEn,
  [chalanaPiranhaFishingEn.id]: chalanaPiranhaFishingEn,
  [ecologicalSafariEn.id]: ecologicalSafariEn,
  [ecologicalWalkEn.id]: ecologicalWalkEn,
  [estanciaMimosaEn.id]: estanciaMimosaEn,
  [fluvialSafariEn.id]: fluvialSafariEn,
  [grutaLagoAzulEn.id]: grutaLagoAzulEn,
  [horsebackRidingEn.id]: horsebackRidingEn,
  [jaguarSafariEn.id]: jaguarSafariEn,
  [jeepSafariEn.id]: jeepSafariEn,
  [jungleCampingEn.id]: jungleCampingEn,
  [motorBoatTripEn.id]: motorBoatTripEn,
  [nocturnalSpotlightingEn.id]: nocturnalSpotlightingEn,
  [piranhaFishingEn.id]: piranhaFishingEn,
  [rioDaPrataEn.id]: rioDaPrataEn,
  [riverFloatingEn.id]: riverFloatingEn,
};

const toursEs: Record<string, Tour> = {
  [birdwatchingEs.id]: birdwatchingEs,
  [bocaDaOncaEs.id]: bocaDaOncaEs,
  [boteRioFormosoEs.id]: boteRioFormosoEs,
  [buracoDasArarasEs.id]: buracoDasArarasEs,
  [cabanasArvorismoEs.id]: cabanasArvorismoEs,
  [canoeingEs.id]: canoeingEs,
  [chalanaPiranhaFishingEs.id]: chalanaPiranhaFishingEs,
  [ecologicalSafariEs.id]: ecologicalSafariEs,
  [ecologicalWalkEs.id]: ecologicalWalkEs,
  [estanciaMimosaEs.id]: estanciaMimosaEs,
  [fluvialSafariEs.id]: fluvialSafariEs,
  [grutaLagoAzulEs.id]: grutaLagoAzulEs,
  [horsebackRidingEs.id]: horsebackRidingEs,
  [jaguarSafariEs.id]: jaguarSafariEs,
  [jeepSafariEs.id]: jeepSafariEs,
  [jungleCampingEs.id]: jungleCampingEs,
  [motorBoatTripEs.id]: motorBoatTripEs,
  [nocturnalSpotlightingEs.id]: nocturnalSpotlightingEs,
  [piranhaFishingEs.id]: piranhaFishingEs,
  [rioDaPrataEs.id]: rioDaPrataEs,
  [riverFloatingEs.id]: riverFloatingEs,
};

// ===================================================================
// PASSO 3: Definição da Store (sem alterações na lógica)
// ===================================================================
export const useTourStore = defineStore("singleTour", () => {
  const tours = ref<Record<string, Tour>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearTours() {
    tours.value = {};
  }

  async function fetchTours(lang = "pt") {
    // A lógica original está correta, mas vamos garantir que ela recarregue
    // os dados se o idioma mudar e os tours atuais estiverem vazios.
    if (Object.keys(tours.value).length > 0 && !loading.value) {
       // Opcional: só retorna se os dados já estiverem carregados para o idioma certo.
       // Por simplicidade, vamos permitir recarregar.
    }

    loading.value = true;
    error.value = null;
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      switch (lang) {
        case "en":
          tours.value = toursEn;
          break;
        case "es":
          tours.value = toursEs;
          break;
        default:
          tours.value = toursPt;
      }
    } catch (e) {
      error.value = "Falha ao carregar os passeios.";
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  const getTourBySlug = computed(() => {
    return (slug: string): Tour | null => {
      return Object.values(tours.value).find((tour) => tour.slug === slug) || null;
    };
  });

  const allTours = computed((): Tour[] => Object.values(tours.value));

  return { loading, error, getTourBySlug, allTours, fetchTours, clearTours };
});