import { uid } from "quasar";
import { type TourPackage } from "../../../model/TourPackage";
import {
  noiteFelizPtItinerary,
  noiteFelizEnItinerary,
  noiteFelizEsItinerary,
} from "./ItineraryData";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { aquaticEn } from "src/data/categories/aquaticc/AquaticcEn";
import { aquaticEs } from "src/data/categories/aquaticc/AquaticcEs";
import { aquaticPt } from "src/data/categories/aquaticc/AquaticcPt";
import { cavesEn } from "src/data/categories/cavess/CavessEn";
import { cavesEs } from "src/data/categories/cavess/CavessEs";
import { cavesPt } from "src/data/categories/cavess/CavessPt";
import { ecotourismEn } from "src/data/categories/ecotourismm/EcotourismmEn";
import { ecotourismEs } from "src/data/categories/ecotourismm/EcotourismmEs";
import { ecotourismPt } from "src/data/categories/ecotourismm/EcotourismmPt";
import { bonitoSerraBodoquenaEn } from "src/data/regions/bonito/BonitoSerraBodoquenaEn";
import { bonitoSerraBodoquenaEs } from "src/data/regions/bonito/BonitoSerraBodoquenaEs";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras-em-bonito/img3.webp`

const uuid = uid();

export const noiteFelizPt: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Noite Feliz em Bonito",
  subtitle:
    "Este roteiro é ideal para quem tem pouco tempo, mas quer conhecer as maravilhas de Bonito MS.",
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

// EN-US
export const noiteFelizEn: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Happy Night in Bonito",
  subtitle:
    "This itinerary is ideal for those who have little time but want to experience the wonders of Bonito MS.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: noiteFelizEnItinerary,
  included: [
    "2 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Lunch on the snorkeling day",
    "Airport assistance",
  ],
  notIncluded: ["Drinks", "Dinners", "Airfare", "Personal expenses"],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for the cave)",
    "Repellent and sunscreen",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn],
  packageRecommendedFor: [familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn
};

// ES
export const noiteFelizEs: TourPackage = {
  id: uuid,
  slug: 'noite-feliz-em-bonito',
  image: img,
  title: "01 Noche Feliz en Bonito",
  subtitle:
    "Este itinerario es ideal para quienes tienen poco tiempo, pero quieren conocer las maravillas de Bonito MS.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  itinerary: noiteFelizEsItinerary,
  included: [
    "2 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Almuerzo el día de la flotación",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Cenas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para la gruta)",
    "Repelente y protector solar",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs],
  packageRecommendedFor: [familiesEs, couplesEs],
  region: bonitoSerraBodoquenaEs
};
