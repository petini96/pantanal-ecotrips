import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bodoquena } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/quadriciclo-da-serra/img1.webp`

const commonData = {
  id: 'TOUR-QS-01',
  slug: 'quadriciclo-da-serra',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 6,
  distanceFromCity: '74km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.WATERFALL],
  city: bodoquena
};

export const quadricicloDaSerraPt: Tour = {
    ...commonData,
    name: 'Quadriciclo da Serra (Bodoquena)',
    description: [
        'Excelente opção para quem busca aventura com segurança na Serra da Bodoquena.',
        'Em uma trilha de 6 km, você curtirá as belezas da região passando por vales, barreiros e mata fechada.',
        'O diferencial é o acesso exclusivo a uma linda cachoeira com parada para banho durante o percurso.',
        'Ao adquirir este passeio, os clientes ganham acesso ao balneário da Serra da Bodoquena. Para pilotar é necessário ter no mínimo 16 anos. Crianças a partir de 6 anos podem ir na garupa.'
    ],
    shortDescription: 'Trilha de 6km pela Serra da Bodoquena com parada em cachoeira exclusiva.',
    includedItems: ['Acesso ao balneário', 'Acompanhamento de monitor', 'Equipamento de segurança', 'Parada para banho'],
    keywords: ['quadriciclo', 'bodoquena', 'serra', 'aventura', 'cachoeira'],
    categories: [adventurePt],
    recommendedFor: []
};

export const quadricicloDaSerraEn: Tour = {
    ...commonData,
    name: 'Serra Quad Bike (Bodoquena)',
    description: [
        'An excellent option for those seeking adventure with safety in the Serra da Bodoquena.',
        'On a 6 km trail, you will enjoy the beauties of the region passing through valleys, mud pits, and closed forest.',
        'The highlights include exclusive access to a beautiful waterfall with a swimming stop during the route.',
        'By purchasing this tour, clients gain access to the Serra da Bodoquena resort (balneário). To ride you must be at least 16 years old. Children from 6 years old can go as passengers.'
    ],
    shortDescription: '6km trail through Serra da Bodoquena with a stop at an exclusive waterfall.',
    includedItems: ['Resort access', 'Monitor accompaniment', 'Safety equipment', 'Swimming stop'],
    keywords: ['atv', 'quad bike', 'bodoquena', 'mountain', 'adventure', 'waterfall'],
    categories: [adventureEn],
    recommendedFor: []
};

export const quadricicloDaSerraEs: Tour = {
    ...commonData,
    name: 'Cuatriciclo de la Sierra (Bodoquena)',
    description: [
        'Excelente opción para quienes buscan aventura con seguridad en la Serra da Bodoquena.',
        'En un sendero de 6 km, disfrutará de las bellezas de la región pasando por valles, barrizales y bosque cerrado.',
        'Lo más destacado es el acceso exclusivo a una hermosa cascada con parada para baño durante el recorrido.',
        'Al adquirir este tour, los clientes obtienen acceso al balneario de la Serra da Bodoquena. Para conducir se debe tener al menos 16 años. Los niños a partir de 6 años pueden ir como acompañantes.'
    ],
    shortDescription: 'Sendero de 6km por la Serra da Bodoquena con parada en una cascada exclusiva.',
    includedItems: ['Acceso al balneario', 'Acompañamiento de monitor', 'Equipo de seguridad', 'Parada para baño'],
    keywords: ['cuatriciclo', 'bodoquena', 'sierra', 'aventura', 'cascada'],
    categories: [adventureEs],
    recommendedFor: []
};
