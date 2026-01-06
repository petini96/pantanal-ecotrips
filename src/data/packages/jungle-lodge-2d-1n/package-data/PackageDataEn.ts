import { uid } from "quasar";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeOtterEnItinerary } from "../itinerary-data/ItineraryDataEn";

 // --- COMMON DATA (EN-US) ---
const commonIncludedEn = [
  "Accommodation (as selected)",
  "Full board in the Pantanal (breakfast, lunch, dinner)",
  "Bilingual guide",
  "All activities mentioned in the itinerary",
  "Shared transport Campo Grande/Pantanal/Campo Grande",
  "Assistance from the Pantanal Eco Trips team",
];
const commonNotIncludedEn = [
  "Drinks",
  "Phone calls and laundry",
  "Meals during the transfer",
  "Private Transportation (check with us)",
  "Airfare",
  "Personal expenses",
];
const commonShouldIBringEn = [
  "Swimsuit and towel",
  "Cap or hat",
  "Sneakers or boots (mandatory for trails/safari)",
  "Repellent and sunscreen",
  "Comfortable clothes",
  "Camera",
  "Good spirit and a happy heart to feel the magic of nature.",
];
const commonObservationEn =
  "The order of activities may be changed depending on weather and operational conditions. Arrival in Campo Grande on the last day is around 7:00 PM. Do not book flights or buses departing before 9:00 PM.";

const img = `${PACKAGE_BUCKET_NAME}/jungle-lodge-otter/img1.webp`

// --- RIVER OTTER PACKAGE (2D/1N) ---
const uuidOtter = uid();

export const jungleLodgeOtterEn: TourPackage = {
  id: uuidOtter,
  slug: "jungle-lodge-lontra",
  image: img,
  title: "Jungle Lodge - Otter Package",
  subtitle: "A quick 2-day getaway to feel the essence of the Pantanal.",
  description: [
    ``
  ],
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: jungleLodgeOtterEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn],
  packageRecommendedFor: [couplesEn, familiesEn, groupsEn],
  region: pantanalSulEn,
};