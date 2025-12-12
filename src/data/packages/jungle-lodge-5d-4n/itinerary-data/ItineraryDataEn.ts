import { canoeingEn } from "src/data/tours/canoeing/CanoeingEn";
import { ecologicalWalkEn } from "src/data/tours/ecological-walk/EcologicalWalkEn";
import { fluvialSafariEn } from "src/data/tours/fluvial-safari/FluvialSafariEn";
import { horsebackRidingEn } from "src/data/tours/horseback-riding/HorsebackRidingEn";
import { jeepSafariEn } from "src/data/tours/jeep-safari/JeepSafariEn";
import { jungleCampingEn } from "src/data/tours/jungle-camping/JungleCampingEn";
import { motorBoatTripEn } from "src/data/tours/motor-boat-trip/MotorBoatTripEn";
import { piranhaFishingEn } from "src/data/tours/piranha-fishing/PiranhaFishingEn";
import { riverFloatingEn } from "src/data/tours/river-floating/RiverFloatingEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

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