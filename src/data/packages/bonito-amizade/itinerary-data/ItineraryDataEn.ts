import { type ItineraryItem } from "src/model/ItineraryItem";

import { bocaDaOncaEn } from "src/data/tours/boca-onca/BocaDaOncaEn";
import { boteRioFormosoEn } from "src/data/tours/bote-rio-formoso/BoteRioFormosoEn";
import { buracoDasArarasEn } from "src/data/tours/buraco-das-araras/BuracoDasArarasEn";
import { grutaLagoAzulEn } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEn";
import { rioDaPrataEn } from "src/data/tours/rio-da-prata/RioDaPrataEn";

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