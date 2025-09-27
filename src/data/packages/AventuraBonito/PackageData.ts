import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  aventuraBonitoPtItinerary,
  aventuraBonitoEnItinerary,
  aventuraBonitoEsItinerary,
} from "./ItineraryData";
import { aquaticPt, aquaticEn, aquaticEs } from "src/data/categories/Aquatic";
import { cavesPt, cavesEn, cavesEs } from "src/data/categories/Caves";
import {
  familiesPt,
  familiesEn,
  familiesEs,
} from "src/data/audiences/Families";
import { couplesPt, couplesEn, couplesEs } from "src/data/audiences/Couples";
import image from "src/assets/images/packages/gruta-lagoa-azul.png";

const uuid = uid();

export const aventuraBonitoPt: TourPackage = {
  id: uuid,
  image: image,
  title: "Essencial de Bonito: Gruta e Flutuação",
  subtitle:
    "Combine a mística Gruta do Lago Azul com a flutuação cristalina do Rio da Prata.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 2,
  itinerary: aventuraBonitoPtItinerary,
  included: [
    "2 noites de hospedagem com café da manhã",
    "Transporte privativo para os passeios",
    "Ingressos para os passeios listados",
    "Almoço no Rio da Prata",
    "Transfer In/Out Aeroporto de Bonito (BYO)",
  ],
  notIncluded: ["Bebidas", "Jantares", "Passagens Aéreas"],
  shouldIBring: [
    "Protetor solar e repelente",
    "Roupas de banho e toalha",
    "Tênis para trilhas",
    "Câmera fotográfica",
    "Dinheiro para despesas extras",
  ],
  packageCategories: [cavesPt, aquaticPt],
  packageRecommendedFor: [familiesPt, couplesPt],
};

export const aventuraBonitoEn: TourPackage = {
  id: uuid,
  image: image,
  title: "Bonito Essentials: Cave & Snorkeling",
  subtitle:
    "Combine the mystical Blue Lake Cave with the crystal-clear snorkeling of the Rio da Prata.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 2,
  itinerary: aventuraBonitoEnItinerary,
  included: [
    "2 nights accommodation with breakfast",
    "Private transport for tours",
    "Tickets for the listed tours",
    "Lunch at Rio da Prata",
    "Transfer In/Out Bonito Airport (BYO)",
  ],
  notIncluded: ["Drinks", "Dinners", "Airfare"],
  shouldIBring: [
    "Sunscreen and repellent",
    "Swimsuit and towel",
    "Hiking shoes",
    "Camera",
    "Cash for extra expenses",
  ],
  packageCategories: [cavesEn, aquaticEn],
  packageRecommendedFor: [familiesEn, couplesEn],
};

export const aventuraBonitoEs: TourPackage = {
  id: uuid,
  image: image,
  title: "Esencial de Bonito: Gruta y Flotación",
  subtitle:
    "Combina la mística Gruta del Lago Azul con la flotación cristalina del Río da Prata.",
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 2,
  itinerary: aventuraBonitoEsItinerary,
  included: [
    "2 noches de alojamiento con desayuno",
    "Transporte privado para los tours",
    "Entradas para los tours listados",
    "Almuerzo en el Río da Prata",
    "Traslado In/Out Aeropuerto de Bonito (BYO)",
  ],
  notIncluded: ["Bebidas", "Cenas", "Billetes de avión"],
  shouldIBring: [
    "Protector solar y repelente",
    "Traje de baño y toalla",
    "Zapatillas de trekking",
    "Cámara fotográfica",
    "Dinero para gastos extras",
  ],
  packageCategories: [cavesEs, aquaticEs],
  packageRecommendedFor: [familiesEs, couplesEs],
};
