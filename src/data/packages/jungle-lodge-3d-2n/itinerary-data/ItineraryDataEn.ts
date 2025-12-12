import { ecologicalWalkEn } from "src/data/tours/ecological-walk/EcologicalWalkEn";
import { fluvialSafariEn } from "src/data/tours/fluvial-safari/FluvialSafariEn";
import { jeepSafariEn } from "src/data/tours/jeep-safari/JeepSafariEn";
import { motorBoatTripEn } from "src/data/tours/motor-boat-trip/MotorBoatTripEn";
import { piranhaFishingEn } from "src/data/tours/piranha-fishing/PiranhaFishingEn";
import { riverFloatingEn } from "src/data/tours/river-floating/RiverFloatingEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

// --- SPECTACLED CAIMAN (3D/2N) ---
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