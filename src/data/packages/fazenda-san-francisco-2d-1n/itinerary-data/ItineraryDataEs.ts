import { type ItineraryItem } from "src/model/ItineraryItem";
import { chalanaPiranhaFishingEs } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingEs";
import { ecologicalSafariEs } from "src/data/tours/ecological-safari/EcologicalSafariEs";
import { nocturnalSpotlightingEs } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingEs";

export const fazendaCoatiEsItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1er Día: Llegada y Primeras Exploraciones",
    descriptionItems: [
      "Check-in, paseo en chalana con pesca, cena y enfoque nocturno.",
    ],
    tours: [chalanaPiranhaFishingEs, nocturnalSpotlightingEs],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Día: Safari y Despedida",
    descriptionItems: ["Safari fotográfico por la mañana, almuerzo y regreso."],
    tours: [ecologicalSafariEs],
    mealsIncluded: ["breakfast", "lunch"],
  },
];