import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  reveillonBonitoPtItinerary,
  reveillonBonitoEnItinerary,
  reveillonBonitoEsItinerary,
} from "./ItineraryData";
import { aquaticPt, aquaticEn, aquaticEs } from "src/data/categories/Aquatic";
import { cavesPt, cavesEn, cavesEs } from "src/data/categories/Cavess";
import {
  ecotourismPt,
  ecotourismEn,
  ecotourismEs,
} from "src/data/categories/Ecotourismm";
import {
  adventurePt,
  adventureEn,
  adventureEs,
} from "src/data/categories/Adventure"; // <-- Verifique se este import está assim
import {
  familiesPt,
  familiesEn,
  familiesEs,
} from "src/data/audiences/Families";
import { couplesPt, couplesEn, couplesEs } from "src/data/audiences/Couples";
import { groupsPt, groupsEn, groupsEs } from "src/data/audiences/Groups";
import image from "src/assets/images/packages/reveillon-bonito.png";

const uuid = uid();

// PT-BR
export const reveillonBonitoPt: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: image,
  title: "Réveillon em Bonito 2024",
  subtitle:
    "Pacote de 5 dias e 4 noites para celebrar a virada do ano em meio à natureza.",
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
};

// EN-US
export const reveillonBonitoEn: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: image,
  title: "New Year's Eve in Bonito 2024",
  subtitle:
    "A 5-day, 4-night package to celebrate the new year surrounded by nature.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  itinerary: reveillonBonitoEnItinerary,
  included: [
    "4 nights accommodation with breakfast",
    "Private transport Campo Grande/Bonito/Campo Grande",
    "Private transport for all tours",
    "Tickets for the listed tours",
    "Lunch on the snorkeling day",
    "Airport assistance",
  ],
  notIncluded: [
    "Airfare",
    "Drinks",
    "Dinners and unmentioned meals",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for cave/treetop circuit)",
    "Repellent and sunscreen",
    "Cap or hat",
    "Camera",
  ],
  observation:
    "Itinerary subject to change depending on weather conditions and availability. Limited spots.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn, adventureEn],
  packageRecommendedFor: [groupsEn, familiesEn, couplesEn],
};

// ES
export const reveillonBonitoEs: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: image,
  title: "Nochevieja en Bonito 2024",
  subtitle:
    "Paquete de 5 días y 4 noches para celebrar el año nuevo en plena naturaleza.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  itinerary: reveillonBonitoEsItinerary,
  included: [
    "4 noches de alojamiento con desayuno",
    "Transporte privado Campo Grande/Bonito/Campo Grande",
    "Transporte privado para todos los tours",
    "Entradas para los tours mencionados",
    "Almuerzo el día de la flotación",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Billetes de avión",
    "Bebidas",
    "Cenas y comidas no mencionadas",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para gruta/arborismo)",
    "Repelente y protector solar",
    "Gorra o sombrero",
    "Cámara fotográfica",
  ],
  observation:
    "Itinerario sujeto a cambios según las condiciones climáticas y la disponibilidad. Plazas limitadas.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs, adventureEs],
  packageRecommendedFor: [groupsEs, familiesEs, couplesEs],
};
