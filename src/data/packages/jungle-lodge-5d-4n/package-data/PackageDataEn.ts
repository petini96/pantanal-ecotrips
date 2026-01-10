import { uid } from "quasar";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeEagleEnItinerary } from "../itinerary-data/ItineraryDataEn";
import { jungleLodgeImages } from "../../common-data/jungle-lodge";
import { jungleLodgeHotelEn } from "src/data/hotels/jungle-lodge/JungleLodgeHotelEn";

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

// --- EAGLE PACKAGE (5D/4N) ---
const uuidEagle = uid();

export const jungleLodgeEagleEn: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Eagle Package",
  subtitle:
    "The definitive 5-day experience, including a night of camping in the jungle.",
  description: [
    `Jungle Lodge is located on the park road of Southern Pantanal, 7 kilometres from the main access road, station Buraco Das Piranhas, in a region named  as Passo Do Lontra.`,
    `The hotel structure is a wooden construction on stilts situated near the bank of the Miranda River, perfect to adapt with the typical ecosystem event called "water season" where the water level rises and covers a large part of the land revealing fantastic landscape views.`,
    `Respecting the wildlife and seeking to promote a perfect balance between man and nature, the Pantanal Jungle Lodge offers the best hospitality and tourist activities in Southern Pantanal, adding a cozy atmosphere to your discovery adventures.`
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: jungleLodgeEagleEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn, adventureEn],
  packageRecommendedFor: [groupsEn, couplesEn],
  region: pantanalSulEn,
  galleryImages: jungleLodgeImages,
  hotels: [jungleLodgeHotelEn]
};