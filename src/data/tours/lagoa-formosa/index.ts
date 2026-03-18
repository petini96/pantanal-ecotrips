import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";
import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/lagoa-formosa/img1.webp`

const commonData = {
  id: 'TOUR-LF-01',
  slug: 'lagoa-formosa',
  mainImage: img,
  durationInHours: 8, // Day use usually implies full day
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const lagoaFormosaPt: Tour = {
    ...commonData,
    name: 'Lagoa Formosa (Balneário)',
    description: [
        'Localizado no Parque Ecológico Rio Formoso, a Lagoa Formosa é o destino ideal para relaxar e se divertir o dia todo.',
        'O espaço oferece uma ampla área de banho com águas cristalinas, além de atividades inclusas no day-use como stand-up paddle e caiaques.',
        'É um local bonito e agradável para passar o dia com a família, contando com infraestrutura completa de recepção e restaurante.',
        'Idade mínima: Livre. Duraçao: Livre (Day Use).'
    ],
    shortDescription: 'Day use com área de banho na Lagoa do Rio Formoso, incluindo stand-up e caiaque.',
    includedItems: ['Acesso à área de banho', 'Uso de caiaques', 'Uso de stand-up paddle', 'Infraestrutura do local'],
    keywords: ['lagoa formosa', 'balneario', 'rio formoso', 'day use', 'descanso'],
    categories: [adventurePt, resortsPt],
    recommendedFor: []
};

export const lagoaFormosaEn: Tour = {
    ...commonData,
    name: 'Lagoa Formosa (Resort/Beach)',
    description: [
        'Located in the Rio Formoso Ecological Park, Lagoa Formosa is the ideal destination to relax and have fun all day long.',
        'The space offers a large bathing area with crystal clear waters, as well as activities included in the day-use such as stand-up paddleboarding and kayaks.',
        'It is a beautiful and pleasant place to spend the day with the family, with a complete reception and restaurant infrastructure.',
        'Minimum age: Free. Duration: Free (Day Use).'
    ],
    shortDescription: 'Day use at the Rio Formoso lagoon, including stand-up and kayaking.',
    includedItems: ['Bathing area access', 'Use of kayaks', 'Use of stand-up paddles', 'Site infrastructure'],
    keywords: ['lagoa formosa', 'resort', 'rio formoso', 'day use', 'relaxation'],
    categories: [adventureEn, resortsEn],
    recommendedFor: []
};

export const lagoaFormosaEs: Tour = {
    ...commonData,
    name: 'Lagoa Formosa (Balneario)',
    description: [
        'Ubicada en el Parque Ecológico Rio Formoso, la Lagoa Formosa es el destino ideal para relajarse y divertirse todo el día.',
        'El espacio ofrece una amplia zona de baño de aguas cristalinas, además de actividades incluidas en el day-use como stand-up paddle y kayaks.',
        'Es un lugar hermoso y agradable para pasar el día en familia, con una completa infraestructura de recepción y restaurante.',
        'Edad mínima: Libre. Duración: Libre (Day Use).'
    ],
    shortDescription: 'Day use con área de baño en la laguna del río Formoso, incluyendo stand-up y kayak.',
    includedItems: ['Acceso al área de baño', 'Uso de kayaks', 'Uso de stand-up paddle', 'Infraestructura del sitio'],
    keywords: ['lagoa formosa', 'balneario', 'rio formoso', 'day use', 'descanso'],
    categories: [adventureEs, resortsEs],
    recommendedFor: []
};
