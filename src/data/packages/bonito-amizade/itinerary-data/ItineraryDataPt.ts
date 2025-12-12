import { type ItineraryItem } from "src/model/ItineraryItem";

import { bocaDaOncaPt } from "src/data/tours/boca-onca/BocaDaOncaPt";
import { boteRioFormosoPt } from "src/data/tours/bote-rio-formoso/BoteRioFormosoPt";
import { buracoDasArarasPt } from "src/data/tours/buraco-das-araras/BuracoDasArarasPt";
import { grutaLagoAzulPt } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulPt";
import { rioDaPrataPt } from "src/data/tours/rio-da-prata/RioDaPrataPt";

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