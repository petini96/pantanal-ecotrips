import { type ItineraryItem } from "src/model/ItineraryItem";

// Importar todas as atividades que acabamos de criar
import {
  chalanaPiranhaFishingPt,
  chalanaPiranhaFishingEn,
  chalanaPiranhaFishingEs,
} from "src/data/tours/ChalanaPiranhaFishing";
import {
  nocturnalSpotlightingPt,
  nocturnalSpotlightingEn,
  nocturnalSpotlightingEs,
} from "src/data/tours/NocturnalSpotlighting";
import {
  ecologicalSafariPt,
  ecologicalSafariEn,
  ecologicalSafariEs,
} from "src/data/tours/EcologicalSafari";
import {
  birdwatchingPt,
  birdwatchingEn,
  birdwatchingEs,
} from "src/data/tours/Birdwatching";
import {
  jaguarSafariPt,
  jaguarSafariEn,
  jaguarSafariEs,
} from "src/data/tours/JaguarSafari";

// Itineraries are built based on duration.
// The base day 1 is the same for all.

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
export const fazendaCoatiEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival & First Explorations",
    descriptionItems: [
      "Check-in, chalana boat trip with fishing, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Safari & Departure",
    descriptionItems: [
      "Photographic safari in the morning, lunch, and return.",
    ],
    tours: [ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
export const fazendaCoatiEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Llegada y Primeras Exploraciones",
    descriptionItems: [
      "Check-in, paseo en chalana con pesca, cena y enfoque nocturno.",
    ],
    tours: [chalanaPiranhaFishingEs, nocturnalSpotlightingEs],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Día: Safari y Despedida",
    descriptionItems: ["Safari fotográfico por la mañana, almuerzo y regreso."],
    tours: [ecologicalSafariEs],
    mealsIncluded: ["breakfast", "lunch"],
  },
];

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
export const fazendaArarinhaEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival in the Pantanal",
    descriptionItems: [
      "Check-in, chalana boat trip with fishing, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Wildlife Immersion",
    descriptionItems: [
      "Birdwatching at dawn and photographic safari in the afternoon.",
    ],
    tours: [birdwatchingEn, ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: Departure",
    descriptionItems: ["Free morning at the farm, lunch, and return."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
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

// --- ANTA (4D/3N) ---
export const fazendaAntaPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada ao Pantanal",
    descriptionItems: [
      "Check-in, passeio de chalana, jantar e focagem noturna.",
    ],
    tours: [chalanaPiranhaFishingPt, nocturnalSpotlightingPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári e Aves",
    descriptionItems: ["Safári fotográfico e observação de aves."],
    tours: [ecologicalSafariPt, birdwatchingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Em Busca do Jaguar",
    descriptionItems: ["Dia dedicado ao Safári de Onça-Pintada."],
    tours: [jaguarSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Despedida",
    descriptionItems: ["Manhã livre, almoço e retorno."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
export const fazendaAntaEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival in the Pantanal",
    descriptionItems: [
      "Check-in, chalana trip, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Safari & Birds",
    descriptionItems: ["Photographic safari and birdwatching."],
    tours: [ecologicalSafariEn, birdwatchingEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: In Search of the Jaguar",
    descriptionItems: ["Day dedicated to the Jaguar Safari."],
    tours: [jaguarSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4th Day: Departure",
    descriptionItems: ["Free morning, lunch, and return."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
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

// --- ÁGUIA (5D/4N) ---
export const fazendaAguiaPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada ao Pantanal",
    descriptionItems: [
      "Check-in, passeio de chalana, jantar e focagem noturna.",
    ],
    tours: [chalanaPiranhaFishingPt, nocturnalSpotlightingPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári Fotográfico",
    descriptionItems: [
      "Dia inteiro dedicado ao safári fotográfico, explorando diferentes áreas.",
    ],
    tours: [ecologicalSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: O Mundo das Aves",
    descriptionItems: [
      "Manhã de observação de aves e tarde livre para aproveitar a piscina.",
    ],
    tours: [birdwatchingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Em Busca do Jaguar",
    descriptionItems: ["Dia dedicado ao Safári de Onça-Pintada."],
    tours: [jaguarSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5º Dia: Despedida",
    descriptionItems: [
      "Última manhã na fazenda, almoço e retorno para Campo Grande.",
    ],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
export const fazendaAguiaEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival in the Pantanal",
    descriptionItems: [
      "Check-in, chalana trip, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Photographic Safari",
    descriptionItems: [
      "Full day dedicated to the photographic safari, exploring different areas.",
    ],
    tours: [ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: The World of Birds",
    descriptionItems: [
      "Morning of birdwatching and a free afternoon to enjoy the pool.",
    ],
    tours: [birdwatchingEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4th Day: In Search of the Jaguar",
    descriptionItems: ["Day dedicated to the Jaguar Safari."],
    tours: [jaguarSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5th Day: Departure",
    descriptionItems: [
      "Last morning at the farm, lunch, and return to Campo Grande.",
    ],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
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
