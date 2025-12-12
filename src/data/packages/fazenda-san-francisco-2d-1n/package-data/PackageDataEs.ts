import { uid } from "quasar";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { fazendaCoatiEsItinerary } from "../itinerary-data/ItineraryDataEs";
 
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

const uuidCoati = uid();

// --- FAZENDA COATI PACKAGE (2D/1N) ---
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