import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/parque-ecologico-rio-formoso/img1.webp`

export const parqueRioFormosoEn: Tour = {
  id: 'TOUR-PRF-01',
  slug: 'parque-rio-formoso',
  name: 'Rio Formoso Ecological Park',
  description: [
    'Parque Ecológico Rio Formoso – With easy access, it is located 7 km from the city center and brings together various tours such as Boia Cross (Tubing), Horseback Riding, Trail and Adventure.',
    'It has a resort structure (Lagoon) next to the reception that has zipline, kayak and stand up paddle, available for use at additional cost, it is a beautiful and pleasant place to spend the day.'
  ],
  shortDescription: 'Park near the city with a lagoon for swimming and optional adventure activities.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Access to Lagoa Formosa (if Day Use)', 'Other activities charged separately'],
  keywords: ['lagoon', 'tubing', 'horseback riding', 'relax'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [familiesEn],
  city: bonito
};
