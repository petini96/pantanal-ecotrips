import { uid } from "quasar";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { cavesEs } from "src/data/categories/cavess/CavessEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { bonitoSerraBodoquenaEs } from "src/data/regions/bonito/BonitoSerraBodoquenaEs";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { reveillonBonitoEsItinerary } from "../itinerary-data/ItineraryDataEs";

const uuid = uid();

// ES
export const reveillonBonitoEs: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
  title: "Nochevieja en Bonito 2024",
  subtitle:
    "Paquete de 5 días y 4 noches para celebrar el año nuevo en plena naturaleza.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  itinerary: reveillonBonitoEsItinerary,
  included: [
    "4 noches de alojamiento con desayuno",
    "Transporte privado Campo Grande/Bonito/Campo Grande",
    "Transporte privado para todos los tours",
    "Entradas para los tours mencionados",
    "Almuerzo el día de la flotación",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Billetes de avión",
    "Bebidas",
    "Cenas y comidas no mencionadas",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para gruta/arborismo)",
    "Repelente y protector solar",
    "Gorra o sombrero",
    "Cámara fotográfica",
  ],
  observation:
    "Itinerario sujeto a cambios según las condiciones climáticas y la disponibilidad. Plazas limitadas.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs, adventureEs],
  packageRecommendedFor: [groupsEs, familiesEs, couplesEs],
  region: bonitoSerraBodoquenaEs
};
