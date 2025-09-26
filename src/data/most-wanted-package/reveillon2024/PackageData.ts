import { UNLIMITED_PLACES } from "src/model/Duration";
import { type MostWantedPackage } from "src/model/MostWantedPackage";
import { reveillon2024EnItineraryItems, reveillon2024EsItineraryItems, reveillon2024PtItineraryItems } from "./ItineraryData";
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

const uuid: string = uid();

import imageTour1 from "src/assets/images/packages/gruta-lagoa-azul.png";

export const reveillon2024Pt = {
  id: uuid,
  image: imageTour1,
  title: "Reveillon 2024",
  subtitle:
    "Pacote inesquecível para pessoas que desejam virar a noite em um local mágico, cheio de atrações e passeios.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 4,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: reveillon2024PtItineraryItems,
  included: [
    "Pacote de réveillon 04 noites de hospedagem em apartamento standard.",
    "Diárias com café da manhã.",
    "Passeios listados com as referidas refeições inclusas.",
    "Transporte  privativo entre Campo Grande/Bonito/Campo Grande.",
    "Transporte privativo até os passeios em Bonito.",
    "Assistência no aeroporto de Campo Grande.",
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
    "Este pacote está sujeito à disponibilidade e alterações sem aviso prévio. Boa parte dos atrativos dispõe de infra-estrutura como Restaurante/Lanchonete, Vestuários e Banheiros.",
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
  rules: [
    "Uso obrigatório de tênis (ou similar) em passeios como Gruta",
    "Arvorismo",
    "Rapel",
    "É restrito o uso do protetor solar e repelente (ou similares) nos passeios de Flutuação",
  ],
  cancellation: [
    "Em caso de cancelamento em até 30 dias antes do check-in, não haverá devolução dos 30% ou 50% do depósito do sinal; até 15 dias antes do check-in a data da viagem pode ser alterada",
    "Será cobrado No - Show integral do pacote em caso de não comparecimento na data reservad",
    "Para efetuar a reserva nós precisamos dos nomes completos, a data e horários exatos de chegada e saída de Campo Grande.",
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


// ENGLISH VERISON 

export const reveillon2024En = {
  id: uuid,
  image: imageTour1,
  title: "New Year's Eve 2024",
  subtitle:
    "An unforgettable package for those who wish to celebrate the new year in a magical place, full of attractions and tours.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 4,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: reveillon2024EnItineraryItems,
  included: [
    "New Year's package with 04 nights of accommodation in a standard apartment.",
    "Daily rates with breakfast included.",
    "Listed tours with specified meals included.",
    "Private transportation between Campo Grande/Bonito/Campo Grande.",
    "Private transportation to the tours in Bonito.",
    "Assistance at Campo Grande airport.",
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
    "This package is subject to availability and changes without prior notice. Most attractions have infrastructure such as a Restaurant/Snack Bar, Changing Rooms, and Restrooms.",
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
  rules: [
    "Mandatory use of sneakers (or similar) on tours like the Grotto",
    "Canopy Tours / Zip-lining",
    "Rappelling",
    "The use of sunscreen and repellent (or similar) is restricted on Floating tours",
  ],
  cancellation: [
    "In case of cancellation up to 30 days before check-in, the 30% or 50% deposit will not be refunded; up to 15 days before check-in, the travel date can be changed.",
    "The full package price will be charged in case of a no-show on the reserved date.",
    "To make a reservation, we need the full names, and the exact dates and times of arrival and departure from Campo Grande.",
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


// SPANISH VERISON 

export const reveillon2024Es = {
  id: uuid,
  image: imageTour1,
  title: "Nochevieja 2024",
  subtitle:
    "Un paquete inolvidable para personas que desean recibir el año nuevo en un lugar mágico, lleno de atracciones y excursiones.",
  qtdPlaces: UNLIMITED_PLACES,
  minNumberPeople: 4,
  qtdDay: 4,
  qtdNight: 4,
  itinerary: reveillon2024EsItineraryItems,
  included: [
    "Paquete de Nochevieja con 04 noches de alojamiento en habitación estándar.",
    "Tarifas diarias con desayuno incluido.",
    "Excursiones listadas con las comidas especificadas incluidas.",
    "Transporte privado entre Campo Grande/Bonito/Campo Grande.",
    "Transporte privado a las excursiones en Bonito.",
    "Asistencia en el aeropuerto de Campo Grande.",
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
    "Este paquete está sujeto a disponibilidad y cambios sin previo aviso. La mayoría de las atracciones disponen de infraestructura como Restaurante/Cafetería, Vestuarios y Baños.",
  shouldIBring: [
    "traje de baño, toalla",
    "gorra",
    "zapatillas de deporte / tenis",
    "sandalias o chanclas",
    "repelente de insectos",
    "protector solar",
    "cámara fotográfica y/o de video",
    "chanclas",
    "sandalias",
  ],
  rules: [
    "Uso obligatorio de zapatillas (o similar) en excursiones como la Gruta",
    "Arborismo / Canopy",
    "Rápel",
    "El uso de protector solar y repelente (o similares) está restringido en las excursiones de Flotación (snorkeling)",
  ],
  cancellation: [
    "En caso de cancelación hasta 30 días antes del check-in, no se devolverá el depósito del 30% o 50%; hasta 15 días antes del check-in, se puede cambiar la fecha del viaje.",
    "Se cobrará el importe íntegro del paquete en caso de no presentarse (No-Show) en la fecha reservada.",
    "Para realizar la reserva, necesitamos los nombres completos, y las fechas y horarios exactos de llegada y salida de Campo Grande.",
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