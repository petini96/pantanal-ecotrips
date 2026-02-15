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
    'Em meio ao cerrado uma dolina (caverna cujo teto desabou), possibilitando contemplar de dois mirantes uma lagoa de água verde com aproximadamente 100m de profundidade, rodeada por vegetação exuberante que serve de moradia para araras vermelhas que abrigam-se nas fendas das rochas, além das araras também pdem ser vistas outras aves como: curicacas, carcarás, urubus, tucanos, periquitos, papagaios, gaviões e outras...',
    'Nos dois mirantes foram implantadas lunetas para facilitar a visualização e interpretação ambiental.'
  ],
  shortDescription: 'Contemplação de dolina com lagoa verde e observação de araras vermelhas e outras aves em seu habitat natural.',
  mainImage: img,
  durationInHours: 1,
  minAge: 0,
  distanceFromCity: '54km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['araras', 'dolina', 'contemplação', 'pássaros', 'observação'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
  city: bonito
};

