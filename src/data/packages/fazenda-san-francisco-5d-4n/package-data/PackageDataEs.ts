import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { fazendaAguiaEsItinerary } from "../itinerary-data/ItineraryDataEs";
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

// --- FAZENDA ÁGUIA PACKAGE (5D/4N) ---
const uuidAguia = uid();

export const fazendaAguiaEs: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Tour Águila",
  subtitle:
    "La experiencia más completa de 5 días para vivir todo lo que la hacienda ofrece.",
  description: descriptionSanFranciscoEs,
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
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelEs]
};
