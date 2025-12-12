import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { cavesEn } from "src/data/categories/cavess/CavessEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { bonitoSerraBodoquenaEn } from "src/data/regions/bonito/BonitoSerraBodoquenaEn";
import { familiaFelizEnItinerary } from "../itinerary-data/ItineraryDataEn";

const uuid = uid();

const img = `${PACKAGE_BUCKET_NAME}/tour-familia-feliz/img2.webp`

export const familiaFelizEn: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: img,
  title: "Happy Family Tour",
  subtitle:
    "A complete 4-day itinerary, ideal for families, combining the best tours in Bonito.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: familiaFelizEnItinerary,
  included: [
    "3 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Meals included as per itinerary",
    "Airport assistance",
  ],
  notIncluded: [
    "Drinks",
    "Unmentioned dinners",
    "Airfare",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for the cave)",
    "Repellent and sunscreen",
    "Cap or hat",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn],
  packageRecommendedFor: [familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn
};