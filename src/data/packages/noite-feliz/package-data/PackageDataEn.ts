import { uid } from "quasar";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { cavesEn } from "src/data/categories/cavess/CavessEn";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { bonitoSerraBodoquenaEn } from "src/data/regions/bonito/BonitoSerraBodoquenaEn";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { noiteFelizEnItinerary } from "../itinerary-data/ItineraryDataEn";

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras-em-bonito/img3.webp`

const uuid = uid();

// EN-US
export const noiteFelizEn: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Happy Night in Bonito",
  subtitle:
    "This itinerary is ideal for those who have little time but want to experience the wonders of Bonito MS.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: noiteFelizEnItinerary,
  included: [
    "2 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Lunch on the snorkeling day",
    "Airport assistance",
  ],
  notIncluded: ["Drinks", "Dinners", "Airfare", "Personal expenses"],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for the cave)",
    "Repellent and sunscreen",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn],
  packageRecommendedFor: [familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn
};