import { cabanasArvorismoEn, cabanasArvorismoEs, cabanasArvorismoPt } from "src/data/tours/CabanasArvorismo";
import { estanciaMimosaEn, estanciaMimosaEs, estanciaMimosaPt } from "src/data/tours/EstanciaMimosa";
import { grutaDoLagoAzulEn, grutaDoLagoAzulEs, grutaDoLagoAzulPt } from "src/data/tours/GrutaDoLagoAzul";
import { recantoEcologicoRioPrataEn, recantoEcologicoRioPrataEs, recantoEcologicoRioPrataPt } from "src/data/tours/RecantoEcologicoRioPrata";
import { type Duration } from "src/model/Duration";
import { type ItineraryItem } from "src/model/ItineraryItem";

export const reveillon2024PtItineraryItems = [
  {
    title: "Dezembro: Campo Grande - Bonito",
    activities: [
      "Assistência e receptivo no aeroporto de Campo Grande",
      "Transporte carro privativo  até a cidade de Bonito/ Duração 04:30",
      "Horário da Saída de Campo Grande após chegada no aeroporto.",
      "Embarque no aeroporto de Campo grande.",
      "Check-in na pousada/ hotel escolhido, sendo em apartamento duplo/triplo e ou quadruplos.",
      "pernoite",
    ],
    observation:
      "Todos os passeios descritos abaixo serão realizados, sendo organizados e agendados pela Agência Operadora  local  com tempo hábil para o melhor aproveitamento dos passeios, sendo possível alteração nos dias e horários ou por passeio similar, se algum dos passeios aqui listados não puder ser agendado.",
  },
  {
    title: "Dia 30 de Dezembro : Bonito",
    tours: [grutaDoLagoAzulPt, estanciaMimosaPt],
  },
  {
    title: "Dia 31 de Dezembro : Bonito",
    tours: [cabanasArvorismoPt],
  },
  {
    title: "Dia 01 de Janeiro : Bonito",
    tours: [recantoEcologicoRioPrataPt],
  },
  {
    title: "Dia 02 de Janeiro : Bonito",
    activities: [
      "Transporte  de retorno para Campo Grande transporte privativo em tempo para voo doméstico.",
      "Horário da Saída de Bonito com tempo hábil para apanhar voos  com embarque do Hotel escolhido.",
    ],
    duration: {
      hours: 4,
      minutes: 30,
    } as Duration,
    rules: [
      "0-4 free – idades acima disso – favor consultar.",
      "Caso o hotel/pousada escolhido não confirme a vaga por algum motivo de força maior, nós o substituiremos por outro  hotel/pousada similar (preço).",
    ],
  },
] as ItineraryItem[];


// ENGLISH

export const reveillon2024EnItineraryItems = [
  {
    title: "December: Campo Grande - Bonito",
    activities: [
      "Assistance and reception at Campo Grande airport",
      "Private car transportation to the city of Bonito / Duration 04:30",
      "Departure time from Campo Grande after airport arrival.",
      "Departure from Campo Grande airport.",
      "Check-in at the chosen inn/hotel, in a double/triple or quadruple apartment.",
      "Overnight stay",
    ],
    observation:
      "All tours described below will be carried out, being organized and scheduled by the local Operating Agency in a timely manner for the best enjoyment. Changes in days and times, or substitution for a similar tour, are possible if any of the tours listed here cannot be scheduled.",
  },
  {
    title: "December 30th: Bonito",
    tours: [grutaDoLagoAzulEn, estanciaMimosaEn],
  },
  {
    title: "December 31st: Bonito",
    tours: [cabanasArvorismoEn],
  },
  {
    title: "January 1st: Bonito",
    tours: [recantoEcologicoRioPrataEn],
  },
  {
    title: "January 2nd: Bonito",
    activities: [
      "Return transportation to Campo Grande by private transport in time for a domestic flight.",
      "Departure time from Bonito with enough time to catch flights, with pickup from the chosen hotel.",
    ],
    duration: {
      hours: 4,
      minutes: 30,
    } as Duration,
    rules: [
      "0-4 years old free – for ages above that, please consult.",
      "If the chosen hotel/inn does not confirm availability due to force majeure, we will replace it with another similar hotel/inn (in price).",
    ],
  },
] as ItineraryItem[];

// SPANISH

export const reveillon2024EsItineraryItems = [
  {
    title: "Diciembre: Campo Grande - Bonito",
    activities: [
      "Asistencia y recepción en el aeropuerto de Campo Grande",
      "Transporte en coche privado a la ciudad de Bonito / Duración 04:30",
      "Horario de salida de Campo Grande después de la llegada al aeropuerto.",
      "Salida desde el aeropuerto de Campo Grande.",
      "Check-in en la posada/hotel elegido, en habitación doble/triple o cuádruple.",
      "Pernocte",
    ],
    observation:
      "Todas las excursiones descritas a continuación se realizarán, siendo organizadas y programadas por la Agencia Operadora local con tiempo suficiente para el mejor aprovechamiento de las mismas. Es posible la alteración de días y horarios o la sustitución por una excursión similar si alguna de las aquí listadas no pudiera ser programada.",
  },
  {
    title: "Día 30 de Diciembre: Bonito",
    tours: [grutaDoLagoAzulEs, estanciaMimosaEs],
  },
  {
    title: "Día 31 de Diciembre: Bonito",
    tours: [cabanasArvorismoEs],
  },
  {
    title: "Día 01 de Enero: Bonito",
    tours: [recantoEcologicoRioPrataEs],
  },
  {
    title: "Día 02 de Enero: Bonito",
    activities: [
      "Transporte de regreso a Campo Grande en transporte privado a tiempo para el vuelo doméstico.",
      "Horario de salida de Bonito con tiempo suficiente para tomar los vuelos, con recogida en el hotel elegido.",
    ],
    duration: {
      hours: 4,
      minutes: 30,
    } as Duration,
    rules: [
      "0-4 años gratis – para edades superiores, por favor consultar.",
      "En caso de que el hotel/posada elegido no confirme la plaza por algún motivo de fuerza mayor, lo sustituiremos por otro hotel/posada de categoría similar (precio).",
    ],
  },
] as ItineraryItem[];