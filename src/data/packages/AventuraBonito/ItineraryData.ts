import { type ItineraryItem } from "src/model/ItineraryItem";
import {
  rioDaPrataPt,
  rioDaPrataEn,
  rioDaPrataEs,
} from "src/data/tours/RioDaPrata";
import {
  grutaLagoAzulPt,
  grutaLagoAzulEn,
  grutaLagoAzulEs,
} from "src/data/tours/GrutaLagoAzul";

export const aventuraBonitoPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "Chegada em Bonito e Gruta Azul",
    descriptionItems: [
      "Receptivo no aeroporto de Bonito (BYO) e transfer para o hotel.",
      "Check-in e saída para a Gruta do Lago Azul.",
    ],
    tours: [grutaLagoAzulPt],
  },
  {
    day: 2,
    title: "Flutuação e Natureza",
    descriptionItems: ["Café da manhã e saída para flutuação no Rio da Prata."],
    tours: [rioDaPrataPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "Despedida",
    descriptionItems: [
      "Café da manhã no hotel.",
      "Em horário combinado, transfer para o aeroporto de Bonito.",
    ],
    tours: [],
  },
];

export const aventuraBonitoEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "Arrival in Bonito & Blue Lake Cave",
    descriptionItems: [
      "Reception at Bonito Airport (BYO) and transfer to the hotel.",
      "Check-in and departure for the Blue Lake Cave.",
    ],
    tours: [grutaLagoAzulEn],
  },
  {
    day: 2,
    title: "Snorkeling and Nature",
    descriptionItems: [
      "Breakfast and departure for snorkeling at Rio da Prata.",
    ],
    tours: [rioDaPrataEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "Departure",
    descriptionItems: [
      "Breakfast at the hotel.",
      "At the scheduled time, transfer to Bonito Airport.",
    ],
    tours: [],
  },
];

export const aventuraBonitoEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "Llegada a Bonito y Gruta Azul",
    descriptionItems: [
      "Recepción en el aeropuerto de Bonito (BYO) y traslado al hotel.",
      "Check-in y salida hacia la Gruta del Lago Azul.",
    ],
    tours: [grutaLagoAzulEs],
  },
  {
    day: 2,
    title: "Flotación y Naturaleza",
    descriptionItems: [
      "Desayuno y salida para la flotación en el Río da Prata.",
    ],
    tours: [rioDaPrataEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "Despedida",
    descriptionItems: [
      "Desayuno en el hotel.",
      "A la hora programada, traslado al aeropuerto de Bonito.",
    ],
    tours: [],
  },
];
