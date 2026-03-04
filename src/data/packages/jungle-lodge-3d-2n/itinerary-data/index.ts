import { ecologicalWalkPt, ecologicalWalkEn, ecologicalWalkEs } from "src/data/tours/ecological-walk";
import { fluvialSafariPt, fluvialSafariEn, fluvialSafariEs } from "src/data/tours/fluvial-safari";
import { jeepSafariPt, jeepSafariEn, jeepSafariEs } from "src/data/tours/jeep-safari";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "src/data/tours/motor-boat-trip";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "src/data/tours/piranha-fishing";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "src/data/tours/river-floating";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- SPECTACLED CAIMAN (3D/2N) ---
export const jungleLodgeCaimanPtItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1º Dia: Chegada e Safári Fluvial",
        descriptionItems: ["Transfer para o lodge e safári fluvial."],
        tours: [fluvialSafariPt],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Dia: Safári, Caminhada e Focagem",
        descriptionItems: [
            "Safári de Jeep, caminhada ecológica, pesca de piranhas e passeio noturno.",
        ],
        tours: [jeepSafariPt, ecologicalWalkPt, piranhaFishingPt, motorBoatTripPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3º Dia: Flutuação e Retorno",
        descriptionItems: ["Flutuação no rio e transfer de retorno."],
        tours: [riverFloatingPt],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

// --- SPECTACLED CAIMAN (3D/2N) ---
export const jungleLodgeCaimanEnItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1st Day: Arrival & Fluvial Safari",
        descriptionItems: ["Transfer to the lodge and fluvial safari."],
        tours: [fluvialSafariEn],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2nd Day: Safari, Walk & Spotlighting",
        descriptionItems: [
            "Jeep safari, ecological walk, piranha fishing, and night tour.",
        ],
        tours: [jeepSafariEn, ecologicalWalkEn, piranhaFishingEn, motorBoatTripEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3rd Day: Floating & Return",
        descriptionItems: ["River floating and return transfer."],
        tours: [riverFloatingEn],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

export const jungleLodgeCaimanEsItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1er Día: Llegada y Safari Fluvial",
        descriptionItems: ["Traslado al lodge y safari fluvial."],
        tours: [fluvialSafariEs],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Día: Safari, Caminata y Foco de Luz",
        descriptionItems: [
            "Safari en Jeep, caminata ecológica, pesca de pirañas y paseo nocturno.",
        ],
        tours: [jeepSafariEs, ecologicalWalkEs, piranhaFishingEs, motorBoatTripEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3er Día: Flotación y Regreso",
        descriptionItems: ["Flotación en el río y traslado de regreso."],
        tours: [riverFloatingEs],
        mealsIncluded: ["breakfast", "lunch"],
    },
];
