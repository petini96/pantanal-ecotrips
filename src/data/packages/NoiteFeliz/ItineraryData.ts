import { type ItineraryItem } from "src/model/ItineraryItem";

import { buracoDasArarasEn } from "src/data/tours/buraco-das-araras/BuracoDasArarasEn";
import { buracoDasArarasEs } from "src/data/tours/buraco-das-araras/BuracoDasArarasEs";
import { buracoDasArarasPt } from "src/data/tours/buraco-das-araras/BuracoDasArarasPt";
import { grutaLagoAzulEn } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEn";
import { grutaLagoAzulEs } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEs";
import { grutaLagoAzulPt } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulPt";
import { rioDaPrataEn } from "src/data/tours/rio-da-prata/RioDaPrataEn";
import { rioDaPrataEs } from "src/data/tours/rio-da-prata/RioDaPrataEs";
import { rioDaPrataPt } from "src/data/tours/rio-da-prata/RioDaPrataPt";

export const noiteFelizPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º dia: Campo Grande - Bonito",
    descriptionItems: [
      "Receptivo no aeroporto de Campo Grande e transporte compartilhado para Bonito.",
      "Check-in no hotel e pernoite.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º Dia: Flutuação e Araras",
    descriptionItems: [
      "Dia de imersão na natureza com flutuação no Rio da Prata e contemplação no Buraco das Araras.",
    ],
    tours: [rioDaPrataPt, buracoDasArarasPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3º Dia: Gruta e Despedida",
    descriptionItems: [
      "Visita ao cartão postal de Bonito, a Gruta do Lago Azul, e em seguida, embarque para Campo Grande.",
    ],
    tours: [grutaLagoAzulPt],
  },
];

export const noiteFelizEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Campo Grande - Bonito",
    descriptionItems: [
      "Reception at Campo Grande airport and shared transfer to Bonito.",
      "Hotel check-in and overnight stay.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2nd Day: Snorkeling and Macaws",
    descriptionItems: [
      "A day of nature immersion with snorkeling at Rio da Prata and contemplation at Buraco das Araras.",
    ],
    tours: [rioDaPrataEn, buracoDasArarasEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3rd Day: Cave and Departure",
    descriptionItems: [
      "Visit to Bonito's postcard, the Blue Lake Cave, followed by departure to Campo Grande.",
    ],
    tours: [grutaLagoAzulEn],
  },
];

export const noiteFelizEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Campo Grande - Bonito",
    descriptionItems: [
      "Recepción en el aeropuerto de Campo Grande y traslado compartido a Bonito.",
      "Check-in en el hotel y noche libre.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º Día: Flotación y Guacamayos",
    descriptionItems: [
      "Día de inmersión en la naturaleza con flotación en el Río da Prata y contemplación en el Buraco das Araras.",
    ],
    tours: [rioDaPrataEs, buracoDasArarasEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3er Día: Gruta y Despedida",
    descriptionItems: [
      "Visita a la postal de Bonito, la Gruta del Lago Azul, y luego, embarque hacia Campo Grande.",
    ],
    tours: [grutaLagoAzulEs],
  },
];
