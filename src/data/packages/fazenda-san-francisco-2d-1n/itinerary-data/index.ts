import { type ItineraryItem } from "src/model/ItineraryItem";
import { chalanaPiranhaFishingPt, chalanaPiranhaFishingEn, chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing";
import { ecologicalSafariPt, ecologicalSafariEn, ecologicalSafariEs } from "src/data/tours/ecological-safari";
import { nocturnalSpotlightingPt, nocturnalSpotlightingEn, nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting";

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
