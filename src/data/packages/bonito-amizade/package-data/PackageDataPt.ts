import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { cavesPt } from "src/data/categories/cavess/CavessPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";
import { bonitoAmizadePtItinerary } from "../itinerary-data/ItineraryDataPt";

const uuid = uid();

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const bonitoAmizadePt: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
  title: "Tour Bonito Amizade",
  subtitle:
    "Um roteiro de 5 dias cheio de aventura e natureza, perfeito para grupos de amigos.",
  description: [
    ``
  ],
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  itinerary: bonitoAmizadePtItinerary,
  included: [
    "4 noites de hospedagem com café da manhã",
    "Transporte compartilhado Campo Grande/Bonito/Campo Grande",
    "Transporte privativo para os passeios",
    "Ingressos para os passeios listados",
    "Refeições inclusas conforme roteiro",
    "Assistência no aeroporto",
  ],
  notIncluded: [
    "Bebidas",
    "Almoço no 2º dia",
    "Jantares",
    "Passagens Aéreas",
    "Despesas de caráter pessoal",
  ],
  shouldIBring: [
    "Roupa de banho e toalha",
    "Tênis (obrigatório para gruta/trilhas)",
    "Repelente e protetor solar",
    "Câmera fotográfica",
  ],
  observation:
    "Passeio sujeito a alteração dependendo das condições climáticas e disponibilidade.",
  packageCategories: [ecotourismPt, aquaticPt, cavesPt, adventurePt],
  packageRecommendedFor: [groupsPt, familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt,
};