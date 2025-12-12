import { cabanasArvorismoPt } from "src/data/tours/cabanas-arvorismo/CabanasArvorismoPt";
import { estanciaMimosaPt } from "src/data/tours/estancia-mimosa/EstanciaMimosaPt";
import { grutaLagoAzulPt } from "src/data/tours/gruta-lago-azul/GrutaLagoAzulPt";
import { rioDaPrataPt } from "src/data/tours/rio-da-prata/RioDaPrataPt";
import { type ItineraryItem } from "src/model/ItineraryItem";

// PT-BR
export const reveillonBonitoPtItinerary: ItineraryItem[] = [
  { day: 1, title: '29/Dez: Chegada em Bonito', descriptionItems: ['Receptivo no aeroporto de Campo Grande e transfer privativo para Bonito.', 'Check-in no hotel e pernoite.'], tours: [] },
  { day: 2, title: '30/Dez: Gruta e Cachoeiras', descriptionItems: ['Pela manhã, visita à Gruta do Lago Azul. À tarde, trilha e banho nas cachoeiras da Estância Mimosa.'], tours: [grutaLagoAzulPt, estanciaMimosaPt] },
  { day: 3, title: '31/Dez: Aventura e Véspera de Ano Novo', descriptionItems: ['Manhã de aventura com arvorismo e tirolesa. Noite livre para celebrações de Réveillon.'], tours: [cabanasArvorismoPt] },
  { day: 4, title: '01/Jan: Flutuação em Águas Cristalinas', descriptionItems: ['Após café da manhã, dia de flutuação no Rio da Prata, um verdadeiro aquário natural.'], tours: [rioDaPrataPt], mealsIncluded: ['lunch'] },
  { day: 5, title: '02/Jan: Despedida', descriptionItems: ['Café da manhã e, em horário combinado, transfer privativo para o aeroporto de Campo Grande.'], tours: [] }
];