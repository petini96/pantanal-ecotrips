import { canoeingPt } from "src/data/tours/canoeing/CanoeingPt";
import { ecologicalWalkPt } from "src/data/tours/ecological-walk/EcologicalWalkPt";
import { fluvialSafariPt } from "src/data/tours/fluvial-safari/FluvialSafariPt";
import { horsebackRidingPt } from "src/data/tours/horseback-riding/HorsebackRidingPt";
import { jeepSafariPt } from "src/data/tours/jeep-safari/JeepSafariPt";
import { jungleCampingPt } from "src/data/tours/jungle-camping/JungleCampingPt";
import { motorBoatTripPt } from "src/data/tours/motor-boat-trip/MotorBoatTripPt";
import { piranhaFishingPt } from "src/data/tours/piranha-fishing/PiranhaFishingPt";
import { riverFloatingPt } from "src/data/tours/river-floating/RiverFloatingPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- EAGLE (5D/4N) ---
export const jungleLodgeEaglePtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada e Focagem Noturna",
    descriptionItems: [
      "Transfer para o lodge e passeio de barco com holofote.",
    ],
    tours: [motorBoatTripPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári e Pesca",
    descriptionItems: [
      "Safári de Jeep pela manhã e pesca de piranhas à tarde.",
    ],
    tours: [jeepSafariPt, piranhaFishingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Cavalgada e Canoagem",
    descriptionItems: ["Cavalgada pantaneira e passeio de canoa pelo rio."],
    tours: [horsebackRidingPt, canoeingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Caminhada e Pernoite na Selva",
    descriptionItems: [
      "Caminhada ecológica, flutuação e a aventura de acampar na selva.",
    ],
    tours: [ecologicalWalkPt, riverFloatingPt, jungleCampingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5º Dia: Safári Fluvial e Retorno",
    descriptionItems: [
      "Safári fluvial para as últimas observações e transfer de retorno.",
    ],
    tours: [fluvialSafariPt],
    mealsIncluded: ["breakfast", "lunch"],
  },
];