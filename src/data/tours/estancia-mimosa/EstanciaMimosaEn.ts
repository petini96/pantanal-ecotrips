import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';


const img = `${TOURS_BUCKET_NAME}/estancia-mimosa/img1.webp`

export const estanciaMimosaEn: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estância Mimosa',
  description: [
    'The reception is an original farm headquarters house and lunch is prepared and served on the wood stove, with diversity of regional dishes and homemade sweets.',
    'The tour starts with a walk along a trail of approx. 2,800m (round trip) through the riparian forest of the Mimoso River, passing through 10 waterfalls of varied sizes and shapes with 9 stops for swimming in their natural pools and a diving platform.',
    'During the way, suspended walkway, lookouts, rowboat, in addition to an exuberant fauna and flora that make up the photographic scenario. Limited groups: 12 people.'
  ],
  shortDescription: 'Trail with waterfalls, natural pools, jumping platform and lunch at a typical farm.',
  mainImage: img,
  durationInHours: 4,
  minAge: 3,
  distanceFromCity: '24km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Guide accompaniment', 'Life vest', 'Lunch', 'Insurance'],
  keywords: ['waterfall', 'trail', 'river swimming', 'boat', 'farm'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};

