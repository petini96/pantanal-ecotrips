import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEs } from "src/data/tours/birdwatching/BirdwatchingEs";
import { chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEs";
import { ecologicalSafariEs } from "src/data/tours/ecological-safari/EcologicalSafariEs";
import { nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEs";

// --- ARARINHA (3D/2N) ---
export const fazendaArarinhaEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Llegada al Pantanal",
    descriptionItems: [
      "Check-in, paseo en chalana con pesca, cena y enfoque nocturno.",
    ],
    tours: [chalanaPiranhaFishingEs, nocturnalSpotlightingEs],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Día: Inmersión en la Fauna",
    descriptionItems: [
      "Observación de aves al amanecer y safari fotográfico por la tarde.",
    ],
    tours: [birdwatchingEs, ecologicalSafariEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3er Día: Despedida",
    descriptionItems: ["Mañana libre en la hacienda, almuerzo y regreso."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];