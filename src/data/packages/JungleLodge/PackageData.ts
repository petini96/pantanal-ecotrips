import { uid } from "quasar";
import { type TourPackage } from "../../../model/TourPackage";
import {
  jungleLodgeOtterPtItinerary,
  jungleLodgeOtterEnItinerary,
  jungleLodgeOtterEsItinerary,
  jungleLodgeCaimanPtItinerary,
  jungleLodgeCaimanEnItinerary,
  jungleLodgeCaimanEsItinerary,
  jungleLodgeAnacondaPtItinerary,
  jungleLodgeAnacondaEnItinerary,
  jungleLodgeAnacondaEsItinerary,
  jungleLodgeEaglePtItinerary,
  jungleLodgeEagleEnItinerary,
  jungleLodgeEagleEsItinerary,
} from "./ItineraryData";
import {
  ecotourismPt,
  ecotourismEn,
  ecotourismEs,
} from "../../../data/categories/Ecotourismm";
import { aquaticPt, aquaticEn, aquaticEs } from "../../../data/categories/Aquaticc";
import {
  adventurePt,
  adventureEn,
  adventureEs,
} from "../../../data/categories/Adventuree";
import {
  familiesPt,
  familiesEn,
  familiesEs,
} from "../../../data/audiences/Families";
import { couplesPt, couplesEn, couplesEs } from "../../../data/audiences/Couples";
import { groupsPt, groupsEn, groupsEs } from "../../../data/audiences/Groups";
import { pantanalPt, pantanalEn, pantanalEs } from "src/data/regions/Regions";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";

// --- COMMON DATA (PT-BR) ---
const commonIncludedPt = [
  "Hospedagem (conforme selecionado)",
  "Pensão completa no Pantanal (café da manhã, almoço, jantar)",
  "Guia bilíngue",
  "Todas as atividades mencionadas no roteiro",
  "Transporte compartilhado Campo Grande/Pantanal/Campo Grande",
  "Assistência da equipe Pantanal Eco Trips",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Ligações telefônicas e lavanderia",
  "Refeições durante o translado",
  "Transporte Privativo (consulte-nos)",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
];
const commonShouldIBringPt = [
  "Roupa de banho e toalha",
  "Boné ou chapéu",
  "Tênis ou bota (obrigatório para trilhas/safári)",
  "Repelente e protetor solar",
  "Roupas confortáveis",
  "Câmera fotográfica",
  "Bom humor e um coração feliz para sentir a magia da natureza.",
];
const commonObservationPt =
  "A ordem das atividades pode ser alterada conforme as condições climáticas e operacionais. A chegada em Campo Grande no último dia é por volta das 19:00. Não reserve voos ou ônibus que partam antes das 21:00.";

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

// --- COMMON DATA (ES) ---
const commonIncludedEs = [
  "Alojamiento (según seleccionado)",
  "Pensión completa en el Pantanal (desayuno, almuerzo, cena)",
  "Guía bilingüe",
  "Todas las actividades mencionadas en el itinerario",
  "Transporte compartido Campo Grande/Pantanal/Campo Grande",
  "Asistencia del equipo de Pantanal Eco Trips",
];
const commonNotIncludedEs = [
  "Bebidas",
  "Llamadas telefónicas y lavandería",
  "Comidas durante el traslado",
  "Transporte Privado (consúltenos)",
  "Billetes de avión",
  "Gastos personales",
];
const commonShouldIBringEs = [
  "Bañador y toalla",
  "Gorra o sombrero",
  "Zapatillas deportivas o botas (obligatorio para senderos/safari)",
  "Repelente y protector solar",
  "Ropa cómoda",
  "Cámara fotográfica",
  "Buen humor y un corazón feliz para sentir la magia de la naturaleza.",
];
const commonObservationEs =
  "El orden de las actividades puede cambiar según las condiciones climáticas y operativas. La llegada a Campo Grande el último día es alrededor de las 19:00. No reserve vuelos o autobuses que salgan antes de las 21:00.";

const img = `${PACKAGE_BUCKET_NAME}/jungle-lodge-otter/img1.webp`

// --- RIVER OTTER PACKAGE (2D/1N) ---
const uuidOtter = uid();
export const jungleLodgeOtterPt: TourPackage = {
  id: uuidOtter,
  slug: "jungle-lodge-lontra",
  image: img,
  title: "Jungle Lodge - Pacote Lontra",
  subtitle: "Uma escapada rápida de 2 dias para sentir a essência do Pantanal.",
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: jungleLodgeOtterPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalPt,
};
export const jungleLodgeOtterEn: TourPackage = {
  id: uuidOtter,
  slug: "jungle-lodge-lontra",
  image: img,
  title: "Jungle Lodge - Otter Package",
  subtitle: "A quick 2-day getaway to feel the essence of the Pantanal.",
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
  region: pantanalEn,
};
export const jungleLodgeOtterEs: TourPackage = {
  id: uuidOtter,
  slug: "jungle-lodge-lontra",
  image: img,
  title: "Jungle Lodge - Paquete Nutria",
  subtitle:
    "Una escapada rápida de 2 días para sentir la esencia del Pantanal.",
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: jungleLodgeOtterEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs],
  packageRecommendedFor: [couplesEs, familiesEs, groupsEs],
  region: pantanalEs,
};

