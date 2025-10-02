import { type ItineraryItem } from 'src/model/ItineraryItem';
import { grutaLagoAzulPt, grutaLagoAzulEn, grutaLagoAzulEs } from 'src/data/tours/GrutaLagoAzul';
import { estanciaMimosaPt, estanciaMimosaEn, estanciaMimosaEs } from 'src/data/tours/EstanciaMimosa';
import { cabanasArvorismoPt, cabanasArvorismoEn, cabanasArvorismoEs } from 'src/data/tours/CabanasArvorismo';
import { rioDaPrataPt, rioDaPrataEn, rioDaPrataEs } from 'src/data/tours/RioDaPrata';

// PT-BR
export const reveillonBonitoPtItinerary: ItineraryItem[] = [
  { day: 1, title: '29/Dez: Chegada em Bonito', descriptionItems: ['Receptivo no aeroporto de Campo Grande e transfer privativo para Bonito.', 'Check-in no hotel e pernoite.'], tours: [] },
  { day: 2, title: '30/Dez: Gruta e Cachoeiras', descriptionItems: ['Pela manhã, visita à Gruta do Lago Azul. À tarde, trilha e banho nas cachoeiras da Estância Mimosa.'], tours: [grutaLagoAzulPt, estanciaMimosaPt] },
  { day: 3, title: '31/Dez: Aventura e Véspera de Ano Novo', descriptionItems: ['Manhã de aventura com arvorismo e tirolesa. Noite livre para celebrações de Réveillon.'], tours: [cabanasArvorismoPt] },
  { day: 4, title: '01/Jan: Flutuação em Águas Cristalinas', descriptionItems: ['Após café da manhã, dia de flutuação no Rio da Prata, um verdadeiro aquário natural.'], tours: [rioDaPrataPt], mealsIncluded: ['lunch'] },
  { day: 5, title: '02/Jan: Despedida', descriptionItems: ['Café da manhã e, em horário combinado, transfer privativo para o aeroporto de Campo Grande.'], tours: [] }
];

// EN-US
export const reveillonBonitoEnItinerary: ItineraryItem[] = [
  { day: 1, title: 'Dec 29: Arrival in Bonito', descriptionItems: ['Reception at Campo Grande airport and private transfer to Bonito.', 'Hotel check-in and overnight stay.'], tours: [] },
  { day: 2, title: 'Dec 30: Cave and Waterfalls', descriptionItems: ['In the morning, visit the Blue Lake Cave. In the afternoon, trail and swimming at the Estância Mimosa waterfalls.'], tours: [grutaLagoAzulEn, estanciaMimosaEn] },
  { day: 3, title: 'Dec 31: Adventure and New Year\'s Eve', descriptionItems: ['Morning of adventure with the treetop circuit and zip lines. Free evening for New Year\'s celebrations.'], tours: [cabanasArvorismoEn] },
  { day: 4, title: 'Jan 01: Snorkeling in Crystal Clear Waters', descriptionItems: ['After breakfast, a day of snorkeling at Rio da Prata, a true natural aquarium.'], tours: [rioDaPrataEn], mealsIncluded: ['lunch'] },
  { day: 5, title: 'Jan 02: Departure', descriptionItems: ['Breakfast and, at a scheduled time, private transfer to Campo Grande airport.'], tours: [] }
];

// ES
export const reveillonBonitoEsItinerary: ItineraryItem[] = [
  { day: 1, title: '29/Dic: Llegada a Bonito', descriptionItems: ['Recepción en-US el aeropuerto de Campo Grande y traslado privado a Bonito.', 'Check-in en-US el hotel y noche libre.'], tours: [] },
  { day: 2, title: '30/Dic: Gruta y Cascadas', descriptionItems: ['Por la mañana, visita a la Gruta del Lago Azul. Por la tarde, sendero y baño en-US las cascadas de la Estancia Mimosa.'], tours: [grutaLagoAzulEs, estanciaMimosaEs] },
  { day: 3, title: '31/Dic: Aventura y Nochevieja', descriptionItems: ['Mañana de aventura con arborismo y tirolina. Noche libre para las celebraciones de Año Nuevo.'], tours: [cabanasArvorismoEs] },
  { day: 4, title: '01/Ene: Flotación en-US Aguas Cristalinas', descriptionItems: ['Después del desayuno, día de flotación en-US el Río da Prata, un verdadero acuario natural.'], tours: [rioDaPrataEs], mealsIncluded: ['lunch'] },
  { day: 5, title: '02/Ene: Despedida', descriptionItems: ['Desayuno y, a la hora acordada, traslado privado al aeropuerto de Campo Grande.'], tours: [] }
];