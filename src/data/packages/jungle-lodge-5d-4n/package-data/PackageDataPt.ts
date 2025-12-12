import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeEaglePtItinerary } from "../itinerary-data/ItineraryDataPt";

// --- COMMON DATA (PT-BR) ---
const commonIncludedPt = [
  "Hospedagem (conforme selecionado)",
  "Pensão completa no Pantanal (café da manhã, almoço, jantar)",
  "Guia bilíngue",
  "Todas as atividades mencionadas no roteiro",
  "Transporte compartilhado Campo Grande/Pantanal/Campo Grande",
  "Assistência da equipe Pantanal Eco Trips",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Ligações telefônicas e lavanderia",
  "Refeições durante o translado",
  "Transporte Privativo (consulte-nos)",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
];
const commonShouldIBringPt = [
  "Roupa de banho e toalha",
  "Boné ou chapéu",
  "Tênis ou bota (obrigatório para trilhas/safári)",
  "Repelente e protetor solar",
  "Roupas confortáveis",
  "Câmera fotográfica",
  "Bom humor e um coração feliz para sentir a magia da natureza.",
];
const commonObservationPt =
  "A ordem das atividades pode ser alterada conforme as condições climáticas e operacionais. A chegada em Campo Grande no último dia é por volta das 19:00. Não reserve voos ou ônibus que partam antes das 21:00.";

const img = `${PACKAGE_BUCKET_NAME}/jungle-lodge-otter/img1.webp`

// --- EAGLE PACKAGE (5D/4N) ---
const uuidEagle = uid();
export const jungleLodgeEaglePt: TourPackage = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  title: "Jungle Lodge - Pacote Águia",
  subtitle:
    "A experiência definitiva de 5 dias, incluindo uma noite de acampamento na selva.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  itinerary: jungleLodgeEaglePtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt, adventurePt],
  packageRecommendedFor: [groupsPt, couplesPt],
  region: pantanalSulPt,
};