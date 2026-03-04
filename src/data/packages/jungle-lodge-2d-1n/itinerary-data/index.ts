import { fluvialSafariPt, fluvialSafariEn, fluvialSafariEs } from "src/data/tours/fluvial-safari";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "src/data/tours/motor-boat-trip";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "src/data/tours/piranha-fishing";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "src/data/tours/river-floating";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- RIVER OTTER (2D/1N) ---
export const jungleLodgeOtterPtItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1º Dia: Chegada e Atividades no Rio",
        descriptionItems: [
            "Chegada, Check-in, atividades de pesca e safári fluvial, e passeio noturno de barco.",
        ],
        tours: [piranhaFishingPt, motorBoatTripPt, fluvialSafariPt],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Dia: Flutuação e Retorno",
        descriptionItems: [
            "Flutuação no rio pela manhã, almoço e transfer de retorno.",
        ],
        tours: [riverFloatingPt],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

// --- RIVER OTTER (2D/1N) ---
export const jungleLodgeOtterEnItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1st Day: Arrival & River Activities",
        descriptionItems: [
            "Transfer, check-in, fishing and fluvial safari activities, and a night boat trip.",
        ],
        tours: [piranhaFishingEn, motorBoatTripEn, fluvialSafariEn],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2nd Day: Floating & Return",
        descriptionItems: [
            "River floating in the morning, lunch, and return transfer.",
        ],
        tours: [riverFloatingEn],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

// --- RIVER OTTER (2D/1N) ---
export const jungleLodgeOtterEsItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1er Día: Llegada y Actividades en el Río",
        descriptionItems: [
            "Traslado, check-in, actividades de pesca y safari fluvial, y paseo nocturno en bote.",
        ],
        tours: [piranhaFishingEs, motorBoatTripEs, fluvialSafariEs],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Día: Flotación y Regreso",
        descriptionItems: [
            "Flotación en el río por la mañana, almuerzo y traslado de regreso.",
        ],
        tours: [riverFloatingEs],
        mealsIncluded: ["breakfast", "lunch"],
    },
];
