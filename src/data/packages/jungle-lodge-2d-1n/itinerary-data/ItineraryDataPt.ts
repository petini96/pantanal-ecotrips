import { fluvialSafariPt } from "src/data/tours/fluvial-safari/FluvialSafariPt";
import { motorBoatTripPt } from "src/data/tours/motor-boat-trip/MotorBoatTripPt";
import { piranhaFishingPt } from "src/data/tours/piranha-fishing/PiranhaFishingPt";
import { riverFloatingPt } from "src/data/tours/river-floating/RiverFloatingPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- RIVER OTTER (2D/1N) ---
export const jungleLodgeOtterPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada e Atividades no Rio",
    descriptionItems: [
      "Chegada, Check-in, atividades de pesca e safári fluvial, e passeio noturno de barco.",
    ],
    tours: [piranhaFishingPt, motorBoatTripPt, fluvialSafariPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Flutuação e Retorno",
    descriptionItems: [
      "Flutuação no rio pela manhã, almoço e transfer de retorno.",
    ],
    tours: [riverFloatingPt],
    mealsIncluded: ["breakfast", "lunch"],
  },
];