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
    'Una charla educativa y divertida sobre serpientes, desmitificando miedos y mostrando su importancia en la naturaleza.',
    'Al final, es posible tomarse una foto con una boa constrictor en los hombros (opcional).',
    'Actividad nocturna, ideal para realizar después de los paseos del día.'
  ],
  shortDescription: 'Charla educativa e interactiva sobre serpientes y educación ambiental.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'Centro',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Charla', 'Foto con Boa (opcional)'],
  keywords: ['educación ambiental', 'serpientes', 'nocturno'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: bonito
};
