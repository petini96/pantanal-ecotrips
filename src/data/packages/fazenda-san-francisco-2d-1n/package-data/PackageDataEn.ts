import { uid } from "quasar";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { type TourPackage } from "src/model/TourPackage";
import { fazendaCoatiEnItinerary } from "../itinerary-data/ItineraryDataEn";
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

// --- FAZENDA COATI PACKAGE (2D/1N) ---
const uuidCoati = uid();

export const fazendaCoatiEn: TourPackage = {
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Coati Tour",
  subtitle: "A quick and intense 2-day immersion into the Pantanal wildlife.",
  description: descriptionSanFranciscoEn,
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: fazendaCoatiEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn],
  packageRecommendedFor: [couplesEn, familiesEn],
  region: pantanalSulEn,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelEn]
  
};