import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { seniorsEn } from '../../audiences/seniors/SeniorsEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';


const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

export const buracoDasArarasEn: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Macaw\'s Hole (Buraco das Araras)',
  description: [
    'Amidst the cerrado a doline (cave whose roof collapsed), allowing contemplating from two lookouts a green water lagoon approximately 100m deep, surrounded by exuberant vegetation that serves as home to red macaws that shelter in the cracks of the rocks, besides the macaws other birds can also be seen such as: curicacas, carcarás, vultures, toucans, parakeets, parrots, hawks and others...',
    'In the two lookouts telescopes were implanted to facilitate visualization and environmental interpretation.'
  ],
  shortDescription: 'Contemplation of doline with green lagoon and observation of red macaws and other birds in their natural habitat.',
  mainImage: img,
  durationInHours: 1,
  minAge: 0,
  distanceFromCity: '54km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment'],
  keywords: ['macaws', 'doline', 'contemplation', 'birds', 'observation'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn, couplesEn, seniorsEn],
  city: bonito
};
