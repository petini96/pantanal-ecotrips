import { type ItineraryItem } from "src/model/ItineraryItem";
import { buracoDasArarasPt } from "src/data/tours/buraco-das-araras/BuracoDasArarasPt";
import { estanciaMimosaPt } from "src/data/tours/estancia-mimosa/EstanciaMimosaPt";
import { grutaLagoAzulPt } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulPt";
import { rioDaPrataPt } from "src/data/tours/rio-da-prata/RioDaPrataPt";

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