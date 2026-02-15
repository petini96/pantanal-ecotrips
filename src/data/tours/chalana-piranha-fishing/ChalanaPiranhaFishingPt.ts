import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';


const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingPt: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Passeio de Chalana com Pescaria de Piranhas',
  description: [
    'Realizado no Corixo São Domingos, um braço do Rio Miranda. Durante o passeio é possível observar a fauna e flora ribeirinha e realizar a pescaria artesanal de piranhas. Duração aproximada de 2:00 horas.'
  ],
  shortDescription: 'Passeio de Chalana no Corixo São Domingos com pescaria artesanal de piranhas e observação de fauna.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipamento de pesca', 'Guia'],
  keywords: ['chalana', 'pesca', 'piranha', 'rio miranda', 'corixo'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};
