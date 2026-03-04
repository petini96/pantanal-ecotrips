import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt, birdwatchingEn, birdwatchingEs } from "src/data/tours/birdwatching";
import { chalanaPiranhaFishingPt, chalanaPiranhaFishingEn, chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing";
import { ecologicalSafariPt, ecologicalSafariEn, ecologicalSafariEs } from "src/data/tours/ecological-safari";
import { jaguarSafariPt, jaguarSafariEn, jaguarSafariEs } from "src/data/tours/jaguar-safari";
import { nocturnalSpotlightingPt, nocturnalSpotlightingEn, nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting";

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

// --- ANTA (4D/3N) ---
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
