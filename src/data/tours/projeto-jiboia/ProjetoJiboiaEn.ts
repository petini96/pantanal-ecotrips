import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums'; // Removed unused EnvironmentType
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/projeto-jiboia/img1.webp`

export const projetoJiboiaEn: Tour = {
  id: 'TOUR-PJ-01',
  slug: 'projeto-jiboia',
  name: 'Projeto Jiboia (Boa Constrictor Project)',
  description: [
    'A great night option is the Jiboia Project. The main objective of the work is to demystify non-venomous snakes, as well as an environmental education work.',
    'It happens daily at 7:00 pm only with prior scheduling. (The presentation is in Portuguese).',
    'Use of camera is only allowed at the end of the presentation.'
  ],
  shortDescription: 'Educational and interactive lecture about snakes and environmental education.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'Center',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Lecture', 'Photo with Boa (optional)'],
  keywords: ['environmental education', 'snakes', 'night'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: bonito
};
