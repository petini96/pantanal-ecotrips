import { UNLIMITED_PLACES } from "src/model/Duration";
import { type MostWantedPackage } from "src/model/MostWantedPackage";
import { noiteFelizEnItineraryItems, noiteFelizEsItineraryItems, noiteFelizPtItineraryItems } from "./ItineraryData";
import { familiesEn, familiesEs, familiesPt } from "src/data/recommended-for/families";
import { groupsEn, groupsEs, groupsPt } from "src/data/recommended-for/groups";
import { studentsEn, studentsEs, studentsPt } from "src/data/recommended-for/students";
import { independentTravelersEn, independentTravelersEs, independentTravelersPt } from "src/data/recommended-for/independentTravelers";
import { photographersEn, photographersEs, photographersPt } from "src/data/recommended-for/photographers";
import { ecotourismEn, ecotourismEs, ecotourismPt } from "src/data/categories/ecotourism";
import { adventureEn, adventureEs, adventurePt } from "src/data/categories/adventure";
import { cavesEn, cavesEs, cavesPt } from "src/data/categories/caves";
import { divingAndFloatingEn, divingAndFloatingEs, divingAndFloatingPt } from "src/data/categories/divingAndFloating";
import { uid } from "quasar";

import imageTour1 from "src/assets/images/packages/noite-feliz.png";

const uuid: string = uid();

export const noiteFelizPt = {
  id: uuid,
  image: imageTour1,
  title: "01 Noite Feliz",
  subtitle:
    "Este roteiro é ideal para aqueles que não tem muito tempo, mas gostariam de conhecer e aproveitar as maravilhas de Bonito MS.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 1,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: noiteFelizPtItineraryItems,
  included: [
    "02 noites de hospedagem no hotel/ em Apto Standard  ou Luxo em hotéis listados em nosso informativo ou de acordo com sua preferencia",
    "Café da manhã na diária",
    "Passeios listados com as referidas refeições inclusas",
    "Transporte regular compartilhado entre Campo Grande/Bonito/Campo Grande",
    "Transporte privativo até os passeios em Bonito",
    "ransporte privativo até os passeios em Bonito"
  ],
  notIncluded: [
    "Bebidas",
    "Telefonemas",
    "Taxas de serviço",
    "Jantares em Bonito extra de caráter pessoal",
    "O que não estiver mencionado no pacote",
    "Passagens aéreas sob consulta/ caso necessite consulte nosso pessoal",
  ],
  observation:
    "Passeio sujeito a alteração dependendo das condições climáticas",
  shouldIBring: [
    "roupa de banho, toalha",
    "boné",
    "tênis",
    "papetes ou chinelos",
    "repelente",
    "protetor solar",
    "máquina fotográfica e/ou filmadora",
    "chinelos",
    "papetes",
  ],
  packageCategory: [
    adventurePt,
    cavesPt,
    divingAndFloatingPt,
    ecotourismPt,
    photographersPt,
  ],
  packageRecommendedFor: [
    familiesPt,
    groupsPt,
    studentsPt,
    independentTravelersPt
  ],
} as MostWantedPackage;
 
//english

export const noiteFelizEn = {
  id: uuid,
  image: imageTour1,
  title: "01 Happy Night",
  subtitle:
    "This itinerary is ideal for those who don't have much time but would like to discover and enjoy the wonders of Bonito, MS.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 1,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: noiteFelizEnItineraryItems,
  included: [
    "02 nights of accommodation at the hotel / in a Standard or Luxury Apartment in hotels listed in our brochure or according to your preference",
    "Daily breakfast included",
    "Listed tours with specified meals included",
    "Shared regular transportation between Campo Grande/Bonito/Campo Grande",
    "Private transportation to the tours in Bonito",
    "Private transportation to the tours in Bonito"
  ],
  notIncluded: [
    "Beverages",
    "Phone calls",
    "Service fees",
    "Extra dinners in Bonito of a personal nature",
    "Anything not mentioned in the package",
    "Airfare available upon request / please consult our staff if needed",
  ],
  observation:
    "Tour subject to change depending on weather conditions.",
  shouldIBring: [
    "swimsuit, towel",
    "hat/cap",
    "sneakers",
    "sandals or flip-flops",
    "insect repellent",
    "sunscreen",
    "camera and/or camcorder",
    "flip-flops",
    "sandals",
  ],
  packageCategory: [
    adventureEn,
    cavesEn,
    divingAndFloatingEn,
    ecotourismEn,
    photographersEn,
  ],
  packageRecommendedFor: [
    familiesEn,
    groupsEn,
    studentsEn,
    independentTravelersEn
  ],
} as MostWantedPackage;

// spanish

export const noiteFelizEs = {
  id: uuid,
  image: imageTour1,
  title: "01 Noche Feliz",
  subtitle:
    "Este itinerario es ideal para aquellos que no tienen mucho tiempo, pero les gustaría conocer y disfrutar de las maravillas de Bonito, MS.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 1,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: noiteFelizEsItineraryItems,
  included: [
    "02 noches de alojamiento en el hotel / en Apartamento Estándar o de Lujo en hoteles listados en nuestro folleto o según su preferencia",
    "Desayuno diario incluido",
    "Excursiones listadas con las comidas especificadas incluidas",
    "Transporte regular compartido entre Campo Grande/Bonito/Campo Grande",
    "Transporte privado a las excursiones en Bonito",
    "Transporte privado a las excursiones en Bonito"
  ],
  notIncluded: [
    "Bebidas",
    "Llamadas telefónicas",
    "Tasas de servicio",
    "Cenas extras en Bonito de carácter personal",
    "Lo que no esté mencionado en el paquete",
    "Billetes de avión bajo consulta / si lo necesita, consulte a nuestro personal",
  ],
  observation:
    "Excursión sujeta a cambios dependiendo de las condiciones climáticas.",
  shouldIBring: [
    "traje de baño, toalla",
    "gorra",
    "zapatillas de deporte",
    "sandalias o chanclas",
    "repelente de insectos",
    "protector solar",
    "cámara fotográfica y/o de video",
    "chanclas",
    "sandalias",
  ],
  packageCategory: [
    adventureEs,
    cavesEs,
    divingAndFloatingEs,
    ecotourismEs,
    photographersEs,
  ],
  packageRecommendedFor: [
    familiesEs,
    groupsEs,
    studentsEs,
    independentTravelersEs
  ],
} as MostWantedPackage;