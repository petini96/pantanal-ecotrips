import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { ecotourismPt } from '../../categories/ecotourismm';
import { familiesEn } from '../../audiences/families';
import { ecotourismEn } from '../../categories/ecotourismm';
import { familiesEs } from '../../audiences/families';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/projeto-jiboia/img1.jpg`

const commonData = {
  id: 'TOUR-PJ-01',
  slug: 'projeto-jiboia',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'Centro',
  difficulty: DifficultyLevel.EASY,
  environments: [],
  city: bonito
};

export const projetoJiboiaPt: Tour = {
    ...commonData,
    name: 'Projeto Jiboia',
    description: [
        'Uma ótima opção noturna é o Projeto Jiboia. O trabalho tem como principal objetivo a desmistificação das serpentes não peçonhentas, assim como um trabalho de educação ambiental.',
        'Ocorre diariamente às 19h00 apenas com agendamento prévio. (A apresentação é em Português).',
        'Uso de máquina fotográfica só é permitido no final da apresentação.'
    ],
    shortDescription: 'Palestra educativa e interativa sobre serpentes e educação ambiental.', // Urban/Indoor
    includedItems: ['Palestra', 'Foto com Jiboia (opcional)'],
    keywords: ['educação ambiental', 'cobras', 'noturno'],
    categories: [ecotourismPt],
    recommendedFor: [familiesPt]
};

export const projetoJiboiaEn: Tour = {
    ...commonData,
    name: 'Projeto Jiboia (Boa Constrictor Project)',
    description: [
        'A great night option is the Jiboia Project. The main objective of the work is to demystify non-venomous snakes, as well as an environmental education work.',
        'It happens daily at 7:00 pm only with prior scheduling. (The presentation is in Portuguese).',
        'Use of camera is only allowed at the end of the presentation.'
    ],
    shortDescription: 'Educational and interactive lecture about snakes and environmental education.', // Urban/Indoor
    includedItems: ['Lecture', 'Photo with Boa (optional)'],
    keywords: ['environmental education', 'snakes', 'night'],
    categories: [ecotourismEn],
    recommendedFor: [familiesEn]
};

export const projetoJiboiaEs: Tour = {
    ...commonData,
    name: 'Projeto Jiboia',
    description: [
        'Una gran opción nocturna es el Proyecto Jiboia. El trabajo tiene como principal objetivo la desmitificación de las serpientes no venenosas, así como un trabajo de educación ambiental.',
        'Ocurre diariamente a las 19:00 solo con agendamiento previo. (La presentación es en portugués).',
        'El uso de cámara fotográfica solo está permitido al final de la presentación.'
    ],
    shortDescription: 'Charla educativa e interactiva sobre serpientes y educación ambiental.', // Urban/Indoor
    includedItems: ['Charla', 'Foto con Boa (opcional)'],
    keywords: ['educación ambiental', 'serpientes', 'nocturno'],
    categories: [ecotourismEs],
    recommendedFor: [familiesEs]
};
