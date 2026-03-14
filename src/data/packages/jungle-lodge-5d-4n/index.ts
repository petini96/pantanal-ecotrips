import { uid } from "quasar";
import { couplesPt } from "src/data/audiences/couples";
import { groupsPt } from "src/data/audiences/groups";
import { adventurePt } from "src/data/categories/adventure";
import { floatingPt } from "src/data/categories/floating";
import { resortsPt } from "src/data/categories/resorts";
import { trailsWaterfallsPt } from "src/data/categories/trails-waterfalls";
import { pantanalPt } from "src/data/categories/pantanal";
import { pantanalSulPt } from "src/data/regions/pantanal-sul";
import { type TourPackage } from "src/model/TourPackage";
import { PACKAGE_BUCKET_NAME } from "src/utils/environmentUtils";
import { jungleLodgeEaglePtItinerary } from './itinerary-data';
import { jungleLodgeImages } from '../common-data/jungle-lodge';
import { jungleLodgeHotelPt } from "src/data/hotels/jungle-lodge";
import { jungleLodgeEagleEnItinerary } from './itinerary-data';
import { jungleLodgeEagleEsItinerary } from './itinerary-data';

// --- COMMON DATA (PT-BR) ---
const commonIncludedPt = [
  "Hospedagem (conforme selecionado)",
  "Pensão completa no Pantanal (café da manhã, almoço, jantar)",
  "Guia bilíngue",
  "Todas as atividades mencionadas no roteiro",
  // "Transporte compartilhado Campo Grande/Pantanal/Campo Grande",
  "Assistência da equipe Pantanal Eco Trips",
];
const commonNotIncludedPt = [
  "Bebidas",
  "Ligações telefônicas e lavanderia",
  "Refeições durante o translado",
  "Transporte Privativo (consulte-nos)",
  "Passagens Aéreas",
  "Despesas de caráter pessoal",
];
const commonShouldIBringPt = [
  "Roupa de banho e toalha",
  "Boné ou chapéu",
  "Tênis ou bota (obrigatório para trilhas/safári)",
  "Repelente e protetor solar",
  "Roupas confortáveis",
  "Câmera fotográfica",
  "Bom humor e um coração feliz para sentir a magia da natureza.",
];
const commonObservationPt =
  "A ordem das atividades pode ser alterada conforme as condições climáticas e operacionais. A chegada em Campo Grande no último dia é por volta das 19:00. Não reserve voos ou ônibus que partam antes das 21:00.";
const img = `${PACKAGE_BUCKET_NAME}/jungle-lodge-otter/img1.webp`
// --- EAGLE PACKAGE (5D/4N) ---
const uuidEagle = uid();
// --- COMMON DATA (EN-US) ---
const commonIncludedEn = [
  "Accommodation (as selected)",
  "Full board in the Pantanal (breakfast, lunch, dinner)",
  "Bilingual guide",
  "All activities mentioned in the itinerary",
  // "Shared transport Campo Grande/Pantanal/Campo Grande",
  "Assistance from the Pantanal Eco Trips team",
];
const commonNotIncludedEn = [
  "Drinks",
  "Phone calls and laundry",
  "Meals during the transfer",
  "Private Transportation (check with us)",
  "Airfare",
  "Personal expenses",
];
const commonShouldIBringEn = [
  "Swimsuit and towel",
  "Cap or hat",
  "Sneakers or boots (mandatory for trails/safari)",
  "Repellent and sunscreen",
  "Comfortable clothes",
  "Camera",
  "Good spirit and a happy heart to feel the magic of nature.",
];
const commonObservationEn =
  "The order of activities may be changed depending on weather and operational conditions. Arrival in Campo Grande on the last day is around 7:00 PM. Do not book flights or buses departing before 9:00 PM.";
// --- COMMON DATA (ES) ---
const commonIncludedEs = [
  "Alojamiento (según seleccionado)",
  "Pensión completa en el Pantanal (desayuno, almuerzo, cena)",
  "Guía bilingüe",
  "Todas las actividades mencionadas en el itinerario",
  // "Transporte compartido Campo Grande/Pantanal/Campo Grande",
  "Asistencia del equipo de Pantanal Eco Trips",
];
const commonNotIncludedEs = [
  "Bebidas",
  "Llamadas telefónicas y lavandería",
  "Comidas durante el traslado",
  "Transporte Privado (consúltenos)",
  "Billetes de avión",
  "Gastos personales",
];
const commonShouldIBringEs = [
  "Bañador y toalla",
  "Gorra o sombrero",
  "Zapatillas deportivas o botas (obligatorio para senderos/safari)",
  "Repelente y protector solar",
  "Ropa cómoda",
  "Cámara fotográfica",
  "Buen humor y un corazón feliz para sentir la magia de la naturaleza.",
];
const commonObservationEs =
  "El orden de las actividades puede cambiar según las condiciones climáticas y operativas. La llegada a Campo Grande el último día es alrededor de las 19:00. No reserve vuelos o autobuses que salgan antes de las 21:00.";

