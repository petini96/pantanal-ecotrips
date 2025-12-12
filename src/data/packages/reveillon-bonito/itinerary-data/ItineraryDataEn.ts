import { cabanasArvorismoEn } from "src/data/tours/cabanas-arvorismo/CabanasArvorismoEn";
import { estanciaMimosaEn } from "src/data/tours/estancia-mimosa/EstanciaMimosaEn";
import { grutaLagoAzulEn } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEn";
import { rioDaPrataEn } from "src/data/tours/rio-da-prata/RioDaPrataEn";
import { type ItineraryItem } from "src/model/ItineraryItem";

// EN-US
export const reveillonBonitoEnItinerary: ItineraryItem[] = [
  { day: 1, title: 'Dec 29: Arrival in Bonito', descriptionItems: ['Reception at Campo Grande airport and private transfer to Bonito.', 'Hotel check-in and overnight stay.'], tours: [] },
  { day: 2, title: 'Dec 30: Cave and Waterfalls', descriptionItems: ['In the morning, visit the Blue Lake Cave. In the afternoon, trail and swimming at the Estância Mimosa waterfalls.'], tours: [grutaLagoAzulEn, estanciaMimosaEn] },
  { day: 3, title: 'Dec 31: Adventure and New Year\'s Eve', descriptionItems: ['Morning of adventure with the treetop circuit and zip lines. Free evening for New Year\'s celebrations.'], tours: [cabanasArvorismoEn] },
  { day: 4, title: 'Jan 01: Snorkeling in Crystal Clear Waters', descriptionItems: ['After breakfast, a day of snorkeling at Rio da Prata, a true natural aquarium.'], tours: [rioDaPrataEn], mealsIncluded: ['lunch'] },
  { day: 5, title: 'Jan 02: Departure', descriptionItems: ['Breakfast and, at a scheduled time, private transfer to Campo Grande airport.'], tours: [] }
];