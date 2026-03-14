import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';

import { contemplationPt, contemplationEn, contemplationEs } from "src/data/categories/contemplation";
const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

const commonData = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  city: bonito
};

export const grutaLagoAzulPt: Tour = {
    ...commonData,
    name: 'Gruta do Lago Azul',
    description: [
        'Após uma descida de 100 m, depara-se com um lago de águas intensamente azuladas, cujas dimensões a tornam uma das maiores cavidades inundadas do planeta.',
        'No interior da gruta, observam-se espeleotemas de diversas formas e tamanhos, como estalactites e estalagmites, além de fósseis de animais pré-históricos como a preguiça gigante e o tigre dentes de sabre, que viveram no período geológico do Pleistoceno (6.000 a 10.000 anos atrás).',
        'Obrigatório o uso de tênis.'
    ],
    shortDescription: 'Uma das maiores cavidades inundadas do planeta, com lago de águas azuis e fósseis pré-históricos. Cartão postal de Bonito.',
    includedItems: ['Acompanhamento de guia', 'Capacete de segurança'],
    keywords: ['gruta', 'lago', 'caverna', 'contemplação'],
    categories: [contemplationPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const grutaLagoAzulEn: Tour = {
    ...commonData,
    name: 'Gruta do Lago Azul',
    description: [
        'After a 100 m descent, you come across a lake of intensely blue waters, whose dimensions make it one of the largest flooded cavities on the planet.',
        'Inside the cave, speleothems of various shapes and sizes are observed, such as stalactites and stalagmites, as well as fossils of prehistoric animals such as the giant sloth and the saber-toothed tiger, which lived in the geological period of the Pleistocene (6,000 to 10,000 years ago).',
        'Mandatory use of sneakers.'
    ],
    shortDescription: 'One of the largest flooded cavities on the planet, with blue water lake and prehistoric fossils. Postcard of Bonito.',
    includedItems: ['Guide accompaniment', 'Safety helmet'],
    keywords: ['cave', 'lake', 'grotto', 'contemplation'],
    categories: [contemplationEn, contemplationEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const grutaLagoAzulEs: Tour = {
    ...commonData,
    name: 'Gruta del Lago Azul',
    description: [
        'Después de un descenso de 100 m, se encuentra con un lago de aguas intensamente azuladas, cuyas dimensiones la convierten en una de las mayores cavidades inundadas del planeta.',
        'En el interior de la gruta, se observan espeleotemas de diversas formas y tamaños, como estalactitas y estalagmitas, además de fósiles de animales prehistóricos como el perezoso gigante y el tigre dientes de sable, que vivieron en el período geológico del Pleistoceno (6.000 a 10.000 años atrás).',
        'Uso obligatorio de zapatillas.'
    ],
    shortDescription: 'Una de las mayores cavidades inundadas del planeta, con un lago de aguas azules y fósiles prehistóricos. Postal de Bonito.',
    includedItems: ['Acompañamiento de guía', 'Casco de seguridad'],
    keywords: ['gruta', 'lago', 'cueva', 'contemplación'],
    categories: [contemplationEs, contemplationEs],
    recommendedFor: [familiesEs, couplesEs]
};
