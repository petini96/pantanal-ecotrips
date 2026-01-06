import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { cavesEs } from "src/data/categories/cavess/CavessEs";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";
import { bonitoAmizadeEsItinerary } from "../itinerary-data/ItineraryDataEs";

const uuid = uid();

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const bonitoAmizadeEs: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
  title: "Tour Bonito Amistad",
  subtitle:
    "Un itinerario de 5 días lleno de aventura y naturaleza, perfecto para grupos de amigos.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  itinerary: bonitoAmizadeEsItinerary,
  included: [
    "4 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Comidas incluidas según itinerario",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Almuerzo del 2º día",
    "Cenas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para gruta/senderos)",
    "Repelente y protector solar",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs, adventureEs],
  packageRecommendedFor: [groupsEs, familiesEs, couplesEs],
  region: bonitoSerraBodoquenaPt,
};
