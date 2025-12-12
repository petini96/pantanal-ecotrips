import { canoeingEn } from "src/data/tours/canoeing/CanoeingEn";
import { ecologicalWalkEn } from "src/data/tours/ecological-walk/EcologicalWalkEn";
import { horsebackRidingEn } from "src/data/tours/horseback-riding/HorsebackRidingEn";
import { jeepSafariEn } from "src/data/tours/jeep-safari/JeepSafariEn";
import { motorBoatTripEn } from "src/data/tours/motor-boat-trip/MotorBoatTripEn";
import { piranhaFishingEn } from "src/data/tours/piranha-fishing/PiranhaFishingEn";
import { riverFloatingEn } from "src/data/tours/river-floating/RiverFloatingEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

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