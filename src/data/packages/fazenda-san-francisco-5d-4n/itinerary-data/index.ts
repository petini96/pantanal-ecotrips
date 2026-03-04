import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt, birdwatchingEn, birdwatchingEs } from "src/data/tours/birdwatching";
import { chalanaPiranhaFishingPt, chalanaPiranhaFishingEn, chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing";
import { ecologicalSafariPt, ecologicalSafariEn, ecologicalSafariEs } from "src/data/tours/ecological-safari";
import { jaguarSafariPt, jaguarSafariEn, jaguarSafariEs } from "src/data/tours/jaguar-safari";
import { nocturnalSpotlightingPt, nocturnalSpotlightingEn, nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting";

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

// --- ÁGUIA (5D/4N) ---
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
