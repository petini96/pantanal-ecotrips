import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt } from "src/data/tours/birdwatching/BirdwatchingPt";
import { chalanaPiranhaFishingPt } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingPt";
import { ecologicalSafariPt } from "src/data/tours/ecological-safari/EcologicalSafariPt";
import { jaguarSafariPt } from "src/data/tours/jaguar-safari/JaguarSafariPt";
import { nocturnalSpotlightingPt } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingPt";

// --- ANTA (4D/3N) ---
export const fazendaAntaPtItinerary: ItineraryItem[] = [
  {
    day: 1,
    title: "1º Dia: Chegada ao Pantanal",
    descriptionItems: [
      "Check-in, passeio de chalana, jantar e focagem noturna.",
    ],
    tours: [chalanaPiranhaFishingPt, nocturnalSpotlightingPt],
    mealsIncluded: ["dinner"],
  },
  {
    day: 2,
    title: "2º Dia: Safári e Aves",
    descriptionItems: ["Safári fotográfico e observação de aves."],
    tours: [ecologicalSafariPt, birdwatchingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: Em Busca do Jaguar",
    descriptionItems: ["Dia dedicado ao Safári de Onça-Pintada."],
    tours: [jaguarSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Despedida",
    descriptionItems: ["Manhã livre, almoço e retorno."],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];