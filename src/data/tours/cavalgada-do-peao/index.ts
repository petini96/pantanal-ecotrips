import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/cavalgada-do-peao/img1.webp`

const commonData = {
  id: 'TOUR-CP-01',
  slug: 'cavalgada-do-peao',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 8,
  distanceFromCity: '16km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  city: bonito
};

export const cavalgadaDoPeaoPt: Tour = {
    ...commonData,
    name: 'Cavalgada do Peão',
    description: [
        'A Cavalgada do Peão oferece ao visitante uma encantadora experiência sobre a vida do homem do campo.',
        'Durante o percurso de aproximadamente 5km (cerca de 1h30), é possível contemplar as belezas da fauna e flora típicas do cerrado sul-mato-grossense.',
        'O passeio busca reviver a história das tradicionais comitivas pantaneiras, proporcionando um contato genuíno com a cultura local.',
        'Opções: Disponível em saídas diurnas e noturnas. Restrições: Idade mínima 08 anos. Peso máximo 120 kg. É necessário o uso de sapato fechado.'
    ],
    shortDescription: 'Experiência cultural e contemplativa revivendo as comitivas pantaneiras.',
    includedItems: ['Acompanhamento de guia', 'Cavalos treinados', 'Equipamento de montaria'],
    keywords: ['cavalgada', 'peao', 'cerrado', 'cultura', 'pantaneira', 'aventura'],
    categories: [adventurePt],
    recommendedFor: []
};

export const cavalgadaDoPeaoEn: Tour = {
    ...commonData,
    name: 'Cavalgada do Peão (Cowboy Horseback Ride)',
    description: [
        'Cavalgada do Peão offers visitors an enchanting experience about the life of a country man.',
        'During the approximately 5km route (about 1h30), it is possible to contemplate the beauties of the typical flora and fauna of the Mato Grosso do Sul cerrado.',
        'The tour seeks to relive the history of the traditional Pantaneiras cattle drives, providing genuine contact with local culture.',
        'Options: Available in daytime and nighttime departures. Restrictions: Minimum age 08 years old. Maximum weight 120 kg. Closed shoes are required.'
    ],
    shortDescription: 'Cultural and contemplative experience reliving the Pantaneira cattle drives.',
    includedItems: ['Guide accompaniment', 'Trained horses', 'Riding equipment'],
    keywords: ['horseback riding', 'cowboy', 'cerrado', 'culture', 'pantanal', 'adventure'],
    categories: [adventureEn],
    recommendedFor: []
};

export const cavalgadaDoPeaoEs: Tour = {
    ...commonData,
    name: 'Cabalgata del Peón',
    description: [
        'La Cabalgata del Peón ofrece al visitante una encantadora experiencia sobre la vida del hombre de campo.',
        'Durante el recorrido de aproximadamente 5 km (unas 1h30), es posible contemplar las bellezas de la fauna y flora típicas del cerrado de Mato Grosso do Sul.',
        'El recorrido busca revivir la historia de las tradicionales comitivas pantaneiras, brindando un contacto genuino con la cultura local.',
        'Opciones: Disponible en salidas diurnas y nocturnas. Restricciones: Edad mínima 08 años. Peso máximo 120 kg. Es necesario el uso de calzado cerrado.'
    ],
    shortDescription: 'Experiencia cultural y contemplativa reviviendo las comitivas pantaneiras.',
    includedItems: ['Acompañamiento de guía', 'Caballos entrenados', 'Equipo de equitación'],
    keywords: ['cabalgata', 'peon', 'cerrado', 'cultura', 'pantaneira', 'aventura'],
    categories: [adventureEs],
    recommendedFor: []
};