const commonData = {
  id: uuidEagle,
  slug: "jungle-lodge-eagle",
  image: img,
  durationInDays: 5,
  durationInNights: 4,
  minPeople: 1,
  packageCategories: [trailsWaterfallsPt, pantanalPt, floatingPt, resortsPt, adventurePt],
  packageRecommendedFor: [groupsPt, couplesPt],
  region: pantanalSulPt,
  galleryImages: jungleLodgeImages,
  hotels: [jungleLodgeHotelPt]
};

export const jungleLodgeEaglePt: TourPackage = {
    ...commonData,
    title: "Jungle Lodge - Pacote Águia",
    subtitle: "A experiência definitiva de 5 dias, incluindo uma noite de acampamento na selva.",
    description: [
        `O Jungle Lodge está localizado na Estrada Parque do Pantanal Sul, a 7 quilômetros do acesso principal, na estação Buraco das Piranhas, em uma região conhecida como Passo do Lontra.`,
        `A estrutura do hotel é uma construção em madeira sobre palafitas situada próxima à margem do Rio Miranda, perfeitamente adaptada ao ciclo típico do ecossistema conhecido como "cheia" (ou estação das águas), onde o nível da água sobe e cobre grande parte do terreno, revelando paisagens fantásticas.`,
        `Respeitando a vida selvagem e buscando promover um equilíbrio perfeito entre o homem e a natureza, o Pantanal Jungle Lodge oferece a melhor hospitalidade e atividades turísticas no Pantanal Sul, adicionando uma atmosfera aconchegante às suas aventuras de descoberta.`
    ],
    itinerary: jungleLodgeEaglePtItinerary,
    included: commonIncludedPt,
    notIncluded: commonNotIncludedPt,
    shouldIBring: commonShouldIBringPt,
    observation: commonObservationPt
};

export const jungleLodgeEagleEn: TourPackage = {
    ...commonData,
    title: "Jungle Lodge - Eagle Package",
    subtitle: "The definitive 5-day experience, including a night of camping in the jungle.",
    description: [
        `Jungle Lodge is located on the park road of Southern Pantanal, 7 kilometres from the main access road, station Buraco Das Piranhas, in a region named  as Passo Do Lontra.`,
        `The hotel structure is a wooden construction on stilts situated near the bank of the Miranda River, perfect to adapt with the typical ecosystem event called "water season" where the water level rises and covers a large part of the land revealing fantastic landscape views.`,
        `Respecting the wildlife and seeking to promote a perfect balance between man and nature, the Pantanal Jungle Lodge offers the best hospitality and tourist activities in Southern Pantanal, adding a cozy atmosphere to your discovery adventures.`
    ],
    itinerary: jungleLodgeEagleEnItinerary,
    included: commonIncludedEn,
    notIncluded: commonNotIncludedEn,
    shouldIBring: commonShouldIBringEn,
    observation: commonObservationEn
};

export const jungleLodgeEagleEs: TourPackage = {
    ...commonData,
    title: "Jungle Lodge - Paquete Águila",
    subtitle: "La experiencia definitiva de 5 días, incluyendo una noche de campamento en la selva.",
    description: [
        `El Jungle Lodge está ubicado en la Estrada Parque del Pantanal Sur, a 7 kilómetros del acceso principal, en la estación Buraco das Piranhas, en la región conocida como Passo do Lontra.`,
        `La estructura del hotel es una construcción de madera sobre pilotes situada cerca de la orilla del río Miranda, perfecta para adaptarse al ciclo típico del ecosistema llamado "temporada de aguas", donde el nivel del agua sube y cubre gran parte de la tierra, revelando paisajes fantásticos.`,
        `Respetando la vida silvestre y buscando promover un equilibrio perfecto entre el hombre y la naturaleza, el Pantanal Jungle Lodge ofrece la mejor hospitalidad y actividades turísticas en el Pantanal Sur, añadiendo un ambiente acogedor a sus aventuras de descubrimiento.`
    ],
    itinerary: jungleLodgeEagleEsItinerary,
    included: commonIncludedEs,
    notIncluded: commonNotIncludedEs,
    shouldIBring: commonShouldIBringEs,
    observation: commonObservationEs
};
