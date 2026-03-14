import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { couplesPt } from "src/data/audiences/couples";
import { familiesPt } from "src/data/audiences/families";
import { floatingPt } from "src/data/categories/floating";
import { resortsPt } from "src/data/categories/resorts";
import { contemplationPt } from "src/data/categories/contemplation";
import { trailsWaterfallsPt } from "src/data/categories/trails-waterfalls";
import { pantanalPt } from "src/data/categories/pantanal";
import { scubaDivingPt } from "src/data/categories/scuba-diving";
import { bonitoSerraBodoquenaPt } from "src/data/regions/bonito";
import { familiaFelizPtItinerary } from './itinerary-data';
import { familiaFelizEnItinerary } from './itinerary-data';
import { familiaFelizEsItinerary } from './itinerary-data';

const uuid = uid();
const img = `${PACKAGE_BUCKET_NAME}/tour-familia-feliz/img2.webp`

const commonData = {
  id: uuid,
  slug: 'tour-familia-feliz',
  image: img,
  durationInDays: 4,
  durationInNights: 3,
  minPeople: 1,
  packageCategories: [trailsWaterfallsPt, pantanalPt, floatingPt, resortsPt, contemplationPt, scubaDivingPt],
  packageRecommendedFor: [familiesPt, couplesPt],
  region: bonitoSerraBodoquenaPt
};

export const familiaFelizPt: TourPackage = {
    ...commonData,
    title: "Tour Família Feliz",
    subtitle: "Um roteiro completo de 4 dias, ideal para famílias, combinando os melhores passeios de Bonito.",
    description: [
        ``
    ],
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
    observation: "Passeio sujeito a alteração dependendo das condições climáticas e disponibilidade."
};

export const familiaFelizEn: TourPackage = {
    ...commonData,
    title: "Happy Family Tour",
    subtitle: "A complete 4-day itinerary, ideal for families, combining the best tours in Bonito.",
    description: [
        ``
    ],
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
    observation: "Tour subject to change depending on weather conditions and availability."
};

export const familiaFelizEs: TourPackage = {
    ...commonData,
    title: "Tour Familia Feliz",
    subtitle: "Un itinerario completo de 4 días, ideal para familias, que combina los mejores tours de Bonito.",
    description: [
        ``
    ],
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
    observation: "Excursión sujeta a cambios según las condiciones climáticas y la disponibilidad."
};
