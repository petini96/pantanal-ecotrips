import { uid } from "quasar";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { pantanalSulEs } from "src/data/regions/pantanal-sul/PantanalSulEs";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeEagleEsItinerary } from "../itinerary-data/ItineraryDataEs";

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

// --- EAGLE PACKAGE (5D/4N) ---
const uuidEagle = uid();

export const jungleLodgeEagleEs: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Paquete Águila",
  subtitle:
    "La experiencia definitiva de 5 días, incluyendo una noche de campamento en la selva.",
  description: [
    ``
  ],
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
  region: pantanalSulEs,
};
