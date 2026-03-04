import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { seniorsPt } from '../../audiences/seniors';
import { ecotourismPt } from '../../categories/ecotourismm';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { seniorsEn } from '../../audiences/seniors';
import { ecotourismEn } from '../../categories/ecotourismm';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';
import { seniorsEs } from '../../audiences/seniors';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

const commonData = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  mainImage: img,
  durationInHours: 1,
  minAge: 0,
  distanceFromCity: '54km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  city: bonito
};

// PT-BR
export const buracoDasArarasPt: Tour = {
    ...commonData,
    name: 'Buraco das Araras',
    description: [
        'Em meio ao cerrado uma dolina (caverna cujo teto desabou), possibilitando contemplar de dois mirantes uma lagoa de água verde com aproximadamente 100m de profundidade, rodeada por vegetação exuberante que serve de moradia para araras vermelhas que abrigam-se nas fendas das rochas, além das araras também pdem ser vistas outras aves como: curicacas, carcarás, urubus, tucanos, periquitos, papagaios, gaviões e outras...',
        'Nos dois mirantes foram implantadas lunetas para facilitar a visualização e interpretação ambiental.'
    ],
    shortDescription: 'Contemplação de dolina com lagoa verde e observação de araras vermelhas e outras aves em seu habitat natural.',
    includedItems: ['Acompanhamento de guia'],
    keywords: ['araras', 'dolina', 'contemplação', 'pássaros', 'observação'],
    categories: [ecotourismPt],
    recommendedFor: [familiesPt, couplesPt, seniorsPt]
};

export const buracoDasArarasEn: Tour = {
    ...commonData,
    name: 'Macaw\'s Hole (Buraco das Araras)',
    description: [
        'Amidst the cerrado a doline (cave whose roof collapsed), allowing contemplating from two lookouts a green water lagoon approximately 100m deep, surrounded by exuberant vegetation that serves as home to red macaws that shelter in the cracks of the rocks, besides the macaws other birds can also be seen such as: curicacas, carcarás, vultures, toucans, parakeets, parrots, hawks and others...',
        'In the two lookouts telescopes were implanted to facilitate visualization and environmental interpretation.'
    ],
    shortDescription: 'Contemplation of doline with green lagoon and observation of red macaws and other birds in their natural habitat.',
    includedItems: ['Guide accompaniment'],
    keywords: ['macaws', 'doline', 'contemplation', 'birds', 'observation'],
    categories: [ecotourismEn],
    recommendedFor: [familiesEn, couplesEn, seniorsEn]
};

// ES
export const buracoDasArarasEs: Tour = {
    ...commonData,
    name: 'Buraco das Araras',
    description: [
        'En medio al cerrado una dolina (caverna cuyo techo se derrumbó), posibilitando contemplar de dos miradores una laguna de agua verde con aproximadamente 100m de profundidad, rodeada por vegetación exuberante que sirve de vivienda para guacamayos rojos que se abrigan en las grietas de las rocas, además de los guacamayos también pueden ser vistas otras aves como: curicacas, carcarás, buitres, tucanes, periquitos, loros, gavilanes y otras...',
        'En los dos miradores fueron implantados telescopios para facilitar la visualización e interpretación ambiental.'
    ],
    shortDescription: 'Contemplación de dolina con laguna verde y observación de guacamayos rojos y otras aves en su hábitat natural.',
    includedItems: ['Acompañamiento de guía'],
    keywords: ['guacamayos', 'dolina', 'contemplación', 'pájaros', 'observación'],
    categories: [ecotourismEs],
    recommendedFor: [familiesEs, couplesEs, seniorsEs]
};
