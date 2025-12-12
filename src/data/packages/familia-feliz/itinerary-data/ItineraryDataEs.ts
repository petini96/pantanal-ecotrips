import { type ItineraryItem } from "src/model/ItineraryItem";
import { buracoDasArarasEs } from "src/data/tours/buraco-das-araras/BuracoDasArarasEs";
import { estanciaMimosaEs } from "src/data/tours/estancia-mimosa/EstanciaMimosaEs";
import { grutaLagoAzulEs } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEs";
import { rioDaPrataEs } from "src/data/tours/rio-da-prata/RioDaPrataEs";

export const familiaFelizEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Campo Grande - Bonito",
    descriptionItems: [
      "Recepción en el aeropuerto y traslado compartido a Bonito.",
      "Check-in en el hotel y noche libre.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2º Día: Flotación y Guacamayos",
    descriptionItems: [
      "Día de flotación en el acuario natural del Río da Prata y contemplación de los Guacamayos Rojos en el Buraco das Araras.",
    ],
    tours: [rioDaPrataEs, buracoDasArarasEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3er Día: Gruta y Cascadas",
    descriptionItems: [
      "Visita a la Gruta del Lago Azul por la mañana y un baño en las cascadas de la Estancia Mimosa por la tarde.",
    ],
    tours: [grutaLagoAzulEs, estanciaMimosaEs],
    mealsIncluded: ["lunch"],
  },
  {
    day: 4,
    title: "4º Día: Bonito - Campo Grande",
    descriptionItems: [
      "Traslado de regreso a Campo Grande en furgoneta compartida.",
    ],
    tours: [],
  },
];
