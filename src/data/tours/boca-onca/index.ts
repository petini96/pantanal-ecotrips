import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { groupsPt } from '../../audiences/groups';
import { adventurePt } from '../../categories/adventuree';
import { aquaticPt } from '../../categories/aquaticc';
import { ecotourismPt } from '../../categories/ecotourismm';
import { couplesEn } from '../../audiences/couples';
import { groupsEn } from '../../audiences/groups';
import { adventureEn } from '../../categories/adventuree';
import { aquaticEn } from '../../categories/aquaticc';
import { ecotourismEn } from '../../categories/ecotourismm';
import { couplesEs } from '../../audiences/couples';
import { groupsEs } from '../../audiences/groups';
import { adventureEs } from '../../categories/adventuree';
import { aquaticEs } from '../../categories/aquaticc';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/boca-onca/img3.webp`

const commonData = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca-em-bonito',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '59km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const bocaDaOncaPt: Tour = {
    ...commonData,
    name: 'Boca da Onça Ecotour',
    description: [
        'A caminhada inicia-se na mata ciliar do Rio Salobra e percorre 4 km de trilha em meio a vegetação preservada. No trajeto, o visitante conhece 8 cachoeiras e tem 4 paradas para banho em piscinas naturais de águas cristalinas, além da Cachoeira Boca da Onça, com 156 metros de altura, a mais alta do estado.',
        'Na volta, a escadaria de 886 degraus, revela a mais bela vista do Cânion do Rio Salobra. O almoço é servido no receptivo com cardápio variado e comidas típicas.',
        'O receptivo dispõe de duas piscinas de água corrente com peixes, hidromassagem, ducha natural, vestiários, loja de souvenirs, bar e restaurante.'
    ],
    shortDescription: 'Caminhada por trilha de 4km passando por 8 cachoeiras, incluindo a Boca da Onça (mais alta do MS), com piscinas naturais e infraestrutura completa.',
    includedItems: ['Almoço', 'Acompanhamento de guia', 'Seguro acidente'],
    keywords: ['boca da onça', 'cachoeira', 'trilha', 'canyon'],
    categories: [adventurePt, ecotourismPt, aquaticPt],
    recommendedFor: [groupsPt, couplesPt]
};

export const bocaDaOncaEn: Tour = {
    ...commonData,
    name: 'Boca da Onça Ecotour',
    description: [
        'The walk starts in the riparian forest of the Salobra River and travels 4 km of trail amidst preserved vegetation. On the way, the visitor knows 8 waterfalls and has 4 stops for swimming in natural pools of crystal clear water, in addition to the Boca da Onça Waterfall, with 156 meters high, the highest in the state.',
        'On the way back, the staircase of 886 steps, reveals the most beautiful view of the Salobra River Canyon. Lunch is served at the reception with a varied menu and typical foods.',
        'The reception has two running water pools with fish, whirlpool, natural shower, changing rooms, souvenir shop, bar and restaurant.'
    ],
    shortDescription: '4km trail walk passing 8 waterfalls, including Boca da Onça (highest in MS), with natural pools and complete infrastructure.',
    includedItems: ['Lunch', 'Guide accompaniment', 'Accident insurance'],
    keywords: ['boca da onça', 'waterfall', 'trail', 'canyon'],
    categories: [adventureEn, ecotourismEn, aquaticEn],
    recommendedFor: [groupsEn, couplesEn]
};

export const bocaDaOncaEs: Tour = {
    ...commonData,
    name: 'Boca da Onça Ecotour',
    description: [
        'La caminata se inicia en el bosque de galería del Río Salobra y recorre 4 km de sendero en medio a vegetación preservada. En el trayecto, el visitante conoce 8 cascadas y tiene 4 paradas para baño en piscinas naturales de aguas cristalinas, además de la Cascada Boca da Onça, con 156 metros de altura, la más alta del estado.',
        'En la vuelta, la escalera de 886 peldaños, revela la más bella vista del Cañón del Río Salobra. El almuerzo es servido en la recepción con menú variado y comidas típicas.',
        'La recepción dispone de dos piscinas de agua corriente con peces, hidromasaje, ducha natural, vestuarios, tienda de souvenirs, bar y restaurante.'
    ],
    shortDescription: 'Caminata por sendero de 4km pasando por 8 cascadas, incluida Boca da Onça (la más alta de MS), con piscinas naturales e infraestructura completa.',
    includedItems: ['Almuerzo', 'Acompañamiento de guía', 'Seguro de accidentes'],
    keywords: ['boca da onça', 'cascada', 'sendero', 'cañón'],
    categories: [adventureEs, ecotourismEs, aquaticEs],
    recommendedFor: [groupsEs, couplesEs]
};
