import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  familiaFelizPtItinerary,
  familiaFelizEnItinerary,
  familiaFelizEsItinerary,
} from "./ItineraryData";
import { aquaticPt, aquaticEn, aquaticEs } from "src/data/categories/Aquaticc";
import { cavesPt, cavesEn, cavesEs } from "src/data/categories/Cavess";
import {
  ecotourismPt,
  ecotourismEn,
  ecotourismEs,
} from "src/data/categories/Ecotourismm";
import {
  familiesPt,
  familiesEn,
  familiesEs,
} from "src/data/audiences/Families";
import { couplesPt, couplesEn, couplesEs } from "src/data/audiences/Couples";
import image from "src/assets/images/packages/familia-feliz.png";
import { bonitoSerraBodoquenaEn, bonitoSerraBodoquenaEs, bonitoSerraBodoquenaPt } from "src/data/regions/Regions";

const uuid = uid();

// PT-BR
export const familiaFelizPt: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: image,
  title: "Tour Família Feliz",
  subtitle:
    "Um roteiro completo de 4 dias, ideal para famílias, combinando os melhores passeios de Bonito.",
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

// EN-US
export const familiaFelizEn: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: image,
  title: "Happy Family Tour",
  subtitle:
    "A complete 4-day itinerary, ideal for families, combining the best tours in Bonito.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: familiaFelizEnItinerary,
  included: [
    "3 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Meals included as per itinerary",
    "Airport assistance",
  ],
  notIncluded: [
    "Drinks",
    "Unmentioned dinners",
    "Airfare",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for the cave)",
    "Repellent and sunscreen",
    "Cap or hat",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn],
  packageRecommendedFor: [familiesEn, couplesEn],
  region: bonitoSerraBodoquenaEn
};

// ES
export const familiaFelizEs: TourPackage = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: image,
  title: "Tour Familia Feliz",
  subtitle:
    "Un itinerario completo de 4 días, ideal para familias, que combina los mejores tours de Bonito.",
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  itinerary: familiaFelizEsItinerary,
  included: [
    "3 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Comidas incluidas según itinerario",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Cenas no mencionadas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para la gruta)",
    "Repelente y protector solar",
    "Gorra o sombrero",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs],
  packageRecommendedFor: [familiesEs, couplesEs],
  region: bonitoSerraBodoquenaEs
};
