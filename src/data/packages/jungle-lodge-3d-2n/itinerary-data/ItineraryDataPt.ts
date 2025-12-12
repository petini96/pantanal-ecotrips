import { ecologicalWalkPt } from "src/data/tours/ecological-walk/EcologicalWalkPt";
import { fluvialSafariPt } from "src/data/tours/fluvial-safari/FluvialSafariPt";
import { jeepSafariPt } from "src/data/tours/jeep-safari/JeepSafariPt";
import { motorBoatTripPt } from "src/data/tours/motor-boat-trip/MotorBoatTripPt";
import { piranhaFishingPt } from "src/data/tours/piranha-fishing/PiranhaFishingPt";
import { riverFloatingPt } from "src/data/tours/river-floating/RiverFloatingPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- SPECTACLED CAIMAN (3D/2N) ---
export const jungleLodgeCaimanPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada e Safári Fluvial",
    descriptionItems: ["Transfer para o lodge e safári fluvial."],
    tours: [fluvialSafariPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári, Caminhada e Focagem",
    descriptionItems: [
      "Safári de Jeep, caminhada ecológica, pesca de piranhas e passeio noturno.",
    ],
    tours: [jeepSafariPt, ecologicalWalkPt, piranhaFishingPt, motorBoatTripPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Flutuação e Retorno",
    descriptionItems: ["Flutuação no rio e transfer de retorno."],
    tours: [riverFloatingPt],
    mealsIncluded: ["breakfast", "lunch"],
  },
];