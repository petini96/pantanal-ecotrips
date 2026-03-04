import { canoeingPt, canoeingEn, canoeingEs } from "src/data/tours/canoeing";
import { ecologicalWalkPt, ecologicalWalkEn, ecologicalWalkEs } from "src/data/tours/ecological-walk";
import { horsebackRidingPt, horsebackRidingEn, horsebackRidingEs } from "src/data/tours/horseback-riding";
import { jeepSafariPt, jeepSafariEn, jeepSafariEs } from "src/data/tours/jeep-safari";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "src/data/tours/motor-boat-trip";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "src/data/tours/piranha-fishing";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "src/data/tours/river-floating";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- ANACONDA (4D/3N) ---
export const jungleLodgeAnacondaPtItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1º Dia: Chegada e Passeio Noturno",
        descriptionItems: [
            "Transfer para o lodge e passeio de barco com holofote.",
        ],
        tours: [motorBoatTripPt],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Dia: Safári e Pesca",
        descriptionItems: ["Safári de Jeep na Nhecolândia e pesca de piranhas."],
        tours: [jeepSafariPt, piranhaFishingPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3º Dia: Caminhada e Atividades no Rio",
        descriptionItems: ["Caminhada ecológica, canoagem-em-miranda e flutuação."],
        tours: [ecologicalWalkPt, canoeingPt, riverFloatingPt],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4º Dia: Cavalgada e Retorno",
        descriptionItems: ["Cavalgada pantaneira e transfer de retorno."],
        tours: [horsebackRidingPt],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

// --- ANACONDA (4D/3N) ---
export const jungleLodgeAnacondaEnItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1st Day: Arrival & Night Tour",
        descriptionItems: ["Transfer to the lodge and spotlight boat trip."],
        tours: [motorBoatTripEn],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2nd Day: Safari & Fishing",
        descriptionItems: ["Jeep safari in Nhecolândia and piranha fishing."],
        tours: [jeepSafariEn, piranhaFishingEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3rd Day: Walk & River Activities",
        descriptionItems: ["Ecological walk, canoeing, and floating."],
        tours: [ecologicalWalkEn, canoeingEn, riverFloatingEn],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4th Day: Horseback Riding & Return",
        descriptionItems: ["Pantanal horseback riding and return transfer."],
        tours: [horsebackRidingEn],
        mealsIncluded: ["breakfast", "lunch"],
    },
];

export const jungleLodgeAnacondaEsItinerary: ItineraryItem[] = [
    {
        day: 1,
        title: "1er Día: Llegada y Paseo Nocturno",
        descriptionItems: ["Traslado al lodge y paseo en bote con foco de luz."],
        tours: [motorBoatTripEs],
        mealsIncluded: ["dinner"],
    },
    {
        day: 2,
        title: "2º Día: Safari y Pesca",
        descriptionItems: ["Safari en Jeep en Nhecolândia y pesca de pirañas."],
        tours: [jeepSafariEs, piranhaFishingEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 3,
        title: "3er Día: Caminata y Actividades de Río",
        descriptionItems: ["Caminata ecológica, canotaje y flotación."],
        tours: [ecologicalWalkEs, canoeingEs, riverFloatingEs],
        mealsIncluded: ["breakfast", "lunch", "dinner"],
    },
    {
        day: 4,
        title: "4º Día: Cabalgata y Regreso",
        descriptionItems: ["Cabalgata pantanera y traslado de regreso."],
        tours: [horsebackRidingEs],
        mealsIncluded: ["breakfast", "lunch"],
    },
];