// --- SPECTACLED CAIMAN PACKAGE (3D/2N) ---
const uuidCaiman = uid();
export const jungleLodgeCaimanPt: TourPackage = {
  id: uuidCaiman,
  slug: "jungle-lodge-caiman",
  image: img,
  title: "Jungle Lodge - Pacote Jacaré",
  subtitle: "3 dias explorando a terra e as águas do Pantanal.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: jungleLodgeCaimanPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt, adventurePt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalPt,
};
export const jungleLodgeCaimanEn: TourPackage = {
  id: uuidCaiman,
  slug: "jungle-lodge-caiman",
  image: img,
  title: "Jungle Lodge - Caiman Package",
  subtitle: "3 days exploring the land and waters of the Pantanal.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: jungleLodgeCaimanEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn, adventureEn],
  packageRecommendedFor: [couplesEn, familiesEn, groupsEn],
  region: pantanalEn,
};
export const jungleLodgeCaimanEs: TourPackage = {
  id: uuidCaiman,
  slug: "jungle-lodge-caiman",
  image: img,
  title: "Jungle Lodge - Paquete Caimán",
  subtitle: "3 días explorando la tierra y las aguas del Pantanal.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: jungleLodgeCaimanEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs, adventureEs],
  packageRecommendedFor: [couplesEs, familiesEs, groupsEs],
  region: pantanalEs,
};

// --- ANACONDA PACKAGE (4D/3N) ---
const uuidAnaconda = uid();
export const jungleLodgeAnacondaPt: TourPackage = {
  id: uuidAnaconda,
  slug: "jungle-lodge-anaconda",
  image: img,
  title: "Jungle Lodge - Pacote Sucuri",
  subtitle:
    "4 dias de imersão completa na diversidade de atividades pantaneiras.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: jungleLodgeAnacondaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt, adventurePt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalPt,
};
export const jungleLodgeAnacondaEn: TourPackage = {
  id: uuidAnaconda,
  slug: "jungle-lodge-anaconda",
  image: img,
  title: "Jungle Lodge - Anaconda Package",
  subtitle:
    "4 days of complete immersion in the diversity of Pantanal activities.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: jungleLodgeAnacondaEnItinerary,
  included: commonIncludedEn,
  notIncluded: commonNotIncludedEn,
  shouldIBring: commonShouldIBringEn,
  observation: commonObservationEn,
  packageCategories: [ecotourismEn, aquaticEn, adventureEn],
  packageRecommendedFor: [couplesEn, familiesEn, groupsEn],
  region: pantanalEn,
};
export const jungleLodgeAnacondaEs: TourPackage = {
  id: uuidAnaconda,
  slug: "jungle-lodge-anaconda",
  image: img,
  title: "Jungle Lodge - Paquete Anaconda",
  subtitle:
    "4 días de inmersión completa en la diversidad de actividades pantaneras.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: jungleLodgeAnacondaEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs, adventureEs],
  packageRecommendedFor: [couplesEs, familiesEs, groupsEs],
  region: pantanalEs,
};

// --- EAGLE PACKAGE (5D/4N) ---
const uuidEagle = uid();
export const jungleLodgeEaglePt: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Pacote Águia",
  subtitle:
    "A experiência definitiva de 5 dias, incluindo uma noite de acampamento na selva.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: jungleLodgeEaglePtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt, adventurePt],
  packageRecommendedFor: [groupsPt, couplesPt],
  region: pantanalPt,
};
export const jungleLodgeEagleEn: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Eagle Package",
  subtitle:
    "The definitive 5-day experience, including a night of camping in the jungle.",
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
  region: pantanalEn,
};
export const jungleLodgeEagleEs: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Paquete Águila",
  subtitle:
    "La experiencia definitiva de 5 días, incluyendo una noche de campamento en la selva.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: jungleLodgeEagleEsItinerary,
  included: commonIncludedEs,
  notIncluded: commonNotIncludedEs,
  shouldIBring: commonShouldIBringEs,
  observation: commonObservationEs,
  packageCategories: [ecotourismEs, aquaticEs, adventureEs],
  packageRecommendedFor: [groupsEs, couplesEs],
  region: pantanalEs,
};
