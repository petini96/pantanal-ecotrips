import { buracoDasArarasEs } from "src/data/tours/buraco-das-araras/BuracoDasArarasEs";
import { grutaLagoAzulEs } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEs";
import { rioDaPrataEs } from "src/data/tours/rio-da-prata/RioDaPrataEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

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
