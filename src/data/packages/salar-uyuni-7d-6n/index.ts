import { uid } from "quasar";
import { type TourPackage } from "src/model/TourPackage";
import { TOURS_BUCKET_NAME } from "src/utils/environmentUtils";
import { groupsPt, groupsEn, groupsEs } from "src/data/audiences/groups";
import { seniorsPt, seniorsEn, seniorsEs } from "src/data/audiences/seniors";
import { familiesPt, familiesEn, familiesEs } from "src/data/audiences/families";
import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";
import { contemplationPt, contemplationEn, contemplationEs } from "src/data/categories/contemplation";
import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
import { boliviaPt, boliviaEn, boliviaEs } from "src/data/regions/bolivia";
import { salarUyuniPtItinerary, salarUyuniEnItinerary, salarUyuniEsItinerary } from './itinerary-data';

const uuid = uid();
const img = `${TOURS_BUCKET_NAME}/salar-uyuni/img1.webp`;

const commonData = {
  id: uuid,
  slug: 'salar-uyuni-7d',
  image: img,
  durationInDays: 7,
  durationInNights: 6,
  minPeople: 2,
};

export const salarUyuniPt: TourPackage = {
  ...commonData,
  packageCategories: [adventurePt, contemplationPt, trailsWaterfallsPt],
  packageRecommendedFor: [groupsPt, familiesPt, seniorsPt],
  region: boliviaPt,
  title: "Salar de Uyuni — Espetáculo Natural",
  subtitle: "7 dias explorando o maior deserto de sal do mundo, lagunas coloridas e cidades históricas da Bolívia.",
  description: [
    `Um roteiro inesquecível que parte de Corumbá (BR) e atravessa a fronteira até o coração da Bolívia. Em 7 dias, você vai percorrer o lendário Salar de Uyuni, contemplar lagunas de cores únicas, conhecer geiseres, águas termais e as cidades históricas de Sucre e Potosí. Vagas limitadas a 10 passageiros.`
  ],
  itinerary: salarUyuniPtItinerary,
  included: [
    "Passagem aérea: Santa Cruz → Sucre (ida e volta)",
    "Passagem terrestre: Corumbá / Santa Cruz / Sucre / Potosí / Salar de Uyuni (ida e volta)",
    "Hotel com quarto compartilhado duplo, single ou matrimonial",
    "Tour de 3 dias no Salar de Uyuni com refeições incluídas",
    "Transporte para todos os lugares a serem visitados",
    "Café da manhã no hotel",
  ],
  notIncluded: [
    "Qualquer coisa não especificada neste pacote",
  ],
  shouldIBring: [
    "Roupas quentes (casaco, calça térmica)",
    "Edredom",
    "Óculos escuros",
    "Sapatos confortáveis ou botas",
  ],
  observation: "Tarifas por passageiro em reais, sujeitas a modificação por variação de mais de 10 pontos da cotação do dólar. A ordem das viagens pode variar conforme condições climáticas. Se estiver viajando com crianças, tenha em mente que muitos lugares não são exclusivos para elas. Contato: TURPANBOL | Tel: +55 67 3231-3630 | WhatsApp: +55 67 984477003 | turpanbol@gmail.com"
};

export const salarUyuniEn: TourPackage = {
  ...commonData,
  packageCategories: [adventureEn, contemplationEn, trailsWaterfallsEn],
  packageRecommendedFor: [groupsEn, familiesEn, seniorsEn],
  region: boliviaEn,
  title: "Uyuni Salt Flat — Natural Spectacle",
  subtitle: "7 days exploring the world's largest salt desert, colorful lagoons, and Bolivia's historic cities.",
  description: [
    `An unforgettable itinerary departing from Corumbá (BR) and crossing the border into the heart of Bolivia. Over 7 days, you will journey across the legendary Uyuni Salt Flat, admire uniquely colored lagoons, discover geysers, hot springs, and the historic cities of Sucre and Potosí. Limited to 10 passengers.`
  ],
  itinerary: salarUyuniEnItinerary,
  included: [
    "Airfare: Santa Cruz → Sucre (round trip)",
    "Overland transport: Corumbá / Santa Cruz / Sucre / Potosí / Uyuni Salt Flat (round trip)",
    "Hotel with shared double, single, or matrimonial room",
    "3-day tour of the Uyuni Salt Flat with meals included",
    "Transport to all places to be visited",
    "Breakfast at the hotel",
  ],
  notIncluded: [
    "Anything not specified in this package",
  ],
  shouldIBring: [
    "Warm clothing (jacket, thermal pants)",
    "Comforter",
    "Sunglasses",
    "Comfortable shoes or boots",
  ],
  observation: "Rates per passenger in Brazilian Reais, subject to change if the USD exchange rate varies by more than 10 points. The travel order may vary due to weather conditions. If traveling with children, keep in mind that many places are not child-exclusive. Contact: TURPANBOL | Phone: +55 67 3231-3630 | WhatsApp: +55 67 984477003 | turpanbol@gmail.com"
};

export const salarUyuniEs: TourPackage = {
  ...commonData,
  packageCategories: [adventureEs, contemplationEs, trailsWaterfallsEs],
  packageRecommendedFor: [groupsEs, familiesEs, seniorsEs],
  region: boliviaEs,
  title: "Salar de Uyuni — Espectáculo Natural",
  subtitle: "7 días explorando el mayor desierto de sal del mundo, lagunas de colores y ciudades históricas de Bolivia.",
  description: [
    `Un itinerario inolvidable que parte de Corumbá (BR) y cruza la frontera hacia el corazón de Bolivia. En 7 días, recorrerás el legendario Salar de Uyuni, contemplarás lagunas de colores únicos, géiseres, aguas termales y las históricas ciudades de Sucre y Potosí. Cupos limitados a 10 pasajeros.`
  ],
  itinerary: salarUyuniEsItinerary,
  included: [
    "Pasaje aéreo: Santa Cruz → Sucre (ida y vuelta)",
    "Pasaje terrestre: Corumbá / Santa Cruz / Sucre / Potosí / Salar de Uyuni (ida y vuelta)",
    "Hotel con habitación compartida doble, individual o matrimonial",
    "Tour de 3 días en el Salar de Uyuni con comidas incluidas",
    "Transporte a todos los lugares a visitar",
    "Desayuno en el hotel",
  ],
  notIncluded: [
    "Cualquier cosa no especificada en este paquete",
  ],
  shouldIBring: [
    "Ropa abrigada (campera, pantalón térmico)",
    "Edredón",
    "Anteojos de sol",
    "Calzado cómodo o botas",
  ],
  observation: "Tarifas por pasajero en reales brasileños, sujetas a modificación si la cotización del dólar varía más de 10 puntos. El orden de los viajes puede variar según las condiciones climáticas. Si viaja con niños, tenga en cuenta que muchos lugares no son exclusivos para ellos. Contacto: TURPANBOL | Tel: +55 67 3231-3630 | WhatsApp: +55 67 984477003 | turpanbol@gmail.com"
};
