import { uid } from "quasar";
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
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { reveillonBonitoPtItinerary } from './itinerary-data';
import { reveillonBonitoEnItinerary } from './itinerary-data';
import { reveillonBonitoEsItinerary } from './itinerary-data';

const uuid = uid();

const commonData = {
  id: uuid,
  slug: 'reveillon-em-bonito-2024',
  image: `${PACKAGE_BUCKET_NAME}/reveillon-bonito.png`,
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 4,
  packageCategories: [trailsWaterfallsPt, pantanalPt, floatingPt, resortsPt, contemplationPt, adventurePt, scubaDivingPt],
  packageRecommendedFor: [groupsPt, familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};

// PT-BR
export const reveillonBonitoPt: TourPackage = {
    ...commonData,
    title: "Réveillon em Bonito 2024",
    subtitle: "Pacote de 5 dias e 4 noites para celebrar a virada do ano em meio à natureza.",
    description: [
        ``
    ],
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
    observation: "Roteiro sujeito a alteração dependendo das condições climáticas e disponibilidade. Vagas limitadas."
};

// EN-US
export const reveillonBonitoEn: TourPackage = {
    ...commonData,
    title: "New Year's Eve in Bonito 2024",
    subtitle: "A 5-day, 4-night package to celebrate the new year surrounded by nature.",
    description: [
        ``
    ],
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
    observation: "Itinerary subject to change depending on weather conditions and availability. Limited spots."
};

// ES
export const reveillonBonitoEs: TourPackage = {
    ...commonData,
    title: "Nochevieja en Bonito 2024",
    subtitle: "Paquete de 5 días y 4 noches para celebrar el año nuevo en plena naturaleza.",
    description: [
        ``
    ],
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
    observation: "Itinerario sujeto a cambios según las condiciones climáticas y la disponibilidad. Plazas limitadas."
};
