import { buracoDasArarasPt } from "src/data/tours/buraco-das-araras/BuracoDasArarasPt";
import { grutaLagoAzulPt } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulPt";
import { rioDaPrataPt } from "src/data/tours/rio-da-prata/RioDaPrataPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

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