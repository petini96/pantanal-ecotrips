import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums'; // Removed unused EnvironmentType
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/projeto-jiboia/img1.webp`

export const projetoJiboiaEs: Tour = {
  id: 'TOUR-PJ-01',
  slug: 'projeto-jiboia',
  name: 'Projeto Jiboia',
  description: [
    'Una gran opción nocturna es el Proyecto Jiboia. El trabajo tiene como principal objetivo la desmitificación de las serpientes no venenosas, así como un trabajo de educación ambiental.',
    'Ocurre diariamente a las 19:00 solo con agendamiento previo. (La presentación es en portugués).',
    'El uso de cámara fotográfica solo está permitido al final de la presentación.'
  ],
  shortDescription: 'Charla educativa e interactiva sobre serpientes y educación ambiental.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'Centro',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Charla', 'Foto con Boa (opcional)'],
  keywords: ['educación ambiental', 'serpientes', 'nocturno'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: bonito
};
