import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { fazendaAntaEsItinerary } from "../itinerary-data/ItineraryDataEs";
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

// --- FAZENDA ANTA PACKAGE (4D/3N) ---
const uuidAnta = uid();

export const fazendaAntaEs: TourPackage = {
  id: uuidAnta,
  slug: "fazenda-san-francisco-anta",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Tour Tapir",
  subtitle:
    "Un viaje de 4 días con una expedición especial en busca del jaguar.",
  description: descriptionSanFranciscoEs,
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
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelEs]
};