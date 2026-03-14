import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";
const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

const commonData = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const estrelaDoFormosoPt: Tour = {
    ...commonData,
    name: 'Estrela do Formoso',
    description: [
        'Estrela do Formoso é o passeio ideal para todas as idades. As trilhas dentro e ao redor da Ilha, te levam até 07 decks de banho no principal rio da cidade, o Rio Formoso, conhecido por suas águas cristalinas e vida aquática pujante com peixes da espécie piraputanga, curimba e dourado que transformam a água no cenário ideal para tomar “aquele” banho refrescante.',
        'Além de toda beleza natural, contamos com receptivo, banheiros, área de descanso e estacionamento. Para uso dos Pergolados, consultar valores e disponibilidade. Tem opções de passeio de Stand Up e Caique, com duração média de 1h.'
    ],
    shortDescription: 'Balneário exclusivo com decks no Rio Formoso e ambiente privativo.',
    includedItems: ['Acesso aos decks e trilhas'],
    keywords: ['balneario', 'exclusivo', 'rio formoso', 'decks'],
    categories: [resortsPt],
    recommendedFor: [familiesPt]
};

export const estrelaDoFormosoEn: Tour = {
    ...commonData,
    name: 'Estrela do Formoso',
    description: [
        'Estrela do Formoso is the ideal tour for all ages. The trails inside and around the Island take you to 07 bathing decks on the main river of the city, the Rio Formoso, known for its crystal clear waters and thriving aquatic life with fish of the species piraputanga, curimba and dourado that transform the water into the ideal setting to take “that” refreshing bath.',
        'In addition to all the natural beauty, we have reception, restrooms, rest area and parking. For use of the Pergolas, consult values and availability. There are Stand Up and Kayak tour options, with an average duration of 1h.'
    ],
    shortDescription: 'Exclusive resort with decks on the Formoso River and private environment.',
    includedItems: ['Access to decks and trails'],
    keywords: ['resort', 'exclusive', 'rio formoso', 'decks'],
    categories: [resortsEn],
    recommendedFor: [familiesEn]
};

export const estrelaDoFormosoEs: Tour = {
    ...commonData,
    name: 'Estrela do Formoso',
    description: [
        'Estrela do Formoso es el paseo ideal para todas las edades. Los senderos dentro y alrededor de la Isla, te llevan hasta 07 decks de baño en el principal río de la ciudad, el Río Formoso, conocido por sus aguas cristalinas y vida acuática pujante con peces de la especie piraputanga, curimba y dorado que transforman el agua en el escenario ideal para tomar “ese” baño refrescante.',
        'Además de toda la belleza natural, contamos con recepción, baños, área de descanso y estacionamiento. Para uso de los Pérgolas, consultar valores y disponibilidad. Hay opciones de paseo de Stand Up y Kayak, con duración media de 1h.'
    ],
    shortDescription: 'Balneario exclusivo con decks en el Río Formoso y ambiente privado.',
    includedItems: ['Acceso a los decks y senderos'],
    keywords: ['balneario', 'exclusivo', 'río formoso', 'decks'],
    categories: [resortsEs],
    recommendedFor: [familiesEs]
};
