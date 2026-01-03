import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/pesca-piranha/img1.webp`

export const piranhaFishingEs: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Pesca de Pirañas',
  description: [
     'Una divertida y tradicional pesca de pirañas en las aguas del Pantanal, usando cañas de bambú. ¡Lo que pesques puede ser preparado para la cena!'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipo de pesca', 'Cebo', 'Acompañamiento de guía'],
  keywords: ['pesca', 'piraña', 'río', 'pantanal'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: miranda
};