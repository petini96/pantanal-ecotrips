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
    'A fascinating 4.5 km walk at Fazenda Água Viva, where you can enjoy and relax in waterfalls amidst schools of fish in natural pools and zip lining on the Olaria and do Peixe rivers.',
    'Considered a quiet trail for children, it has no age limit. 9 stops are made so you can refresh yourself in the crystal clear waters among them, 5 are beautiful waterfalls, 1 very special bathing spot surrounded by various little fish and, for the more adventurous, the property also provides 1 jumping platform at Cachoeira do Poção and 2 zip lines.',
    'After the delicious lunch that is famous in the region.'
  ],
  shortDescription: 'Trail with incredible waterfalls, lots of fish and Pantanal lunch.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Lunch', 'Guide accompaniment', 'Access to waterfalls'],
  keywords: ['waterfalls', 'fish', 'farm', 'lunch'],
  categories: [ecotourismEn, aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
