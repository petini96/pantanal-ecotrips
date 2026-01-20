import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";
import { fazendaAntaPtItinerary } from "../itinerary-data/ItineraryDataPt";
import { descriptionSanFranciscoPt } from "../../common-data/san-francisco/pt/description";
import { imgSanFrancisco, sanFranciscoImages } from "../../common-data/san-francisco";
import { sanFranciscoHotelPt } from "src/data/hotels/san-francisco/SanFranciscoHotelPt";

const commonIncludedPt = [
  "Hospedagem em apartamento",
  "Pensão completa (café da manhã, almoço, jantar)",
  "Passeios descritos no roteiro",
  "Acompanhamento de guia",
  // "Transporte compartilhado Campo Grande/Fazenda/Campo Grande",
  "Assistência no aeroporto",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
  "Passeios não mencionados",
];
const commonShouldIBringPt = [
  "Roupa de banho",
  "Tênis",
  "Repelente e protetor solar",
  "Câmera fotográfica",
  "Chapéu ou boné",
  "Roupas leves e confortáveis",
];
const commonObservationPt =
  "Voos de chegada devem ser até 09:30. Voos de partida devem ser após as 21:00. A ordem dos passeios é definida pela fazenda para otimizar a logística e aproveitar as melhores condições climáticas.";

// --- FAZENDA ANTA PACKAGE (4D/3N) ---
const uuidAnta = uid();
export const fazendaAntaPt: TourPackage = {
  id: uuidAnta,
  slug: "fazenda-san-francisco-anta",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Tour Anta",
  subtitle:
    "Uma jornada de 4 dias com uma expedição especial em busca da onça-pintada.",
  description: descriptionSanFranciscoPt,
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: fazendaAntaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, adventurePt],
  packageRecommendedFor: [couplesPt, groupsPt],
  region: pantanalSulPt,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelPt]
};
