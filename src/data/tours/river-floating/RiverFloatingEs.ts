import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/flutuacao-rio-miranda/img1.webp`

export const riverFloatingEs: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio-miranda',
  name: 'Flotación en el Río',
  description: [
     'Un relajante descenso en bote o con flotador por las tranquilas aguas del río, permitiendo una perspectiva única de la vegetación y los sonidos de la naturaleza.'
  ],
  mainImage: img,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipo de flotación', 'Guía'],
  keywords: ['flotación', 'río', 'relajarse'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: miranda
};