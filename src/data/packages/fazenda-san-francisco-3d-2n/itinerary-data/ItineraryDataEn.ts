import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEn } from "src/data/tours/birdwatching/BirdwatchingEn";
import { chalanaPiranhaFishingEn } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEn";
import { ecologicalSafariEn } from "src/data/tours/ecological-safari/EcologicalSafariEn";
import { nocturnalSpotlightingEn } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEn";

// --- ARARINHA (3D/2N) ---
export const fazendaArarinhaEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival in the Pantanal",
    descriptionItems: [
      "Check-in, chalana boat trip with fishing, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Wildlife Immersion",
    descriptionItems: [
      "Birdwatching at dawn and photographic safari in the afternoon.",
    ],
    tours: [birdwatchingEn, ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: Departure",
    descriptionItems: ["Free morning at the farm, lunch, and return."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];
