import { canoeingEs } from "src/data/tours/canoeing/CanoeingEs";
import { ecologicalWalkEs } from "src/data/tours/ecological-walk/EcologicalWalkEs";
import { horsebackRidingEs } from "src/data/tours/horseback-riding/HorsebackRidingEs";
import { jeepSafariEs } from "src/data/tours/jeep-safari/JeepSafariEs";
import { motorBoatTripEs } from "src/data/tours/motor-boat-trip/MotorBoatTripEs";
import { piranhaFishingEs } from "src/data/tours/piranha-fishing/PiranhaFishingEs";
import { riverFloatingEs } from "src/data/tours/river-floating/RiverFloatingEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

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