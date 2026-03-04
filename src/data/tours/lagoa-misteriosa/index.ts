import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { adventurePt } from '../../categories/adventuree';
// Using adventure as it involves depth/diving context
import { aquaticPt } from '../../categories/aquaticc';
import { cavesPt } from '../../categories/cavess';
import { couplesEn } from '../../audiences/couples';
import { adventureEn } from '../../categories/adventuree';
import { aquaticEn } from '../../categories/aquaticc';
import { cavesEn } from '../../categories/cavess';
import { couplesEs } from '../../audiences/couples';
import { adventureEs } from '../../categories/adventuree';
import { aquaticEs } from '../../categories/aquaticc';
import { cavesEs } from '../../categories/cavess';

const img = `${TOURS_BUCKET_NAME}/lagoa-misteriosa/img1.webp`

const commonData = {
  id: 'TOUR-LM-01',
  slug: 'lagoa-misteriosa',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  distanceFromCity: '45km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  city: bonito
};

export const lagoaMisteriosaPt: Tour = {
    ...commonData,
    name: 'Lagoa Misteriosa',
    description: [
        'Começa com uma pequena trilha de 600m em meio à mata que circunda a dolina, conduzindo os visitantes até o mirante, de onde é possível contemplar toda a beleza da Lagoa.',
        'O acesso é feito através de uma escadaria de 179 degraus. Na flutuação a visão dos dois abismos azuis que formam o fundo da lagoa é impressionante.',
        'É um passeio sazonal (normalmente abre de abril até inicio de outubro). Não possui barco de apoio.'
    ],
    shortDescription: 'Flutuação em uma dolina de águas azuis profundas e misteriosas.',
    groupLimit: 10, // Dolina is cave-like
    includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação'],
    keywords: ['flutuação', 'dolina', 'profundidade', 'misterio'],
    categories: [aquaticPt, cavesPt, adventurePt],
    recommendedFor: [couplesPt]
};

export const lagoaMisteriosaEn: Tour = {
    ...commonData,
    name: 'Lagoa Misteriosa (Mysterious Lagoon)',
    description: [
        'Starts with a small trail of 600m through the forest surrounding the sinkhole, leading visitors to the lookout, from where it is possible to contemplate all the beauty of the Lagoon.',
        'Access is via a staircase of 179 steps. snorkeling, the view of the two blue abysses that form the bottom of the lagoon is impressive.',
        'It is a seasonal tour (usually open from April to early October). It does not have a support boat.'
    ],
    shortDescription: 'Snorkeling in a sinkhole of deep and mysterious blue waters.',
    groupLimit: 10,
    includedItems: ['Guide accompaniment', 'Snorkeling equipment'],
    keywords: ['snorkeling', 'sinkhole', 'depth', 'mystery'],
    categories: [aquaticEn, cavesEn, adventureEn],
    recommendedFor: [couplesEn]
};

export const lagoaMisteriosaEs: Tour = {
    ...commonData,
    name: 'Lagoa Misteriosa',
    description: [
        'Comienza con un pequeño sendero de 600m en medio del bosque que rodea la dolina, conduciendo a los visitantes hasta el mirador, desde donde es posible contemplar toda la belleza de la Laguna.',
        'El acceso se realiza a través de una escalera de 179 escalones. En la flotación, la visión de los dos abismos azules que forman el fondo de la laguna es impresionante.',
        'Es un paseo estacional (normalmente abre de abril hasta principios de octubre). No posee barco de apoyo.'
    ],
    shortDescription: 'Flotación en una dolina de aguas azules profundas y misteriosas.',
    groupLimit: 10,
    includedItems: ['Acompañamiento de guía', 'Equipos de flotación'],
    keywords: ['flotación', 'dolina', 'profundidad', 'misterio'],
    categories: [aquaticEs, cavesEs, adventureEs],
    recommendedFor: [couplesEs]
};
