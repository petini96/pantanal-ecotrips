import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesPt } from "src/data/audiences/couples";
import { familiesPt } from "src/data/audiences/families";
import { groupsPt } from "src/data/audiences/groups";
import { adventurePt } from "src/data/categories/adventure";
import { floatingPt } from "src/data/categories/floating";
import { resortsPt } from "src/data/categories/resorts";
import { contemplationPt } from "src/data/categories/contemplation";
import { trailsWaterfallsPt } from "src/data/categories/trails-waterfalls";
import { pantanalPt } from "src/data/categories/pantanal";
import { scubaDivingPt } from "src/data/categories/scuba-diving";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito";
import { bonitoAmizadePtItinerary } from './itinerary-data';
import { bonitoAmizadeEnItinerary } from './itinerary-data';
import { bonitoAmizadeEsItinerary } from './itinerary-data';

const uuid = uid();
const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

const commonData = {
  id: uuid,
  slug: 'tour-bonito-amizade',
  image: img,
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 2,
  packageCategories: [trailsWaterfallsPt, pantanalPt, floatingPt, resortsPt, contemplationPt, adventurePt, scubaDivingPt],
  packageRecommendedFor: [groupsPt, familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};

export const bonitoAmizadePt: TourPackage = {
    ...commonData,
    title: "Tour Bonito Amizade",
    subtitle: "Um roteiro de 5 dias cheio de aventura e natureza, perfeito para grupos de amigos.",
    description: [
        ``
    ],
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
    observation: "Passeio sujeito a alteração dependendo das condições climáticas e disponibilidade."
};

export const bonitoAmizadeEn: TourPackage = {
    ...commonData,
    title: "Bonito Friendship Tour",
    subtitle: "A 5-day itinerary full of adventure and nature, perfect for groups of friends.",
    description: [
        ``
    ],
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
    observation: "Tour subject to change depending on weather conditions and availability."
};

export const bonitoAmizadeEs: TourPackage = {
    ...commonData,
    title: "Tour Bonito Amistad",
    subtitle: "Un itinerario de 5 días lleno de aventura y naturaleza, perfecto para grupos de amigos.",
    description: [
        ``
    ],
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
    observation: "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad."
};
