import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { cavesPt } from "src/data/categories/cavess/CavessPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { reveillonBonitoPtItinerary } from "../itinerary-data/ItineraryDataPt";

const uuid = uid();

// PT-BR
export const reveillonBonitoPt: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
  title: "Réveillon em Bonito 2024",
  subtitle:
    "Pacote de 5 dias e 4 noites para celebrar a virada do ano em meio à natureza.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  itinerary: reveillonBonitoPtItinerary,
  included: [
    "4 noites de hospedagem com café da manhã",
    "Transporte privativo Campo Grande/Bonito/Campo Grande",
    "Transporte privativo para todos os passeios",
    "Ingressos para os passeios listados",
    "Almoço no dia da flutuação",
    "Assistência no aeroporto",
  ],
  notIncluded: [
    "Passagens aéreas",
    "Bebidas",
    "Jantares e refeições não mencionadas",
    "Despesas de caráter pessoal",
  ],
  shouldIBring: [
    "Roupa de banho e toalha",
    "Tênis (obrigatório para gruta/arvorismo)",
    "Repelente e protetor solar",
    "Boné ou chapéu",
    "Câmera fotográfica",
  ],
  observation:
    "Roteiro sujeito a alteração dependendo das condições climáticas e disponibilidade. Vagas limitadas.",
  packageCategories: [ecotourismPt, aquaticPt, cavesPt, adventurePt],
  packageRecommendedFor: [groupsPt, familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};