import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';

import { floatingPt, floatingEn, floatingEs } from "src/data/categories/floating";
import { scubaDivingPt, scubaDivingEn, scubaDivingEs } from "src/data/categories/scuba-diving";
const img = `${TOURS_BUCKET_NAME}/gruta-do-mimoso/img1.jpg`

const commonData = {
  id: 'TOUR-GM-01',
  slug: 'gruta-do-mimoso',
  mainImage: img,
  durationInHours: 2,
  minAge: 8,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  city: bonito
};

export const grutaDoMimosoPt: Tour = {
    ...commonData,
    name: 'Gruta do Mimoso',
    description: [
        'Após ser equipado, o grupo iniciará a trilha autoguiada de 300 metros. O grupo contará com um deck onde receberá instruções sobre os equipamentos que utilizará na flutuação e também um treinamento prático, onde realizará a atividade, possibilitando assim total adaptação com o ambiente.',
        'Após o treinamento, o grupo descerá uma escadaria com 78 degraus (podendo alterar conforme o nível de água da caverna), seguindo para a área interna da caverna e dará início a flutuação onde poderá contemplar toda a Gruta do Mimoso e suas belíssimas formações geológicas.'
    ],
    shortDescription: 'Flutuação dentro de uma caverna com águas azuis e formações incríveis.',
    groupLimit: 10,
    includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Treinamento'],
    keywords: ['caverna', 'flutuação', 'gruta', 'mimoso'],
    categories: [floatingPt, scubaDivingPt],
    recommendedFor: [couplesPt, familiesPt]
};

export const grutaDoMimosoEn: Tour = {
    ...commonData,
    name: 'Gruta do Mimoso',
    description: [
        'After being equipped, the group will start the self-guided trail of 300 meters. The group will have a deck where they will receive instructions on the equipment they will use in the floating and also practical training, where they will perform the activity, thus enabling total adaptation to the environment.',
        'After the training, the group will descend a staircase with 78 steps (which may change according to the cave\'s water level), proceeding to the internal area of the cave and starting the floating where they can contemplate the entire Gruta do Mimoso and its beautiful geological formations.'
    ],
    shortDescription: 'Snorkeling inside a cave with blue waters and incredible formations.',
    groupLimit: 10,
    includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Training'],
    keywords: ['cave', 'snorkeling', 'grotto', 'mimoso'],
    categories: [floatingEn, scubaDivingEn],
    recommendedFor: [couplesEn, familiesEn]
};

export const grutaDoMimosoEs: Tour = {
    ...commonData,
    name: 'Gruta do Mimoso',
    description: [
        'Después de ser equipado, el grupo iniciará el sendero autoguiado de 300 metros. El grupo contará con un deck donde recibirá instrucciones sobre los equipos que utilizará en la flotación y también un entrenamiento práctico, donde realizará la actividad, posibilitando así total adaptación con el ambiente.',
        'Después del entrenamiento, el grupo descenderá una escalera con 78 escalones (pudiendo alterar conforme el nivel de agua de la caverna), siguiendo hacia el área interna de la caverna y dará inicio a la flotación donde podrá contemplar toda la Gruta do Mimoso y sus bellísimas formaciones geológicas.'
    ],
    shortDescription: 'Flotación dentro de una cueva con aguas azules y formaciones increíbles.',
    groupLimit: 10,
    includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Entrenamiento'],
    keywords: ['cueva', 'flotación', 'gruta', 'mimoso'],
    categories: [floatingEs, scubaDivingEs],
    recommendedFor: [couplesEs, familiesEs]
};
