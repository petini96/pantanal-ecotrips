import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt, birdwatchingEn, birdwatchingEs } from "src/data/tours/birdwatching";
import { chalanaPiranhaFishingPt, chalanaPiranhaFishingEn, chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing";
import { ecologicalSafariPt, ecologicalSafariEn, ecologicalSafariEs } from "src/data/tours/ecological-safari";
import { nocturnalSpotlightingPt, nocturnalSpotlightingEn, nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting";

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

// --- ARARINHA (3D/2N) ---
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
