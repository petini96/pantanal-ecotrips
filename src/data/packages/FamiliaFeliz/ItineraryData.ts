import { type ItineraryItem } from "src/model/ItineraryItem";
import {
  rioDaPrataPt,
  rioDaPrataEn,
  rioDaPrataEs,
} from "src/data/tours/RioDaPrata";
import {
  buracoDasArarasPt,
  buracoDasArarasEn,
  buracoDasArarasEs,
} from "src/data/tours/BuracoDasAraras";
import {
  grutaLagoAzulPt,
  grutaLagoAzulEn,
  grutaLagoAzulEs,
} from "src/data/tours/GrutaLagoAzul";
import {
  estanciaMimosaPt,
  estanciaMimosaEn,
  estanciaMimosaEs,
} from "src/data/tours/EstanciaMimosa";

// PT-BR
export const familiaFelizPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º dia: Campo Grande - Bonito",
    descriptionItems: [
      "Receptivo no aeroporto e transporte compartilhado para Bonito.",
      "Check-in no hotel e pernoite.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º dia: Flutuação e Araras",
    descriptionItems: [
      "Dia de flutuação no aquário natural do Rio da Prata e contemplação das Araras Vermelhas no Buraco das Araras.",
    ],
    tours: [rioDaPrataPt, buracoDasArarasPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3º dia: Gruta e Cachoeiras",
    descriptionItems: [
      "Visita à Gruta do Lago Azul pela manhã e um banho de cachoeira na Estância Mimosa à tarde.",
    ],
    tours: [grutaLagoAzulPt, estanciaMimosaPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4º dia: Bonito - Campo Grande",
    descriptionItems: [
      "Transporte de retorno para Campo Grande em van compartilhada.",
    ],
    tours: [],
  },
];

// EN-US
export const familiaFelizEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Campo Grande - Bonito",
    descriptionItems: [
      "Reception at the airport and shared transfer to Bonito.",
      "Hotel check-in and overnight stay.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2nd Day: Snorkeling and Macaws",
    descriptionItems: [
      "A day of snorkeling in the natural aquarium of Rio da Prata and contemplating the Red Macaws at Buraco das Araras.",
    ],
    tours: [rioDaPrataEn, buracoDasArarasEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3rd Day: Cave and Waterfalls",
    descriptionItems: [
      "Visit the Blue Lake Cave in the morning and a waterfall swim at Estância Mimosa in the afternoon.",
    ],
    tours: [grutaLagoAzulEn, estanciaMimosaEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4th Day: Bonito - Campo Grande",
    descriptionItems: ["Return transfer to Campo Grande by shared van."],
    tours: [],
  },
];

// ES
export const familiaFelizEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Campo Grande - Bonito",
    descriptionItems: [
      "Recepción en-US el aeropuerto y traslado compartido a Bonito.",
      "Check-in en-US el hotel y noche libre.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º Día: Flotación y Guacamayos",
    descriptionItems: [
      "Día de flotación en-US el acuario natural del Río da Prata y contemplación de los Guacamayos Rojos en-US el Buraco das Araras.",
    ],
    tours: [rioDaPrataEs, buracoDasArarasEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3er Día: Gruta y Cascadas",
    descriptionItems: [
      "Visita a la Gruta del Lago Azul por la mañana y un baño en-US las cascadas de la Estancia Mimosa por la tarde.",
    ],
    tours: [grutaLagoAzulEs, estanciaMimosaEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4º Día: Bonito - Campo Grande",
    descriptionItems: [
      "Traslado de regreso a Campo Grande en-US furgoneta compartida.",
    ],
    tours: [],
  },
];
