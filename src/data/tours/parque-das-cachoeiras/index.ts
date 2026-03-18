import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/parque-das-cachoeiras/img1.jpg`

const commonData = {
  id: 'TOUR-PC-01',
  slug: 'parque-das-cachoeiras',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.WATERFALL, EnvironmentType.RIVER],
  city: bonito
};

export const parqueDasCachoeirasPt: Tour = {
    ...commonData,
    name: 'Parque das Cachoeiras',
    description: [
        'O Parque das Cachoeiras oferece um percurso encantador com sete belíssimas cachoeiras formadas pelas águas do Rio Mimoso.',
        'Durante a caminhada interpretativa de 1.700m na mata ciliar, o visitante desfruta de revigorantes pontos de banho e paisagens exuberantes.',
        'A estrutura do atrativo proporciona conforto e segurança para todas as idades, contando com uma exclusiva piscina de borda infinita e área de balneário.',
        'Idade mínima: Livre (até 5 anos acompanhados). É um local ideal para quem busca descanso do corpo e da mente em meio à natureza.'
    ],
    shortDescription: 'Caminhada de 1.700m com 7 cachoeiras no Rio Mimoso e piscina de borda infinita.',
    includedItems: ['Acesso às 7 cachoeiras', 'Uso da piscina de borda infinita', 'Área de balneário', 'Acompanhamento de guia'],
    keywords: ['parque das cachoeiras', 'cachoeiras', 'rio mimoso', 'piscina infinita', 'balneario', 'bonito'],
    categories: [trailsWaterfallsPt, resortsPt],
    recommendedFor: []
};

export const parqueDasCachoeirasEn: Tour = {
    ...commonData,
    name: 'Parque das Cachoeiras (Waterfall Park)',
    description: [
        'Parque das Cachoeiras offers an enchanting route with seven beautiful waterfalls formed by the waters of the Mimoso River.',
        'During the 1,700m interpretive walk in the riparian forest, visitors enjoy invigorating swimming spots and exuberant landscapes.',
        'The attraction\'s structure provides comfort and safety for all ages, featuring an exclusive infinity pool and a resort area (balneário).',
        'Minimum age: Free (up to 5 years old accompanied). It is an ideal place for those seeking rest for body and mind in the midst of nature.'
    ],
    shortDescription: '1,700m walk with 7 waterfalls on the Mimoso River and an infinity pool.',
    includedItems: ['Access to 7 waterfalls', 'Use of infinity pool', 'Resort area', 'Guide accompaniment'],
    keywords: ['waterfall park', 'waterfalls', 'mimoso river', 'infinity pool', 'resort', 'bonito'],
    categories: [trailsWaterfallsEn, resortsEn],
    recommendedFor: []
};

export const parqueDasCachoeirasEs: Tour = {
    ...commonData,
    name: 'Parque das Cachoeiras (Parque de las Cascadas)',
    description: [
        'Parque das Cachoeiras ofrece un recorrido encantador con siete hermosas cascadas formadas por las aguas del río Mimoso.',
        'Durante la caminata interpretativa de 1.700 m en el bosque de ribera, el visitante disfruta de vigorizantes puntos de baño y paisajes exuberantes.',
        'La estructura del atractivo brinda comodidad y seguridad para todas las edades, contando con una exclusiva piscina de borde infinito y área de balneario.',
        'Edad mínima: Libre (hasta 5 años acompañados). Es un lugar ideal para quienes buscan el descanso del cuerpo y la mente en medio de la naturaleza.'
    ],
    shortDescription: 'Caminata de 1.700m con 7 cascadas en el río Mimoso y piscina de borde infinito.',
    includedItems: ['Acceso a las 7 cascadas', 'Uso de piscina de borde infinito', 'Área de balneario', 'Acompañamiento de guía'],
    keywords: ['parque de las cascadas', 'cascadas', 'rio mimoso', 'piscina infinita', 'balneario', 'bonito'],
    categories: [trailsWaterfallsEs, resortsEs],
    recommendedFor: []
};
