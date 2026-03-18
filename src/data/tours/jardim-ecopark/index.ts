import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/jardim-ecopark/img1.webp`

const commonData = {
  id: 'TOUR-JEP-01',
  slug: 'jardim-ecopark',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '35km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: jardim
};

export const jardimEcoparkPt: Tour = {
    ...commonData,
    name: 'Jardim Ecopark (Balneário)',
    description: [
        'Localizado às margens do Rio da Prata, o Jardim Ecopark é um balneário que une lazer e preservação ambiental.',
        'O local oferece águas cristalinas com abundância de peixes, perfeitas para banho e contemplação da fauna aquática.',
        'Ideal para famílias, o espaço conta com infraestrutura de restaurante, quiosques, áreas de descanso e redário.',
        'O balneário proporciona um ambiente tranquilo e seguro para aproveitar o dia inteiro em contato com as belezas naturais de Jardim. Idade mínima: Livre.'
    ],
    shortDescription: 'Lazer e banho em águas cristalinas no Rio da Prata com infraestrutura completa.',
    includedItems: ['Acesso ao balneário', 'Uso das áreas comuns', 'Áreas de banho no rio', 'Estacionamento'],
    keywords: ['jardim ecopark', 'balneario', 'rio da prata', 'jardim', 'banho', 'familia'],
    categories: [resortsPt],
    recommendedFor: []
};

export const jardimEcoparkEn: Tour = {
    ...commonData,
    name: 'Jardim Ecopark (Resort/Beach)',
    description: [
        'Located on the banks of the Rio da Prata, Jardim Ecopark is a resort that combines leisure and environmental preservation.',
        'The site offers crystal-clear waters with an abundance of fish, perfect for swimming and contemplating aquatic fauna.',
        'Ideal for families, the space features restaurant infrastructure, kiosks, resting areas, and a hammock area.',
        'The resort provides a peaceful and safe environment to enjoy the entire day in contact with the natural beauties of Jardim. Minimum age: Free.'
    ],
    shortDescription: 'Leisure and swimming in crystal-clear waters in the Rio da Prata with complete infrastructure.',
    includedItems: ['Resort access', 'Use of common areas', 'River bathing areas', 'Parking'],
    keywords: ['jardim ecopark', 'resort', 'rio da prata', 'jardim', 'swimming', 'family'],
    categories: [resortsEn],
    recommendedFor: []
};

export const jardimEcoparkEs: Tour = {
    ...commonData,
    name: 'Jardim Ecopark (Balneario)',
    description: [
        'Ubicado a orillas del río da Prata, el Jardim Ecopark es un balneario que combina ocio y preservación ambiental.',
        'El lugar ofrece aguas cristalinas con abundancia de peces, perfectas para nadar y contemplar la fauna acuática.',
        'Ideal para familias, el espacio cuenta con infraestructura de restaurante, quioscos, zonas de descanso y zona de hamacas.',
        'El balneario ofrece un entorno tranquilo y seguro para disfrutar todo el día en contacto con las bellezas naturales de Jardim. Edad mínima: Libre.'
    ],
    shortDescription: 'Ocio y baño en aguas cristalinas en el río da Prata con infraestructura completa.',
    includedItems: ['Acceso al balneario', 'Uso de áreas comunes', 'Zonas de baño en el río', 'Estacionamiento'],
    keywords: ['jardim ecopark', 'balneario', 'rio da prata', 'jardim', 'baño', 'familia'],
    categories: [resortsEs],
    recommendedFor: []
};
