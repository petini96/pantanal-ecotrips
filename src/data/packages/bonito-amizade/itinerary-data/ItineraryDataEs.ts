import { type ItineraryItem } from "src/model/ItineraryItem";

import { bocaDaOncaEs } from "src/data/tours/boca-onca/BocaDaOncaEs";
import { boteRioFormosoEs } from "src/data/tours/bote-rio-formoso/BoteRioFormosoEs";
import { buracoDasArarasEs } from "src/data/tours/buraco-das-araras/BuracoDasArarasEs";
import { grutaLagoAzulEs } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEs";
import { rioDaPrataEs } from "src/data/tours/rio-da-prata/RioDaPrataEs";

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
