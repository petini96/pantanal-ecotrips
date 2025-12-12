import { type ItineraryItem } from "src/model/ItineraryItem";
import { chalanaPiranhaFishingEn } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEn";
import { ecologicalSafariEn } from "src/data/tours/ecological-safari/EcologicalSafariEn";
import { nocturnalSpotlightingEn } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEn";

export const fazendaCoatiEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival & First Explorations",
    descriptionItems: [
      "Check-in, chalana boat trip with fishing, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Safari & Departure",
    descriptionItems: [
      "Photographic safari in the morning, lunch, and return.",
    ],
    tours: [ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
