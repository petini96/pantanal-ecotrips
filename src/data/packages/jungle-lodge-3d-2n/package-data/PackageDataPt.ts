import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { pantanalSulPt } from "src/data/regions/pantanal-sul/PantanalSulPt";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeCaimanPtItinerary } from "../itinerary-data/ItineraryDataPt";
import { jungleLodgeImages } from "../../common-data/jungle-lodge";
import { jungleLodgeHotelPt } from "src/data/hotels/jungle-lodge/JungleLodgeHotelPt";

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

// --- SPECTACLED CAIMAN PACKAGE (3D/2N) ---
const uuidCaiman = uid();
export const jungleLodgeCaimanPt: TourPackage = {
  id: uuidCaiman,
  slug: "jungle-lodge-caiman",
  image: img,
  title: "Jungle Lodge - Pacote Jacaré",
  subtitle: "3 dias explorando a terra e as águas do Pantanal.",
  description: [
  `O Jungle Lodge está localizado na Estrada Parque do Pantanal Sul, a 7 quilômetros do acesso principal, na estação Buraco das Piranhas, em uma região conhecida como Passo do Lontra.`,
  `A estrutura do hotel é uma construção em madeira sobre palafitas situada próxima à margem do Rio Miranda, perfeitamente adaptada ao ciclo típico do ecossistema conhecido como "cheia" (ou estação das águas), onde o nível da água sobe e cobre grande parte do terreno, revelando paisagens fantásticas.`,
  `Respeitando a vida selvagem e buscando promover um equilíbrio perfeito entre o homem e a natureza, o Pantanal Jungle Lodge oferece a melhor hospitalidade e atividades turísticas no Pantanal Sul, adicionando uma atmosfera aconchegante às suas aventuras de descoberta.`
],
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: jungleLodgeCaimanPtItinerary,
  included: commonIncludedPt,
  notIncluded: commonNotIncludedPt,
  shouldIBring: commonShouldIBringPt,
  observation: commonObservationPt,
  packageCategories: [ecotourismPt, aquaticPt, adventurePt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalSulPt,
  galleryImages: jungleLodgeImages,
  hotels: [jungleLodgeHotelPt]
};