import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { contemplationPt, contemplationEn, contemplationEs } from "src/data/categories/contemplation";
const img = `${TOURS_BUCKET_NAME}/bio-park/img1.webp`

const commonData = {
  id: 'TOUR-BP-01',
  slug: 'bio-park',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  city: bonito
};

export const bioParkPt: Tour = {
    ...commonData,
    name: 'Bio Park',
    description: [
        'O Bio Park é um abrigo de fauna silvestre aberto à visitação, que participa de importantes projetos de conservação de espécies em extinção como o lobo guará e a anta.',
        'O roteiro da visita, conduzido por um guia, apresenta os animais que não tem condiciones de voltar à natureza e a história de cada um, despertando a sensibilização ambiental.',
        'Uma verdadeira aula de conhecimento e respeito a natureza.'
    ],
    shortDescription: 'Refúgio de animais silvestres e fazendinha de mini animais.',
    includedItems: ['Acompanhamento de guia'],
    keywords: ['animais', 'abrigo', 'educacao', 'fazendinha'],
    categories: [contemplationPt],
    recommendedFor: [familiesPt]
};

export const bioParkEn: Tour = {
    ...commonData,
    name: 'Bio Park',
    description: [
        'Bio Park is a wildlife shelter open to visitation, which participates in important conservation projects for endangered species such as the maned wolf and the tapir.',
        'The visit itinerary, conducted by a guide, presents the animals that are unable to return to nature and the story of each one, awakening environmental awareness.',
        'A true lesson of knowledge and respect for nature.'
    ],
    shortDescription: 'Refuge for wild animals and petting zoo with mini animals.',
    includedItems: ['Guide accompaniment'],
    keywords: ['animals', 'shelter', 'education', 'petting zoo'],
    categories: [contemplationEn],
    recommendedFor: [familiesEn]
};

export const bioParkEs: Tour = {
    ...commonData,
    name: 'Bio Park',
    description: [
        'El Bio Park es un refugio de fauna silvestre abierto a la visita, que participa en importantes proyectos de conservación de especies en extinción como el lobo de crin y el tapir.',
        'El itinerario de la visita, conducido por un guía, presenta los animales que no tienen condiciones de volver a la naturaleza y la historia de cada una, despertando la sensibilización ambiental.',
        'Una verdadera clase de conocimiento y respeto a la naturaleza.'
    ],
    shortDescription: 'Refugio de animales silvestres y granjita de mini animales.',
    includedItems: ['Acompañamiento de guía'],
    keywords: ['animales', 'refugio', 'educación', 'granjita'],
    categories: [contemplationEs],
    recommendedFor: [familiesEs]
};
