import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";
import { fazendaAguiaPtItinerary } from "../itinerary-data/ItineraryDataPt";
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

// --- FAZENDA ÁGUIA PACKAGE (5D/4N) ---
const uuidAguia = uid();
export const fazendaAguiaPt: TourPackage = {
  id: uuidAguia,
  slug: "fazenda-san-francisco-aguia",
  image: imgSanFrancisco,
  title: "Fazenda San Francisco - Tour Águia",
  subtitle:
    "A experiência mais completa de 5 dias para vivenciar tudo que a fazenda oferece.",
  description: descriptionSanFranciscoPt,
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: fazendaAguiaPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, adventurePt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalSulPt,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelPt]
};