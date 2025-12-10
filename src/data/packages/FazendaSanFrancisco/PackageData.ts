import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  fazendaCoatiPtItinerary,
  fazendaCoatiEnItinerary,
  fazendaCoatiEsItinerary,
  fazendaArarinhaPtItinerary,
  fazendaArarinhaEnItinerary,
  fazendaArarinhaEsItinerary,
  fazendaAntaPtItinerary,
  fazendaAntaEnItinerary,
  fazendaAntaEsItinerary,
  fazendaAguiaPtItinerary,
  fazendaAguiaEnItinerary,
  fazendaAguiaEsItinerary,
} from "./ItineraryData";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulEn } from "src/data/regions/pantanal-sul/PantanalSulEn";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";

const commonIncludedPt = [
  "Hospedagem em apartamento",
  "Pensão completa (café da manhã, almoço, jantar)",
  "Passeios descritos no roteiro",
  "Acompanhamento de guia",
  "Transporte compartilhado Campo Grande/Fazenda/Campo Grande",
  "Assistência no aeroporto",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
  "Passeios não mencionados",
];
const commonShouldIBringPt = [
  "Roupa de banho",
  "Tênis",
  "Repelente e protetor solar",
  "Câmera fotográfica",
  "Chapéu ou boné",
  "Roupas leves e confortáveis",
];
const commonObservationPt =
  "Voos de chegada devem ser até 09:30. Voos de partida devem ser após as 21:00. A ordem dos passeios é definida pela fazenda para otimizar a logística e aproveitar as melhores condições climáticas.";

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

// --- COMMON DATA (ES) ---
const commonIncludedEs = [
  "Alojamiento en apartamento",
  "Pensión completa (desayuno, almuerzo, cena)",
  "Tours descritos en el itinerario",
  "Acompañamiento de guía",
  "Transporte compartido Campo Grande/Hacienda/Campo Grande",
  "Asistencia en el aeropuerto",
];
const commonNotIncludedEs = [
  "Bebidas",
  "Billetes de avión",
  "Gastos de carácter personal",
  "Tours no mencionados",
];
const commonShouldIBringEs = [
  "Bañador",
  "Zapatillas deportivas",
  "Repelente y protector solar",
  "Cámara fotográfica",
  "Sombrero o gorra",
  "Ropa ligera y cómoda",
];
const commonObservationEs =
  "Los vuelos de llegada deben ser antes de las 09:30. Los vuelos de salida deben ser después de las 21:00. El orden de los tours es definido por la hacienda para optimizar la logística y aprovechar las mejores condiciones climáticas.";

const img = `${PACKAGE_BUCKET_NAME}/fazenda-san-francisco-coati/img1.webp`

// --- FAZENDA COATI PACKAGE (2D/1N) ---
const uuidCoati = uid();
export const fazendaCoatiPt: TourPackage = {
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: img,
  title: "Fazenda San Francisco - Tour Coati",
  subtitle:
    "Uma imersão rápida e intensa de 2 dias na vida selvagem do Pantanal.",
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: fazendaCoatiPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt],
  region: pantanalSulPt,
};
export const fazendaCoatiEn: TourPackage = {
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: img,
  title: "Fazenda San Francisco - Coati Tour",
  subtitle: "A quick and intense 2-day immersion into the Pantanal wildlife.",
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
};
export const fazendaCoatiEs: TourPackage = {
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: img,
  title: "Fazenda San Francisco - Tour Coatí",
  subtitle:
    "Una inmersión rápida e intensa de 2 días en la vida salvaje del Pantanal.",
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: fazendaCoatiEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs],
  packageRecommendedFor: [couplesEs, familiesEs],
  region: pantanalSulEs,
};

// --- FAZENDA ARARINHA PACKAGE (3D/2N) ---
const uuidArarinha = uid();
export const fazendaArarinhaPt: TourPackage = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: img,
  title: "Fazenda San Francisco - Tour Ararinha",
  subtitle: "3 dias focados na observação da rica avifauna e fauna pantaneira.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: fazendaArarinhaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalSulPt,
};
export const fazendaArarinhaEn: TourPackage = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: img,
  title: "Fazenda San Francisco - Macaw Tour",
  subtitle:
    "3 days focused on observing the rich birdlife and fauna of the Pantanal.",
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
};
export const fazendaArarinhaEs: TourPackage = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: img,
  title: "Fazenda San Francisco - Tour Guacamayo",
  subtitle:
    "3 días enfocados en la observación de la rica avifauna y fauna pantanera.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: fazendaArarinhaEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs],
  packageRecommendedFor: [couplesEs, familiesEs, groupsEs],
  region: pantanalSulEs,
};

// --- FAZENDA ANTA PACKAGE (4D/3N) ---
const uuidAnta = uid();
export const fazendaAntaPt: TourPackage = {
  id: uuidAnta,
  slug: "fazenda-san-francisco-anta",
  image: img,
  title: "Fazenda San Francisco - Tour Anta",
  subtitle:
    "Uma jornada de 4 dias com uma expedição especial em busca da onça-pintada.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: fazendaAntaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, adventurePt],
  packageRecommendedFor: [couplesPt, groupsPt],
  region: pantanalSulPt,
};
export const fazendaAntaEn: TourPackage = {
  id: uuidAnta,
  slug: "fazenda-san-francisco-anta",
  image: img,
  title: "Fazenda San Francisco - Tapir Tour",
  subtitle:
    "A 4-day journey with a special expedition in search of the jaguar.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: fazendaAntaEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, adventureEn],
  packageRecommendedFor: [couplesEn, groupsEn],
  region: pantanalSulEn,
};
export const fazendaAntaEs: TourPackage = {
  id: uuidAnta,
  slug: "fazenda-san-francisco-anta",
  image: img,
  title: "Fazenda San Francisco - Tour Tapir",
  subtitle:
    "Un viaje de 4 días con una expedición especial en busca del jaguar.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: fazendaAntaEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, adventureEs],
  packageRecommendedFor: [couplesEs, groupsEs],
  region: pantanalSulEs,
};

// --- FAZENDA ÁGUIA PACKAGE (5D/4N) ---
const uuidAguia = uid();
export const fazendaAguiaPt: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: img,
  title: "Fazenda San Francisco - Tour Águia",
  subtitle:
    "A experiência mais completa de 5 dias para vivenciar tudo que a fazenda oferece.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: fazendaAguiaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, adventurePt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalSulPt,
};
export const fazendaAguiaEn: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: img,
  title: "Fazenda San Francisco - Eagle Tour",
  subtitle:
    "The most complete 5-day experience to enjoy everything the farm has to offer.",
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
export const fazendaAguiaEs: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: img,
  title: "Fazenda San Francisco - Tour Águila",
  subtitle:
    "La experiencia más completa de 5 días para vivir todo lo que la hacienda ofrece.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: fazendaAguiaEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, adventureEs, aquaticEs],
  packageRecommendedFor: [couplesEs, familiesEs, groupsEs],
  region: pantanalSulEs,
};
