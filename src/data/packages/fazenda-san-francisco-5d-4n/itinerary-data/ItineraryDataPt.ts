import { type ItineraryItem } from "src/model/ItineraryItem";
import { birdwatchingPt } from "src/data/tours/birdwatching/BirdwatchingPt";
import { chalanaPiranhaFishingPt } from "src/data/tours/chalana-piranha-fishing/ChalanaPiranhaFishingPt";
import { ecologicalSafariPt } from "src/data/tours/ecological-safari/EcologicalSafariPt";
import { jaguarSafariPt } from "src/data/tours/jaguar-safari/JaguarSafariPt";
import { nocturnalSpotlightingPt } from "src/data/tours/nocturnal-spotlighting/NocturnalSpotlightingPt";

// --- ÁGUIA (5D/4N) ---
export const fazendaAguiaPtItinerary: ItineraryItem[] = [
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
    title: "2º Dia: Safári Fotográfico",
    descriptionItems: [
      "Dia inteiro dedicado ao safári fotográfico, explorando diferentes áreas.",
    ],
    tours: [ecologicalSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 3,
    title: "3º Dia: O Mundo das Aves",
    descriptionItems: [
      "Manhã de observação de aves e tarde livre para aproveitar a piscina.",
    ],
    tours: [birdwatchingPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 4,
    title: "4º Dia: Em Busca do Jaguar",
    descriptionItems: ["Dia dedicado ao Safári de Onça-Pintada."],
    tours: [jaguarSafariPt],
    mealsIncluded: ["breakfast", "lunch", "dinner"],
  },
  {
    day: 5,
    title: "5º Dia: Despedida",
    descriptionItems: [
      "Última manhã na fazenda, almoço e retorno para Campo Grande.",
    ],
    tours: [],
    mealsIncluded: ["breakfast", "lunch"],
  },
];