import { canoeingPt, canoeingEn, canoeingEs } from "src/data/tours/canoeing";
import { ecologicalWalkPt, ecologicalWalkEn, ecologicalWalkEs } from "src/data/tours/ecological-walk";
import { fluvialSafariPt, fluvialSafariEn, fluvialSafariEs } from "src/data/tours/fluvial-safari";
import { horsebackRidingPt, horsebackRidingEn, horsebackRidingEs } from "src/data/tours/horseback-riding";
import { jeepSafariPt, jeepSafariEn, jeepSafariEs } from "src/data/tours/jeep-safari";
import { jungleCampingPt, jungleCampingEn, jungleCampingEs } from "src/data/tours/jungle-camping";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "src/data/tours/motor-boat-trip";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "src/data/tours/piranha-fishing";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "src/data/tours/river-floating";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- EAGLE (5D/4N) ---
export const jungleLodgeEaglePtItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1º Dia: Chegada e Focagem Noturna",
        descriptionItems: [
            "Transfer para o lodge e passeio de barco com holofote.",
        ],
        tours: [motorBoatTripPt],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Dia: Safári e Pesca",
        descriptionItems: [
            "Safári de Jeep pela manhã e pesca de piranhas à tarde.",
        ],
        tours: [jeepSafariPt, piranhaFishingPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3º Dia: Cavalgada e Canoagem",
        descriptionItems: ["Cavalgada pantaneira e passeio de canoa pelo rio."],
        tours: [horsebackRidingPt, canoeingPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4º Dia: Caminhada e Pernoite na Selva",
        descriptionItems: [
            "Caminhada ecológica, flutuação e a aventura de acampar na selva.",
        ],
        tours: [ecologicalWalkPt, riverFloatingPt, jungleCampingPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 5,
        title: "5º Dia: Safári Fluvial e Retorno",
        descriptionItems: [
            "Safári fluvial para as últimas observações e transfer de retorno.",
        ],
        tours: [fluvialSafariPt],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

export const jungleLodgeEagleEnItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1st Day: Arrival & Night Spotlighting",
        descriptionItems: ["Transfer to the lodge and spotlight boat trip."],
        tours: [motorBoatTripEn],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2nd Day: Safari & Fishing",
        descriptionItems: [
            "Jeep safari in the morning and piranha fishing in the afternoon.",
        ],
        tours: [jeepSafariEn, piranhaFishingEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3rd Day: Horseback Riding & Canoeing",
        descriptionItems: [
            "Pantanal horseback riding and a canoe trip on the river.",
        ],
        tours: [horsebackRidingEn, canoeingEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4th Day: Walk & Jungle Overnight",
        descriptionItems: [
            "Ecological walk, river floating, and the adventure of camping in the jungle.",
        ],
        tours: [ecologicalWalkEn, riverFloatingEn, jungleCampingEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 5,
        title: "5th Day: Fluvial Safari & Return",
        descriptionItems: [
            "Fluvial safari for last sightings and return transfer.",
        ],
        tours: [fluvialSafariEn],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

export const jungleLodgeEagleEsItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1er Día: Llegada y Foco Nocturno",
        descriptionItems: ["Traslado al lodge y paseo en bote con foco de luz."],
        tours: [motorBoatTripEs],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Día: Safari y Pesca",
        descriptionItems: [
            "Safari en Jeep por la mañana y pesca de pirañas por la tarde.",
        ],
        tours: [jeepSafariEs, piranhaFishingEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3er Día: Cabalgata y Canotaje",
        descriptionItems: ["Cabalgata pantanera y un paseo en canoa por el río."],
        tours: [horsebackRidingEs, canoeingEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4º Día: Caminata y Noche en la Selva",
        descriptionItems: [
            "Caminata ecológica, flotación y la aventura de acampar en la selva.",
        ],
        tours: [ecologicalWalkEs, riverFloatingEs, jungleCampingEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 5,
        title: "5º Día: Safari Fluvial y Regreso",
        descriptionItems: [
            "Safari fluvial para los últimos avistamientos y traslado de regreso.",
        ],
        tours: [fluvialSafariEs],
        mealsIncluded: ["breakfast", "lunch"],
    },
];
