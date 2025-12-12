import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt } from "src/data/tours/birdwatching/BirdwatchingPt";
import { chalanaPiranhaFishingPt } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingPt";
import { ecologicalSafariPt } from "src/data/tours/ecological-safari/EcologicalSafariPt";
import { nocturnalSpotlightingPt } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingPt";

// --- ARARINHA (3D/2N) ---
export const fazendaArarinhaPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada ao Pantanal",
    descriptionItems: [
      "Check-in, passeio de chalana com pescaria, jantar e focagem noturna.",
    ],
    tours: [chalanaPiranhaFishingPt, nocturnalSpotlightingPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Imersão na Fauna",
    descriptionItems: [
      "Observação de aves ao amanhecer e safári fotográfico à tarde.",
    ],
    tours: [birdwatchingPt, ecologicalSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Despedida",
    descriptionItems: ["Manhã livre na fazenda, almoço e retorno."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];