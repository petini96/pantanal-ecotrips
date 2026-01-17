import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { cavesPt } from "src/data/categories/cavess/CavessPt";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { noiteFelizPtItinerary } from "../itinerary-data/ItineraryDataPt";

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

const uuid = uid();

export const noiteFelizPt: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Noite Feliz em Bonito",
  subtitle:
    "Este roteiro é ideal para quem tem pouco tempo, mas quer conhecer as maravilhas de Bonito MS.",
  description: [
    ``
  ],
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: noiteFelizPtItinerary,
  included: [
    "2 noites de hospedagem com café da manhã",
    "Transporte compartilhado Campo Grande/Bonito/Campo Grande",
    "Transporte privativo para os passeios",
    "Ingressos para os passeios listados",
    "Almoço no dia da flutuação",
    "Assistência no aeroporto",
  ],
  notIncluded: [
    "Bebidas",
    "Jantares",
    "Passagens Aéreas",
    "Despesas de caráter pessoal",
  ],
  shouldIBring: [
    "Roupa de banho e toalha",
    "Tênis (obrigatório para gruta)",
    "Repelente e protetor solar",
    "Câmera fotográfica",
  ],
  observation:
    "Passeio sujeito a alteração dependendo das condições climáticas e disponibilidade.",
  packageCategories: [ecotourismPt, aquaticPt, cavesPt],
  packageRecommendedFor: [familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};