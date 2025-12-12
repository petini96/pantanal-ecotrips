import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEs } from "src/data/tours/birdwatching/BirdwatchingEs";
import { chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEs";
import { ecologicalSafariEs } from "src/data/tours/ecological-safari/EcologicalSafariEs";
import { jaguarSafariEs } from "src/data/tours/jaguar-safari/JaguarSafariEs";
import { nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEs";

// --- ÁGUIA (5D/4N) ---
export const fazendaAguiaEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Llegada al Pantanal",
    descriptionItems: ["Check-in, paseo en chalana, cena y enfoque nocturno."],
    tours: [chalanaPiranhaFishingEs, nocturnalSpotlightingEs],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Día: Safari Fotográfico",
    descriptionItems: [
      "Día completo dedicado al safari fotográfico, explorando diferentes áreas.",
    ],
    tours: [ecologicalSafariEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3er Día: El Mundo de las Aves",
    descriptionItems: [
      "Mañana de observación de aves y tarde libre para disfrutar de la piscina.",
    ],
    tours: [birdwatchingEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Día: En Busca del Jaguar",
    descriptionItems: ["Día dedicado al Safari de Jaguar."],
    tours: [jaguarSafariEs],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5º Día: Despedida",
    descriptionItems: [
      "Última mañana en la hacienda, almuerzo y regreso a Campo Grande.",
    ],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
