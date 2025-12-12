import { buracoDasArarasEn } from "src/data/tours/buraco-das-araras/BuracoDasArarasEn";
import { grutaLagoAzulEn } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEn";
import { rioDaPrataEn } from "src/data/tours/rio-da-prata/RioDaPrataEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

export const noiteFelizEnItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1st Day: Campo Grande - Bonito",
    descriptionItems: [
      "Reception at Campo Grande airport and shared transfer to Bonito.",
      "Hotel check-in and overnight stay.",
    ],
    tours: [],
  },
  {
    day: 2,
    title: "2nd Day: Snorkeling and Macaws",
    descriptionItems: [
      "A day of nature immersion with snorkeling at Rio da Prata and contemplation at Buraco das Araras.",
    ],
    tours: [rioDaPrataEn, buracoDasArarasEn],
    mealsIncluded: ["lunch"],
  },
  {
    day: 3,
    title: "3rd Day: Cave and Departure",
    descriptionItems: [
      "Visit to Bonito's postcard, the Blue Lake Cave, followed by departure to Campo Grande.",
    ],
    tours: [grutaLagoAzulEn],
  },
];