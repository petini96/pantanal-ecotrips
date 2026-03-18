import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/boia-cross/img1.webp`

const commonData = {
  id: 'TOUR-BCRF-01',
  slug: 'boia-cross-rio-formoso',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 7,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const boiaCrossRioFormosoPt: Tour = {
    ...commonData,
    name: 'Boia Cross (Rio Formoso)',
    description: [
        'Aventura divertida e segura nas águas cristalinas do Rio Formoso.',
        'O passeio começa com uma caminhada contemplativa de 900m por trilhas na mata ciliar até o ponto de descida.',
        'A descida de 1.200m é feita em boias individuais, passando por pequenas cachoeiras e corredeiras emocionantes.',
        'Idade mínima: 07 anos. Peso máximo: 120 kg. É obrigatório o acompanhamento de instrutores especializados.'
    ],
    shortDescription: 'Descida de 1.200m pelo Rio Formoso em boias individuais passando por corredeiras.',
    includedItems: ['Acompanhamento de instrutor', 'Boia individual', 'Equipamento de segurança (colete)'],
    keywords: ['boia cross', 'rio formoso', 'aventura', 'água', 'corredeiras'],
    categories: [adventurePt],
    recommendedFor: []
};

export const boiaCrossRioFormosoEn: Tour = {
    ...commonData,
    name: 'Boia Cross / Tubing (Rio Formoso)',
    description: [
        'Fun and safe adventure in the crystal clear waters of the Formoso River.',
        'The tour starts with a 900m contemplative walk through trails in the riparian forest to the drop-off point.',
        'The 1,200m descent is made in individual tubes, passing through small waterfalls and exciting rapids.',
        'Minimum age: 07 years old. Maximum weight: 120 kg. Accompaniment by specialized instructors is mandatory.'
    ],
    shortDescription: '1,200m descent down the Formoso River in individual tubes passing through rapids.',
    includedItems: ['Instructor accompaniment', 'Individual tube', 'Safety equipment (life vest)'],
    keywords: ['boia cross', 'tubing', 'rio formoso', 'adventure', 'water', 'rapids'],
    categories: [adventureEn],
    recommendedFor: []
};

export const boiaCrossRioFormosoEs: Tour = {
    ...commonData,
    name: 'Boia Cross (Rio Formoso)',
    description: [
        'Aventura divertida y segura en las aguas cristalinas del río Formoso.',
        'El recorrido comienza con una caminata contemplativa de 900 m por senderos en el bosque de ribera hasta el punto de descenso.',
        'El descenso de 1.200 m se realiza en boyas individuales, pasando por pequeñas cascadas y emocionantes rápidos.',
        'Edad mínima: 07 años. Peso máximo: 120 kg. Es obligatorio el acompañamiento de instructores especializados.'
    ],
    shortDescription: 'Descenso de 1.200m por el río Formoso en boyas individuales pasando por rápidos.',
    includedItems: ['Acompañamiento de instructor', 'Boya individual', 'Equipo de seguridad (chaleco)'],
    keywords: ['boia cross', 'tubing', 'rio formoso', 'aventura', 'agua', 'rápidos'],
    categories: [adventureEs],
    recommendedFor: []
};
