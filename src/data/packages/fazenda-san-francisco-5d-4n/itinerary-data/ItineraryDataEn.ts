import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingEn } from "src/data/tours/birdwatching/BirdwatchingEn";
import { chalanaPiranhaFishingEn } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEn";
import { ecologicalSafariEn } from "src/data/tours/ecological-safari/EcologicalSafariEn";
import { jaguarSafariEn } from "src/data/tours/jaguar-safari/JaguarSafariEn";
import { nocturnalSpotlightingEn } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEn";

// --- ÁGUIA (5D/4N) ---
export const fazendaAguiaEnItinerary: ItineraryItem[] = [
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
    title: "2nd Day: Photographic Safari",
    descriptionItems: [
      "Full day dedicated to the photographic safari, exploring different areas.",
    ],
    tours: [ecologicalSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3rd Day: The World of Birds",
    descriptionItems: [
      "Morning of birdwatching and a free afternoon to enjoy the pool.",
    ],
    tours: [birdwatchingEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4th Day: In Search of the Jaguar",
    descriptionItems: ["Day dedicated to the Jaguar Safari."],
    tours: [jaguarSafariEn],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5th Day: Departure",
    descriptionItems: [
      "Last morning at the farm, lunch, and return to Campo Grande.",
    ],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];