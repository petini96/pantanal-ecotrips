import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { fazendaArarinhaEsItinerary } from "../itinerary-data/ItineraryDataEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { descriptionSanFranciscoEs } from "../../common-data/san-francisco/es/description";
import { imgSanFrancisco, sanFranciscoImages } from "../../common-data/san-francisco";
import { sanFranciscoHotelEs } from "src/data/hotels/san-francisco/sanFranciscoHotelEs";

// --- COMMON DATA (ES) ---
const commonIncludedEs = [
  "Alojamiento en apartamento",
  "Pensión completa (desayuno, almuerzo, cena)",
  "Tours descritos en el itinerario",
  "Acompañamiento de guía",
  // "Transporte compartido Campo Grande/Hacienda/Campo Grande",
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

// --- FAZENDA COATI PACKAGE (3D/2N) ---
const uuidArarinha = uid();

export const fazendaArarinhaEs: TourPackage = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Tour Guacamayo",
  subtitle:
    "3 días enfocados en la observación de la rica avifauna y fauna pantanera.",
  description: descriptionSanFranciscoEs,
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
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelEs]
};