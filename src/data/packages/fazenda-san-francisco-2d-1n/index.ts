import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples";
import { familiesPt } from "src/data/audiences/families";
import { aquaticPt } from "src/data/categories/aquaticc";
import { ecotourismPt } from "src/data/categories/ecotourismm";
import { pantanalSulPt } from "src/data/regions/pantanal-sul";
import { type TourPackage } from "src/model/TourPackage";
import { fazendaCoatiPtItinerary } from './itinerary-data';
import { descriptionSanFranciscoPt } from '../common-data/san-francisco/pt/description';
import { imgSanFrancisco, sanFranciscoImages } from '../common-data/san-francisco';
import { sanFranciscoHotelPt } from "src/data/hotels/san-francisco";
import { fazendaCoatiEnItinerary } from './itinerary-data';
import { descriptionSanFranciscoEn } from '../common-data/san-francisco/en/description';
import { fazendaCoatiEsItinerary } from './itinerary-data';
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
const uuidCoati = uid();
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
  id: uuidCoati,
  slug: "fazenda-san-francisco-coati",
  image: imgSanFrancisco,
  durationInDays: 2,
  durationInNights: 1,
  minPeople: 1,
  packageCategories: [ecotourismPt, aquaticPt],
  packageRecommendedFor: [couplesPt, familiesPt],
  region: pantanalSulPt,
  galleryImages: sanFranciscoImages,
  hotels: [sanFranciscoHotelPt]
};

export const fazendaCoatiPt: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Tour Coati",
    subtitle: "Uma imersão rápida e intensa de 2 dias na vida selvagem do Pantanal.",
    description: descriptionSanFranciscoPt,
    itinerary: fazendaCoatiPtItinerary,
    included: commonIncludedPt,
    notIncluded: commonNotIncludedPt,
    shouldIBring: commonShouldIBringPt,
    observation: commonObservationPt
};

export const fazendaCoatiEn: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Coati Tour",
    subtitle: "A quick and intense 2-day immersion into the Pantanal wildlife.",
    description: descriptionSanFranciscoEn,
    itinerary: fazendaCoatiEnItinerary,
    included: commonIncludedEn,
    notIncluded: commonNotIncludedEn,
    shouldIBring: commonShouldIBringEn,
    observation: commonObservationEn
};

// --- FAZENDA COATI PACKAGE (2D/1N) ---
export const fazendaCoatiEs: TourPackage = {
    ...commonData,
    title: "Fazenda San Francisco - Tour Coatí",
    subtitle: "Una inmersión rápida e intensa de 2 días en la vida salvaje del Pantanal.",
    description: descriptionSanFranciscoEs,
    itinerary: fazendaCoatiEsItinerary,
    included: commonIncludedEs,
    notIncluded: commonNotIncludedEs,
    shouldIBring: commonShouldIBringEs,
    observation: commonObservationEs
};
