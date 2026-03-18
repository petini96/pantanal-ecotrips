import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/rotta-zagaia/img1.webp`

const commonData = {
  id: 'TOUR-RZ-01',
  slug: 'rotta-zagaia',
  mainImage: img,
  durationInHours: 1,
  minAge: 6,
  distanceFromCity: '3km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  city: bonito
};

export const rottaZagaiaPt: Tour = {
    ...commonData,
    name: 'Rotta Zagaia (Quadriciclo)',
    description: [
        'O passeio é realizado em quadriciclos (individuais ou duplos), acompanhados por um monitor com a duração de aproximadamente 50 minutos à 01 hora de aventura, emoção e segurança.',
        'O percurso de 6 km ocorre dentro do Zagaia Resort, passando por uma mata em torno e vários obstáculos naturais.',
        'Todos farão um teste prático antes de iniciar, onde serão avaliados pelo monitor sobre suas condições de pilotagem.',
        'Idades: 10 a 15 anos podem pilotar quadriciclos de 250cc. Maiores de 16 anos pilotam os de 420cc. Crianças a partir de 6 anos podem ir na garupa.'
    ],
    shortDescription: 'Aventura de quadriciclo pelas trilhas e matas do Zagaia Resort.',
    includedItems: ['Acompanhamento de monitor', 'Equipamento de segurança (capacete)', 'Treinamento inicial'],
    keywords: ['quadriciclo', 'zagaia', 'aventura', 'lama', 'trilha'],
    categories: [adventurePt],
    recommendedFor: []
};

export const rottaZagaiaEn: Tour = {
    ...commonData,
    name: 'Rotta Zagaia (ATV/Quad Bike)',
    description: [
        'The tour is carried out on quad bikes (single or double), accompanied by a monitor with a duration of approximately 50 minutes to 1 hour of adventure, emotion, and safety.',
        'The 6 km route takes place inside the Zagaia Resort, passing through a surrounding forest and various natural obstacles.',
        'Everyone will take a practical test before starting, where they will be evaluated by the monitor on their riding conditions.',
        'Ages: 10 to 15 years old can ride 250cc quad bikes. Those over 16 ride 420cc bikes. Children from 6 years old can go as passengers.'
    ],
    shortDescription: 'Quad bike adventure through the trails and forests of Zagaia Resort.',
    includedItems: ['Monitor accompaniment', 'Safety equipment (helmet)', 'Initial training'],
    keywords: ['atv', 'quad bike', 'zagaia', 'adventure', 'mud', 'trail'],
    categories: [adventureEn],
    recommendedFor: []
};

export const rottaZagaiaEs: Tour = {
    ...commonData,
    name: 'Rotta Zagaia (Cuatriciclo)',
    description: [
        'El recorrido se realiza en cuatriciclos (individuales o dobles), acompañados por un monitor con una duración de aproximadamente 50 minutos a 1 hora de aventura, emoción y seguridad.',
        'El recorrido de 6 km se realiza dentro del Zagaia Resort, pasando por un bosque circundante y varios obstáculos naturales.',
        'Todos realizarán una prueba práctica antes de comenzar, donde serán evaluados por el monitor sobre sus condiciones de conducción.',
        'Edades: de 10 a 15 años pueden conducir cuatriciclos de 250cc. Los mayores de 16 años conducen los de 420cc. Los niños a partir de 6 años pueden ir como acompañantes.'
    ],
    shortDescription: 'Aventura en cuatriciclo por los senderos y bosques del Zagaia Resort.',
    includedItems: ['Acompañamiento de monitor', 'Equipo de seguridad (casco)', 'Entrenamiento inicial'],
    keywords: ['cuatriciclo', 'zagaia', 'aventura', 'barro', 'sendero'],
    categories: [adventureEs],
    recommendedFor: []
};
