import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEn } from "src/data/tours/birdwatching/BirdwatchingEn";
import { chalanaPiranhaFishingEn } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEn";
import { ecologicalSafariEn } from "src/data/tours/ecological-safari/EcologicalSafariEn";
import { jaguarSafariEn } from "src/data/tours/jaguar-safari/JaguarSafariEn";
import { nocturnalSpotlightingEn } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEn";

// --- ANTA (4D/3N) ---
export const fazendaAntaEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Arrival in the Pantanal",
    descriptionItems: [
      "Check-in, chalana trip, dinner, and nocturnal spotlighting.",
    ],
    tours: [chalanaPiranhaFishingEn, nocturnalSpotlightingEn],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2nd Day: Safari & Birds",
    descriptionItems: ["Photographic safari and birdwatching."],
    tours: [ecologicalSafariEn, birdwatchingEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: In Search of the Jaguar",
    descriptionItems: ["Day dedicated to the Jaguar Safari."],
    tours: [jaguarSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4th Day: Departure",
    descriptionItems: ["Free morning, lunch, and return."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];