import { canoeingEs } from "src/data/tours/canoeing/CanoeingEs";
import { ecologicalWalkEs } from "src/data/tours/ecological-walk/EcologicalWalkEs";
import { fluvialSafariEs } from "src/data/tours/fluvial-safari/FluvialSafariEs";
import { horsebackRidingEs } from "src/data/tours/horseback-riding/HorsebackRidingEs";
import { jeepSafariEs } from "src/data/tours/jeep-safari/JeepSafariEs";
import { jungleCampingEs } from "src/data/tours/jungle-camping/JungleCampingEs";
import { motorBoatTripEs } from "src/data/tours/motor-boat-trip/MotorBoatTripEs";
import { piranhaFishingEs } from "src/data/tours/piranha-fishing/PiranhaFishingEs";
import { riverFloatingEs } from "src/data/tours/river-floating/RiverFloatingEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

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
