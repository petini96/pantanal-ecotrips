import { canoeingPt, canoeingEn, canoeingEs } from "../../tours/Canoeing";
import { ecologicalWalkPt, ecologicalWalkEn, ecologicalWalkEs } from "../../tours/EcologicalWalk";
import { fluvialSafariPt, fluvialSafariEn, fluvialSafariEs } from "../../tours/FluvialSafari";
import { horsebackRidingPt, horsebackRidingEn, horsebackRidingEs } from "../../tours/HorsebackRiding";
import { jeepSafariPt, jeepSafariEn, jeepSafariEs } from "../../tours/JeepSafari";
import { jungleCampingPt, jungleCampingEn, jungleCampingEs } from "../../tours/JungleCamping";
import { motorBoatTripPt, motorBoatTripEn, motorBoatTripEs } from "../../tours/MotorBoatTrip";
import { piranhaFishingPt, piranhaFishingEn, piranhaFishingEs } from "../../tours/PiranhaFishing";
import { riverFloatingPt, riverFloatingEn, riverFloatingEs } from "../../tours/RiverFloating";
import { type ItineraryItem } from "../../../model/ItineraryItem";

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
