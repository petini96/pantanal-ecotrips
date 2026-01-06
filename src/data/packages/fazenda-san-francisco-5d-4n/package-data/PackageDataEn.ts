import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { fazendaAguiaEnItinerary } from "../itinerary-data/ItineraryDataEn";

// --- COMMON DATA (EN-US) ---
const commonIncludedEn = [
  "Apartment accommodation",
  "Full board (breakfast, lunch, dinner)",
  "Tours described in the itinerary",
  "Guide accompaniment",
  "Shared transport Campo Grande/Farm/Campo Grande",
  "Airport assistance",
];
const commonNotIncludedEn = [
  "Drinks",
  "Airfare",
  "Personal expenses",
  "Unmentioned tours",
];
const commonShouldIBringEn = [
  "Swimsuit",
  "Sneakers",
  "Repellent and sunscreen",
  "Camera",
  "Hat or cap",
  "Light and comfortable clothing",
];
const commonObservationEn =
  "Arrival flights must be before 9:30 AM. Departure flights must be after 9:00 PM. The order of the tours is defined by the farm to optimize logistics and take advantage of the best weather conditions.";

const img = `${PACKAGE_BUCKET_NAME}/fazenda-san-francisco-coati/img1.webp`

// --- FAZENDA ÁGUIA PACKAGE (5D/4N) ---
const uuidAguia = uid();

export const fazendaAguiaEn: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: img,
  title: "Fazenda San Francisco - Eagle Tour",
  subtitle:
    "The most complete 5-day experience to enjoy everything the farm has to offer.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: fazendaAguiaEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, adventureEn, aquaticEn],
  packageRecommendedFor: [couplesEn, familiesEn, groupsEn],
  region: pantanalSulEn,
};