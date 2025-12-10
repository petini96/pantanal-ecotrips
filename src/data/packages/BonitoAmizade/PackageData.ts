import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  bonitoAmizadePtItinerary,
  bonitoAmizadeEnItinerary,
  bonitoAmizadeEsItinerary,
} from "./ItineraryData";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesEn } from "src/data/audiences/couples/CouplesEn";
import { couplesEs } from "src/data/audiences/couples/CouplesEs";
import { couplesPt } from "src/data/audiences/couples/CouplesPt";
import { familiesEn } from "src/data/audiences/families/FamiliesEn";
import { familiesEs } from "src/data/audiences/families/FamiliesEs";
import { familiesPt } from "src/data/audiences/families/FamiliesPt";
import { groupsEn } from "src/data/audiences/groups/GroupsEn";
import { groupsEs } from "src/data/audiences/groups/GroupsEs";
import { groupsPt } from "src/data/audiences/groups/GroupsPt";
import { adventureEn } from "src/data/categories/adventuree/AdventureeEn";
import { adventureEs } from "src/data/categories/adventuree/AdventureeEs";
import { adventurePt } from "src/data/categories/adventuree/AdventureePt";
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
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";

const uuid = uid();

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const bonitoAmizadePt: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
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
  region: bonitoSerraBodoquenaPt,
};

export const bonitoAmizadeEn: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
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
  region: bonitoSerraBodoquenaEn,
};

export const bonitoAmizadeEs: TourPackage = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
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
  region: bonitoSerraBodoquenaPt,
};
