import { ecologicalWalkEs } from "src/data/tours/ecological-walk/EcologicalWalkEs";
import { fluvialSafariEs } from "src/data/tours/fluvial-safari/FluvialSafariEs";
import { jeepSafariEs } from "src/data/tours/jeep-safari/JeepSafariEs";
import { motorBoatTripEs } from "src/data/tours/motor-boat-trip/MotorBoatTripEs";
import { piranhaFishingEs } from "src/data/tours/piranha-fishing/PiranhaFishingEs";
import { riverFloatingEs } from "src/data/tours/river-floating/RiverFloatingEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

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