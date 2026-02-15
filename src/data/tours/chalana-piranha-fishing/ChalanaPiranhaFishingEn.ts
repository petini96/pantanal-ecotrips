import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';


const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingEn: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Chalana Boat Trip with Piranha Fishing',
  description: [
    'Carried out in the Corixo São Domingos, a branch of the Miranda River. During the tour it is possible to observe the riparian fauna and flora and perform artisanal piranha fishing. Approximate duration of 2:00 hours.'
  ],
  shortDescription: 'Chalana boat tour in Corixo São Domingos with artisanal piranha fishing and fauna observation.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Chalana Boat', 'Fishing equipment', 'Guide'],
  keywords: ['chalana', 'fishing', 'piranha', 'miranda river', 'corixo'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};
