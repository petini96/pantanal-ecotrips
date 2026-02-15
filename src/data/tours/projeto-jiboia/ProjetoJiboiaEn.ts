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
    'An educational and fun lecture about snakes, demystifying fears and showing their importance in nature.',
    'At the end, it is possible to take a photo with a boa constrictor on your shoulders (optional).',
    'Night activity, ideal to do after the day tours.'
  ],
  shortDescription: 'Educational and interactive lecture about snakes and environmental education.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'Center',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Lecture', 'Photo with Boa (optional)'],
  keywords: ['environmental education', 'snakes', 'night'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: bonito
};
