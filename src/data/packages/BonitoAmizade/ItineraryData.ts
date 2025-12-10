import { type ItineraryItem } from "src/model/ItineraryItem";
import {
  grutaLagoAzulPt,
  grutaLagoAzulEn,
  grutaLagoAzulEs,
} from "src/data/tours/GrutaLagoAzul";
import {
  boteRioFormosoPt,
  boteRioFormosoEn,
  boteRioFormosoEs,
} from "src/data/tours/BoteRioFormoso";
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
  bocaDaOncaPt,
  bocaDaOncaEn,
  bocaDaOncaEs,
} from "src/data/tours/BocaDaOnca";

export const bonitoAmizadePtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º dia: Campo Grande - Bonito",
    descriptionItems: [
      "Receptivo no aeroporto e transporte compartilhado para Bonito.",
      "Check-in e pernoite.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º dia: Gruta e Bote",
    descriptionItems: [
      "Visita à Gruta do Lago Azul e aventura em bote inflável pelo Rio Formoso.",
    ],
    tours: [grutaLagoAzulPt, boteRioFormosoPt],
  },
  {
    day: 3,
    title: "3º dia: Flutuação e Araras",
    descriptionItems: [
      "Dia de flutuação no Rio da Prata e contemplação no Buraco das Araras.",
    ],
    tours: [rioDaPrataPt, buracoDasArarasPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4º dia: Cachoeiras da Boca da Onça",
    descriptionItems: [
      "Trilha pelas cachoeiras da Boca da Onça, incluindo a mais alta do estado.",
    ],
    tours: [bocaDaOncaPt],
    mealsIncluded: ["lunch"],
  },
  {
    day: 5,
    title: "5º dia: Bonito - Campo Grande",
    descriptionItems: [
      "Transporte de retorno para Campo Grande em van compartilhada.",
    ],
    tours: [],
  },
];

export const bonitoAmizadeEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Campo Grande - Bonito",
    descriptionItems: [
      "Airport reception and shared transfer to Bonito.",
      "Check-in and overnight stay.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2nd Day: Cave and Rafting",
    descriptionItems: [
      "Visit to the Blue Lake Cave and an inflatable rafting adventure on the Formoso River.",
    ],
    tours: [grutaLagoAzulEn, boteRioFormosoEn],
  },
  {
    day: 3,
    title: "3rd Day: Snorkeling and Macaws",
    descriptionItems: [
      "A day of snorkeling at Rio da Prata and contemplation at Buraco das Araras.",
    ],
    tours: [rioDaPrataEn, buracoDasArarasEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4th Day: Boca da Onça Waterfalls",
    descriptionItems: [
      "Trail through the Boca da Onça waterfalls, including the highest in the state.",
    ],
    tours: [bocaDaOncaEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 5,
    title: "5th Day: Bonito - Campo Grande",
    descriptionItems: ["Return transfer to Campo Grande by shared van."],
    tours: [],
  },
];

export const bonitoAmizadeEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Campo Grande - Bonito",
    descriptionItems: [
      "Recepción en el aeropuerto y traslado compartido a Bonito.",
      "Check-in y noche libre.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º Día: Gruta y Bote",
    descriptionItems: [
      "Visita a la Gruta del Lago Azul y aventura en bote inflable por el Río Formoso.",
    ],
    tours: [grutaLagoAzulEs, boteRioFormosoEs],
  },
  {
    day: 3,
    title: "3er Día: Flotación y Guacamayos",
    descriptionItems: [
      "Día de flotación en el Río da Prata y contemplación en el Buraco das Araras.",
    ],
    tours: [rioDaPrataEs, buracoDasArarasEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4º Día: Cascadas de Boca da Onça",
    descriptionItems: [
      "Sendero por las cascadas de Boca da Onça, incluyendo la más alta del estado.",
    ],
    tours: [bocaDaOncaEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 5,
    title: "5º Día: Bonito - Campo Grande",
    descriptionItems: [
      "Traslado de regreso a Campo Grande en furgoneta compartida.",
    ],
    tours: [],
  },
];
