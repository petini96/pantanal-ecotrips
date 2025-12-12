import { canoeingPt } from "src/data/tours/canoeing/CanoeingPt";
import { ecologicalWalkPt } from "src/data/tours/ecological-walk/EcologicalWalkPt";
import { horsebackRidingPt } from "src/data/tours/horseback-riding/HorsebackRidingPt";
import { jeepSafariPt } from "src/data/tours/jeep-safari/JeepSafariPt";
import { motorBoatTripPt } from "src/data/tours/motor-boat-trip/MotorBoatTripPt";
import { piranhaFishingPt } from "src/data/tours/piranha-fishing/PiranhaFishingPt";
import { riverFloatingPt } from "src/data/tours/river-floating/RiverFloatingPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- ANACONDA (4D/3N) ---
export const jungleLodgeAnacondaPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada e Passeio Noturno",
    descriptionItems: [
      "Transfer para o lodge e passeio de barco com holofote.",
    ],
    tours: [motorBoatTripPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári e Pesca",
    descriptionItems: ["Safári de Jeep na Nhecolândia e pesca de piranhas."],
    tours: [jeepSafariPt, piranhaFishingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Caminhada e Atividades no Rio",
    descriptionItems: ["Caminhada ecológica, canoagem-em-miranda e flutuação."],
    tours: [ecologicalWalkPt, canoeingPt, riverFloatingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Cavalgada e Retorno",
    descriptionItems: ["Cavalgada pantaneira e transfer de retorno."],
    tours: [horsebackRidingPt],
    mealsIncluded: ["breakfast", "lunch"],
  },
];