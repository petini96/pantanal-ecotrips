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
     'Trail in the riparian forest of the Mimoso River with stops for swimming in waterfalls, natural pools, a diving platform, and a rowboat ride.'
  ],
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '22.6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Guide accompaniment', 'Life vest'],
  keywords: ['waterfall', 'trail', 'river swimming', 'boat'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};