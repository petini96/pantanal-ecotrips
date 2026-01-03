import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { seniorsPt } from '../../audiences/seniors/SeniorsPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

// PT-BR
export const buracoDasArarasPt: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Buraco das Araras',
  description: [
    'Uma enorme cratera em arenito (dolina) com 120m de profundidade, onde Araras Vermelhas e outros pássaros criaram seu habitat. Um passeio de contemplação e observação da fauna.'
  ],
  mainImage: img,
  durationInHours: 1,
  distanceFromCity: '58km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['araras', 'dolina', 'contemplação', 'pássaros', 'observação'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
  city: bonito
};