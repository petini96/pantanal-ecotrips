import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/adventure-rio-formoso/img1.webp`

const commonData = {
  id: 'TOUR-ARF-01',
  slug: 'adventure-rio-formoso',
  mainImage: img,
  durationInHours: 2.5,
  minAge: 8,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const adventureRioFormosoPt: Tour = {
    ...commonData,
    name: 'Adventure (Parque Rio Formoso)',
    description: [
        'Muita aventura, diversão e segurança num voo de 520m através de uma tirolesa emocionante.',
        'O percurso passa por um "túnel verde" entre as copas das árvores, com diversos obstáculos suspensos que desafiam o equilíbrio.',
        'A atividade inclui também um percurso realizado com descida pelo Rio Formoso e uma trilha de 2 km.',
        'Restrições: Peso mínimo 35 kg e máximo 110 kg.'
    ],
    shortDescription: 'Voo de 520m em tirolesa por um túnel verde e obstáculos suspensos.',
    includedItems: ['Acompanhamento de condutores', 'Equipamento de segurança completo', 'Tirolesa de 520m', 'Trilha de 2km'],
    keywords: ['adventure', 'tirolesa', 'rio formoso', 'arvorismo', 'aventura'],
    categories: [adventurePt],
    recommendedFor: []
};

export const adventureRioFormosoEn: Tour = {
    ...commonData,
    name: 'Adventure (Rio Formoso Park)',
    description: [
        'Lots of adventure, fun, and safety in a 520m flight through an exciting zip line.',
        'The route passes through a "green tunnel" between the treetops, with several suspended obstacles that challenge balance.',
        'The activity also includes a route carried out with a descent down the Formoso River and a 2 km trail.',
        'Restrictions: Minimum weight 35 kg and maximum 110 kg.'
    ],
    shortDescription: '520m zipline flight through a green tunnel and suspended obstacles.',
    includedItems: ['Guide accompaniment', 'Complete safety equipment', '520m zipline', '2km trail'],
    keywords: ['adventure', 'zipline', 'rio formoso', 'canopy tours', 'adventure'],
    categories: [adventureEn],
    recommendedFor: []
};

export const adventureRioFormosoEs: Tour = {
    ...commonData,
    name: 'Adventure (Parque Rio Formoso)',
    description: [
        'Mucha aventura, diversión y seguridad en un vuelo de 520m a través de una emocionante tirolesa.',
        'El recorrido pasa por un "túnel verde" entre las copas de los árboles, con varios obstáculos suspendidos que desafían el equilibrio.',
        'La actividad también incluye un recorrido realizado con un descenso por el río Formoso y un sendero de 2 km.',
        'Restricciones: Peso mínimo 35 kg y máximo 110 kg.'
    ],
    shortDescription: 'Vuelo de 520m en tirolesa por un túnel verde y obstáculos suspendidos.',
    includedItems: ['Acompañamiento de conductores', 'Equipo de seguridad completo', 'Tirolesa de 520m', 'Sendero de 2km'],
    keywords: ['adventure', 'tirolesa', 'rio formoso', 'arborismo', 'aventura'],
    categories: [adventureEs],
    recommendedFor: []
};
