import { type ItineraryItem } from "src/model/ItineraryItem";
import { chalanaPiranhaFishingPt } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingPt";
import { ecologicalSafariPt } from "src/data/tours/ecological-safari/EcologicalSafariPt";
import { nocturnalSpotlightingPt } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingPt";

// --- COATI (2D/1N) ---
export const fazendaCoatiPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada e Primeiras Explorações",
    descriptionItems: [
      "Check-in, passeio de chalana com pescaria, jantar e focagem noturna.",
    ],
    tours: [chalanaPiranhaFishingPt, nocturnalSpotlightingPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári e Despedida",
    descriptionItems: ["Safári fotográfico pela manhã, almoço e retorno."],
    tours: [ecologicalSafariPt],
    mealsIncluded: ["breakfast", "lunch"],
  },
];