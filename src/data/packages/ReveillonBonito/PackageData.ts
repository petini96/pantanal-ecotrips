import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import {
  reveillonBonitoPtItinerary,
  reveillonBonitoEnItinerary,
  reveillonBonitoEsItinerary,
} from "./ItineraryData";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
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
import { bonitoSerraBodoquenaEs } from "src/data/regions/bonito/BonitoSerraBodoquenaEs";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito/BonitoSerraBodoquenaPt";

const uuid = uid();

// PT-BR
export const reveillonBonitoPt: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
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
  region: bonitoSerraBodoquenaPt
};

// EN-US
export const reveillonBonitoEn: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
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
  region: bonitoSerraBodoquenaEn
};

// ES
export const reveillonBonitoEs: TourPackage = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
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
  region: bonitoSerraBodoquenaEs
};
