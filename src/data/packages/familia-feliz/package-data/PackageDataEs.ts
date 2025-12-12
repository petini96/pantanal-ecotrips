import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { cavesEs } from "src/data/categories/cavess/CavessEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { bonitoSerraBodoquenaEs } from "src/data/regions/bonito/BonitoSerraBodoquenaEs";
import { familiaFelizEsItinerary } from "../itinerary-data/ItineraryDataEs";

const uuid = uid();

const img = `${PACKAGE_BUCKET_NAME}/tour-familia-feliz/img2.webp`

export const familiaFelizEs: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: img,
  title: "Tour Familia Feliz",
  subtitle:
    "Un itinerario completo de 4 días, ideal para familias, que combina los mejores tours de Bonito.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: familiaFelizEsItinerary,
  included: [
    "3 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Comidas incluidas según itinerario",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Cenas no mencionadas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para la gruta)",
    "Repelente y protector solar",
    "Gorra o sombrero",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs],
  packageRecommendedFor: [familiesEs, couplesEs],
  region: bonitoSerraBodoquenaEs
};
