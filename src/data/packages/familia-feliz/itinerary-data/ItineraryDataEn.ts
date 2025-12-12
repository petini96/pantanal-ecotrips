import { buracoDasArarasEn } from "src/data/tours/buraco-das-araras/BuracoDasArarasEn";
import { estanciaMimosaEn } from "src/data/tours/estancia-mimosa/EstanciaMimosaEn";
import { grutaLagoAzulEn } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEn";
import { rioDaPrataEn } from "src/data/tours/rio-da-prata/RioDaPrataEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

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