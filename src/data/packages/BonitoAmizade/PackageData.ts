import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  bonitoAmizadePtItinerary,
  bonitoAmizadeEnItinerary,
  bonitoAmizadeEsItinerary,
} from "./ItineraryData";
import { aquaticPt, aquaticEn, aquaticEs } from "src/data/categories/Aquaticc";
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
} from "src/data/categories/Adventuree";
import {
  familiesPt,
  familiesEn,
  familiesEs,
} from "src/data/audiences/Families";
import { couplesPt, couplesEn, couplesEs } from "src/data/audiences/Couples";
import { groupsPt, groupsEn, groupsEs } from "src/data/audiences/Groups";
import image from "src/assets/images/packages/bonito-amizade.png";

const uuid = uid();

// PT-BR
export const bonitoAmizadePt: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: image,
  title: "Tour Bonito Amizade",
  subtitle:
    "Um roteiro de 5 dias cheio de aventura e natureza, perfeito para grupos de amigos.",
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
};

// EN-US
export const bonitoAmizadeEn: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: image,
  title: "Bonito Friendship Tour",
  subtitle:
    "A 5-day itinerary full of adventure and nature, perfect for groups of friends.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  itinerary: bonitoAmizadeEnItinerary,
  included: [
    "4 nights accommodation with breakfast",
    "Shared transport Campo Grande/Bonito/Campo Grande",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Meals included as per itinerary",
    "Airport assistance",
  ],
  notIncluded: [
    "Drinks",
    "Lunch on the 2nd day",
    "Dinners",
    "Airfare",
    "Personal expenses",
  ],
  shouldIBring: [
    "Swimsuit and towel",
    "Sneakers (mandatory for cave/trails)",
    "Repellent and sunscreen",
    "Camera",
  ],
  observation:
    "Tour subject to change depending on weather conditions and availability.",
  packageCategories: [ecotourismEn, aquaticEn, cavesEn, adventureEn],
  packageRecommendedFor: [groupsEn, familiesEn, couplesEn],
};

// ES
export const bonitoAmizadeEs: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: image,
  title: "Tour Bonito Amistad",
  subtitle:
    "Un itinerario de 5 días lleno de aventura y naturaleza, perfecto para grupos de amigos.",
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  itinerary: bonitoAmizadeEsItinerary,
  included: [
    "4 noches de alojamiento con desayuno",
    "Transporte compartido Campo Grande/Bonito/Campo Grande",
    "Transporte privado para los tours",
    "Entradas para los tours mencionados",
    "Comidas incluidas según itinerario",
    "Asistencia en el aeropuerto",
  ],
  notIncluded: [
    "Bebidas",
    "Almuerzo del 2º día",
    "Cenas",
    "Billetes de avión",
    "Gastos de carácter personal",
  ],
  shouldIBring: [
    "Bañador y toalla",
    "Zapatillas deportivas (obligatorias para gruta/senderos)",
    "Repelente y protector solar",
    "Cámara fotográfica",
  ],
  observation:
    "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad.",
  packageCategories: [ecotourismEs, aquaticEs, cavesEs, adventureEs],
  packageRecommendedFor: [groupsEs, familiesEs, couplesEs],
};
