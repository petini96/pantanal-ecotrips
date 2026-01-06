import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { fazendaCoatiPtItinerary } from "../itinerary-data/ItineraryDataPt";

const commonIncludedPt = [
  "Hospedagem em apartamento",
  "Pensão completa (café da manhã, almoço, jantar)",
  "Passeios descritos no roteiro",
  "Acompanhamento de guia",
  "Transporte compartilhado Campo Grande/Fazenda/Campo Grande",
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
 
const img = `${PACKAGE_BUCKET_NAME}/fazenda-san-francisco-coati/img1.webp`

// --- FAZENDA COATI PACKAGE (2D/1N) ---
const uuidCoati = uid();
export const fazendaCoatiPt: TourPackage = {
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: img,
  title: "Fazenda San Francisco - Tour Coati",
  subtitle:
    "Uma imersão rápida e intensa de 2 dias na vida selvagem do Pantanal.",
  description: [
    ``
  ],
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  itinerary: fazendaCoatiPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt],
  region: pantanalSulPt,
};