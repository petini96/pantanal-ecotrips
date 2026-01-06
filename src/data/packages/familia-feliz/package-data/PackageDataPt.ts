import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { cavesPt } from "src/data/categories/cavess/CavessPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";
import { familiaFelizPtItinerary } from "../itinerary-data/ItineraryDataPt";

const uuid = uid();

const img = `${PACKAGE_BUCKET_NAME}/tour-familia-feliz/img2.webp`

export const familiaFelizPt: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: img,
  title: "Tour Família Feliz",
  subtitle:
    "Um roteiro completo de 4 dias, ideal para famílias, combinando os melhores passeios de Bonito.",
  description: [
    ``
  ],
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: familiaFelizPtItinerary,
  included: [
    "3 noites de hospedagem com café da manhã",
    "Transporte compartilhado Campo Grande/Bonito/Campo Grande",
    "Transporte privativo para os passeios",
    "Ingressos para os passeios listados",
    "Refeições inclusas conforme roteiro",
    "Assistência no aeroporto",
  ],
  notIncluded: [
    "Bebidas",
    "Jantares não mencionados",
    "Passagens Aéreas",
    "Despesas de caráter pessoal",
  ],
  shouldIBring: [
    "Roupa de banho e toalha",
    "Tênis (obrigatório para gruta)",
    "Repelente e protetor solar",
    "Boné ou chapéu",
    "Câmera fotográfica",
  ],
  observation:
    "Passeio sujeito a alteração dependendo das condições climáticas e disponibilidade.",
  packageCategories: [ecotourismPt, aquaticPt, cavesPt],
  packageRecommendedFor: [familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};