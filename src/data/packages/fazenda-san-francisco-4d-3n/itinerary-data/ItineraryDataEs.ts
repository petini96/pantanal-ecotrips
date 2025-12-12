import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEs } from "src/data/tours/birdwatching/BirdwatchingEs";
import { chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEs";
import { ecologicalSafariEs } from "src/data/tours/ecological-safari/EcologicalSafariEs";
import { jaguarSafariEs } from "src/data/tours/jaguar-safari/JaguarSafariEs";
import { nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEs";

// --- ANTA (4D/3N) ---
export const fazendaAntaEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Llegada al Pantanal",
    descriptionItems: ["Check-in, paseo en chalana, cena y enfoque nocturno."],
    tours: [chalanaPiranhaFishingEs, nocturnalSpotlightingEs],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Día: Safari y Aves",
    descriptionItems: ["Safari fotográfico y observación de aves."],
    tours: [ecologicalSafariEs, birdwatchingEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3er Día: En Busca del Jaguar",
    descriptionItems: ["Día dedicado al Safari de Jaguar."],
    tours: [jaguarSafariEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Día: Despedida",
    descriptionItems: ["Mañana libre, almuerzo y regreso."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];