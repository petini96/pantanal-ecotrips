
import {
  grutaDoLagoAzulEn,
  grutaDoLagoAzulEs,
  grutaDoLagoAzulPt,
} from "src/data/tours/GrutaDoLagoAzul";
import {
  recantoEcologicoRioPrataEn,
  recantoEcologicoRioPrataEs,
  recantoEcologicoRioPrataPt,
} from "src/data/tours/RecantoEcologicoRioPrata";
import { type Duration } from "src/model/Duration";
import { type ItineraryItem } from "src/model/ItineraryItem";

export const noiteFelizPtItineraryItems = [
  {
    title: "1º dia: Campo Grande - Bonito",
    activities: [
      "Assistência e receptivo no aeroporto Internacional de Campo Grande",
      "Transporte em van regular compartilhada até a cidade de Bonito",
      "Saídas as 09h30 - 14h30 - 19h00 - 23h30 com embarque no aeroporto direto do aeroporto Internacional de Campo Grande",
      "Check-in na pousada/ hotel escolhido",
      "Pernoite",
    ],
  },
  {
    title: "2º Dia: Bonito",
    tours: [recantoEcologicoRioPrataPt],
    included: [
      "Equipamentos para flutuação (roupa e bota de neoprene, colete salva-vidas, máscara e snorkel)"
    ],
    duration: {
      hours: 23,
      minutes: 59
    } as Duration,
    distance: "56km"
  },
  {
    title: "3º Dia: Bonito",
    activities: [
      "Após Gruta do Lago Azul embarque do Hotel escolhido em Bonito para Campo Grande ou direto ao aeroporto para apanhar voo.",
      "Saídas as - 12h30 - 18h30"
    ],
    tours: [grutaDoLagoAzulPt],
  },
] as ItineraryItem[];
 

//english

export const noiteFelizEnItineraryItems = [
  {
    title: "1st Day: Campo Grande - Bonito",
    activities: [
      "Assistance and reception at Campo Grande International Airport",
      "Shared regular van transportation to the city of Bonito",
      "Departures at 9:30 AM - 2:30 PM - 7:00 PM - 11:30 PM with pickup directly from Campo Grande International Airport",
      "Check-in at the chosen inn/hotel",
      "Overnight stay",
    ],
  },
  {
    title: "2nd Day: Bonito",
    tours: [recantoEcologicoRioPrataEn],
    included: [
      "Floating equipment (neoprene wetsuit and boots, life vest, mask, and snorkel)"
    ],
    duration: {
      hours: 23,
      minutes: 59
    } as Duration,
    distance: "56km"
  },
  {
    title: "3rd Day: Bonito",
    activities: [
      "After the Blue Lake Grotto tour, departure from the chosen hotel in Bonito to Campo Grande or directly to the airport to catch a flight.",
      "Departures at - 12:30 PM - 6:30 PM"
    ],
    tours: [grutaDoLagoAzulEn],
  },
] as ItineraryItem[];

//spanish
export const noiteFelizEsItineraryItems = [
  {
    title: "1er Día: Campo Grande - Bonito",
    activities: [
      "Asistencia y recepción en el Aeropuerto Internacional de Campo Grande",
      "Transporte en furgoneta regular compartida hasta la ciudad de Bonito",
      "Salidas a las 09h30 - 14h30 - 19h00 - 23h30 con recogida directamente en el Aeropuerto Internacional de Campo Grande",
      "Check-in en la posada/hotel elegido",
      "Pernocte",
    ],
  },
  {
    title: "2º Día: Bonito",
    tours: [recantoEcologicoRioPrataEs],
    included: [
      "Equipo para flotación (traje y botas de neopreno, chaleco salvavidas, máscara y snorkel)"
    ],
    duration: {
      hours: 23,
      minutes: 59
    } as Duration,
    distance: "56km"
  },
  {
    title: "3er Día: Bonito",
    activities: [
      "Después de la excursión a la Gruta del Lago Azul, salida desde el hotel elegido en Bonito hacia Campo Grande o directamente al aeropuerto para tomar un vuelo.",
      "Salidas a las - 12h30 - 18h30"
    ],
    tours: [grutaDoLagoAzulEs],
  },
] as ItineraryItem[];