import { fluvialSafariEs } from "src/data/tours/fluvial-safari/FluvialSafariEs";
import { motorBoatTripEs } from "src/data/tours/motor-boat-trip/MotorBoatTripEs";
import { piranhaFishingEs } from "src/data/tours/piranha-fishing/PiranhaFishingEs";
import { riverFloatingEs } from "src/data/tours/river-floating/RiverFloatingEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

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