import { uid } from "quasar";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { cavesEs } from "src/data/categories/cavess/CavessEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { bonitoSerraBodoquenaEs } from "src/data/regions/bonito/BonitoSerraBodoquenaEs";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { noiteFelizEsItinerary } from "../itinerary-data/ItineraryDataEs";

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras-em-bonito/img3.webp`

const uuid = uid();

// ES
export const noiteFelizEs: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Noche Feliz en Bonito",
  subtitle:
    "Este itinerario es ideal para quienes tienen poco tiempo, pero quieren conocer las maravillas de Bonito MS.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: noiteFelizEsItinerary,
  included: [
    "2 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Almuerzo el día de la flotación",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Cenas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para la gruta)",
    "Repelente y protector solar",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs],
  packageRecommendedFor: [familiesEs, couplesEs],
  region: bonitoSerraBodoquenaEs
};
