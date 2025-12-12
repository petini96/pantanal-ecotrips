import { cabanasArvorismoEs } from "src/data/tours/cabanas-arvorismo/CabanasArvorismoEs";
import { estanciaMimosaEs } from "src/data/tours/estancia-mimosa/EstanciaMimosaEs";
import { grutaLagoAzulEs } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulEs";
import { rioDaPrataEs } from "src/data/tours/rio-da-prata/RioDaPrataEs";
import { type ItineraryItem } from "src/model/ItineraryItem";

// ES
export const reveillonBonitoEsItinerary: ItineraryItem[] = [
  { day: 1, title: '29/Dic: Llegada a Bonito', descriptionItems: ['Recepción en el aeropuerto de Campo Grande y traslado privado a Bonito.', 'Check-in en el hotel y noche libre.'], tours: [] },
  { day: 2, title: '30/Dic: Gruta y Cascadas', descriptionItems: ['Por la mañana, visita a la Gruta del Lago Azul. Por la tarde, sendero y baño en las cascadas de la Estancia Mimosa.'], tours: [grutaLagoAzulEs, estanciaMimosaEs] },
  { day: 3, title: '31/Dic: Aventura y Nochevieja', descriptionItems: ['Mañana de aventura con arborismo y tirolina. Noche libre para las celebraciones de Año Nuevo.'], tours: [cabanasArvorismoEs] },
  { day: 4, title: '01/Ene: Flotación en Aguas Cristalinas', descriptionItems: ['Después del desayuno, día de flotación en el Río da Prata, un verdadero acuario natural.'], tours: [rioDaPrataEs], mealsIncluded: ['lunch'] },
  { day: 5, title: '02/Ene: Despedida', descriptionItems: ['Desayuno y, a la hora acordada, traslado privado al aeropuerto de Campo Grande.'], tours: [] }
];