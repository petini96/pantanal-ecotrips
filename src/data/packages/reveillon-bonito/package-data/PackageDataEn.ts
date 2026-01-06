import { uid } from "quasar";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { cavesEn } from "src/data/categories/cavess/CavessEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { bonitoSerraBodoquenaEn } from "src/data/regions/bonito/BonitoSerraBodoquenaEn";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { reveillonBonitoEnItinerary } from "../itinerary-data/ItineraryDataEn";

const uuid = uid();

// EN-US
export const reveillonBonitoEn: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
  title: "New Year's Eve in Bonito 2024",
  subtitle:
    "A 5-day, 4-night package to celebrate the new year surrounded by nature.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  itinerary: reveillonBonitoEnItinerary,
  included: [
    "4 nights accommodation with breakfast",
    "Private transport Campo Grande/Bonito/Campo Grande",
    "Private transport for all tours",
    "Tickets for the listed tours",
    "Lunch on the snorkeling day",
    "Airport assistance",
  ],
  notIncluded: [
    "Airfare",
    "Drinks",
    "Dinners and unmentioned meals",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for cave/treetop circuit)",
    "Repellent and sunscreen",
    "Cap or hat",
    "Camera",
  ],
  observation:
    "Itinerary subject to change depending on weather conditions and availability. Limited spots.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn, adventureEn],
  packageRecommendedFor: [groupsEn, familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn
};