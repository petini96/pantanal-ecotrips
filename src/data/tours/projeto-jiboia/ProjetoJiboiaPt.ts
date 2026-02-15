import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/projeto-jiboia/img1.webp`

export const projetoJiboiaPt: Tour = {
  id: 'TOUR-PJ-01',
  slug: 'projeto-jiboia',
  name: 'Projeto Jiboia',
  description: [
    'Uma ótima opção noturna é o Projeto Jiboia. O trabalho tem como principal objetivo a desmistificação das serpentes não peçonhentas, assim como um trabalho de educação ambiental.',
    'Ocorre diariamente às 19h00 apenas com agendamento prévio. (A apresentação é em Português).',
    'Uso de máquina fotográfica só é permitido no final da apresentação.'
  ],
  shortDescription: 'Palestra educativa e interativa sobre serpentes e educação ambiental.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'Centro',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Palestra', 'Foto com Jiboia (opcional)'],
  keywords: ['educação ambiental', 'cobras', 'noturno'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: bonito
};
