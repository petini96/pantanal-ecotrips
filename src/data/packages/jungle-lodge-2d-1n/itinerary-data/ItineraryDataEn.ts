import { fluvialSafariEn } from "src/data/tours/fluvial-safari/FluvialSafariEn";
import { motorBoatTripEn } from "src/data/tours/motor-boat-trip/MotorBoatTripEn";
import { piranhaFishingEn } from "src/data/tours/piranha-fishing/PiranhaFishingEn";
import { riverFloatingEn } from "src/data/tours/river-floating/RiverFloatingEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- RIVER OTTER (2D/1N) ---
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