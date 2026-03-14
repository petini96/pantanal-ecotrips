import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { couplesPt } from "src/data/audiences/couples";
import { familiesPt } from "src/data/audiences/families";
import { floatingPt } from "src/data/categories/floating";
import { resortsPt } from "src/data/categories/resorts";
import { trailsWaterfallsPt } from "src/data/categories/trails-waterfalls";
import { pantanalPt } from "src/data/categories/pantanal";
import { pantanalSulPt } from "src/data/regions/pantanal-sul";
import { fazendaArarinhaPtItinerary } from './itinerary-data';
import { groupsPt } from "src/data/audiences/groups";
import { descriptionSanFranciscoPt } from '../common-data/san-francisco/pt/description';
import { imgSanFrancisco, sanFranciscoImages } from '../common-data/san-francisco';
import { sanFranciscoHotelPt } from "src/data/hotels/san-francisco";
import { fazendaArarinhaEnItinerary } from './itinerary-data';
import { descriptionSanFranciscoEn } from '../common-data/san-francisco/en/description';
import { fazendaArarinhaEsItinerary } from './itinerary-data';
import { descriptionSanFranciscoEs } from '../common-data/san-francisco/es/description';

const commonIncludedPt = [
  "Hospedagem em apartamento",
  "Pensão completa (café da manhã, almoço, jantar)",
  "Passeios descritos no roteiro",
  "Acompanhamento de guia",
  // "Transporte compartilhado Campo Grande/Fazenda/Campo Grande",
  "Assistência no aeroporto",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
  "Passeios não mencionados",
];
const commonShouldIBringPt = [
  "Roupa de banho",
  "Tênis",
  "Repelente e protetor solar",
  "Câmera fotográfica",
  "Chapéu ou boné",
  "Roupas leves e confortáveis",
];
const commonObservationPt =
  "Voos de chegada devem ser até 09:30. Voos de partida devem ser após as 21:00. A ordem dos passeios é definida pela fazenda para otimizar a logística e aproveitar as melhores condições climáticas.";
// --- FAZENDA COATI PACKAGE (2D/1N) ---
const uuidArarinha = uid();
// --- COMMON DATA (EN-US) ---
const commonIncludedEn = [
  "Apartment accommodation",
  "Full board (breakfast, lunch, dinner)",
  "Tours described in the itinerary",
  "Guide accompaniment",
  // "Shared transport Campo Grande/Farm/Campo Grande",
  "Airport assistance",
];
const commonNotIncludedEn = [
  "Drinks",
  "Airfare",
  "Personal expenses",
  "Unmentioned tours",
];
const commonShouldIBringEn = [
  "Swimsuit",
  "Sneakers",
  "Repellent and sunscreen",
  "Camera",
  "Hat or cap",
  "Light and comfortable clothing",
];
const commonObservationEn =
  "Arrival flights must be before 9:30 AM. Departure flights must be after 9:00 PM. The order of the tours is defined by the farm to optimize logistics and take advantage of the best weather conditions.";
// --- FAZENDA COATI PACKAGE (3D/2N) ---
// --- COMMON DATA (ES) ---
const commonIncludedEs = [
  "Alojamiento en apartamento",
  "Pensión completa (desayuno, almuerzo, cena)",
  "Tours descritos en el itinerario",
  "Acompañamiento de guía",
  // "Transporte compartido Campo Grande/Hacienda/Campo Grande",
  "Asistencia en el aeropuerto",
];
const commonNotIncludedEs = [
  "Bebidas",
  "Billetes de avión",
  "Gastos de carácter personal",
  "Tours no mencionados",
];
const commonShouldIBringEs = [
  "Bañador",
  "Zapatillas deportivas",
  "Repelente y protector solar",
  "Cámara fotográfica",
  "Sombrero o gorra",
  "Ropa ligera y cómoda",
];
const commonObservationEs =
  "Los vuelos de llegada deben ser antes de las 09:30. Los vuelos de salida deben ser después de las 21:00. El orden de los tours es definido por la hacienda para optimizar la logística y aprovechar las mejores condiciones climáticas.";

const commonData = {
  id: uuidArarinha,
  slug: "fazenda-san-francisco-ararinha",
  image: imgSanFrancisco,
  durationInDays: 3,
  durationInNights: 2,
  minPeople: 1,
  packageCategories: [trailsWaterfallsPt, pantanalPt, floatingPt, resortsPt],
  packageRecommendedFor: [couplesPt, familiesPt, groupsPt],
  region: pantanalSulPt,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelPt]
};

export const fazendaArarinhaPt: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Tour Ararinha",
    subtitle: "3 dias focados na observação da rica avifauna e fauna pantaneira.",
    description: descriptionSanFranciscoPt,
    itinerary: fazendaArarinhaPtItinerary,
    included: commonIncludedPt,
    notIncluded: commonNotIncludedPt,
    shouldIBring: commonShouldIBringPt,
    observation: commonObservationPt
};

export const fazendaArarinhaEn: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Macaw Tour",
    subtitle: "3 days focused on observing the rich birdlife and fauna of the Pantanal.",
    description: descriptionSanFranciscoEn,
    itinerary: fazendaArarinhaEnItinerary,
    included: commonIncludedEn,
    notIncluded: commonNotIncludedEn,
    shouldIBring: commonShouldIBringEn,
    observation: commonObservationEn
};

export const fazendaArarinhaEs: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Tour Guacamayo",
    subtitle: "3 días enfocados en la observación de la rica avifauna y fauna pantanera.",
    description: descriptionSanFranciscoEs,
    itinerary: fazendaArarinhaEsItinerary,
    included: commonIncludedEs,
    notIncluded: commonNotIncludedEs,
    shouldIBring: commonShouldIBringEs,
    observation: commonObservationEs
};
