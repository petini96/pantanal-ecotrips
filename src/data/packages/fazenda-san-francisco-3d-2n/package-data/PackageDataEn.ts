import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { fazendaArarinhaEnItinerary } from "../itinerary-data/ItineraryDataEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { descriptionSanFranciscoEn } from "../../common-data/san-francisco/en/description";
import { imgSanFrancisco, sanFranciscoImages } from "../../common-data/san-francisco";
import { sanFranciscoHotelEn } from "src/data/hotels/san-francisco/sanFranciscoHotelEn";

// --- COMMON DATA (EN-US) ---
const commonIncludedEn = [
  "Apartment accommodation",
  "Full board (breakfast, lunch, dinner)",
  "Tours described in the itinerary",
  "Guide accompaniment",
  // "Shared transport Campo Grande/Farm/Campo Grande",
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

// --- FAZENDA COATI PACKAGE (3D/2N) ---
const uuidArarinha = uid();

export const fazendaArarinhaEn: TourPackage = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Macaw Tour",
  subtitle:
    "3 days focused on observing the rich birdlife and fauna of the Pantanal.",
  description: descriptionSanFranciscoEn,
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: fazendaArarinhaEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn],
  packageRecommendedFor: [couplesEn, familiesEn, groupsEn],
  region: pantanalSulEn,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelEn]
};