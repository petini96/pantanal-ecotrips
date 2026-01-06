import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { cavesEn } from "src/data/categories/cavess/CavessEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { bonitoSerraBodoquenaEn } from "src/data/regions/bonito/BonitoSerraBodoquenaEn";
import { bonitoAmizadeEnItinerary } from "../itinerary-data/ItineraryDataEn";

const uuid = uid();

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const bonitoAmizadeEn: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
  title: "Bonito Friendship Tour",
  subtitle:
    "A 5-day itinerary full of adventure and nature, perfect for groups of friends.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  itinerary: bonitoAmizadeEnItinerary,
  included: [
    "4 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Meals included as per itinerary",
    "Airport assistance",
  ],
  notIncluded: [
    "Drinks",
    "Lunch on the 2nd day",
    "Dinners",
    "Airfare",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for cave/trails)",
    "Repellent and sunscreen",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn, adventureEn],
  packageRecommendedFor: [groupsEn, familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn,
};