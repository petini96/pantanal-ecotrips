import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/rio-do-peixe/img1.webp`

export const rioDoPeixeEn: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'rio-do-peixe',
  name: 'Rio do Peixe',
  description: [
    'Fascinating walk at Água Viva Farm. There are several waterfalls, natural pools and schools of fish.',
    'Highlight for the zip line jump and the jumping platform at Poção Waterfall. Pantanal lunch included.',
    'Relaxing and fun tour, great for all ages.'
  ],
  shortDescription: 'Trail with incredible waterfalls, lots of fish and Pantanal lunch.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Lunch', 'Guide accompaniment', 'Access to waterfalls'],
  keywords: ['waterfalls', 'fish', 'farm', 'lunch'],
  categories: [ecotourismEn, aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
