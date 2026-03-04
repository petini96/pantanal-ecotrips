import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';

import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';

const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img4.jpg`

const commonData = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio-miranda',
  mainImage: img,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

export const riverFloatingPt: Tour = {
    ...commonData,
    name: 'Flutuação no Rio',
    description: [
        'Uma relaxante descida de bote ou "macarrão" flutuador pelas águas calmas do rio, permitindo uma perspectiva única da vegetação e sons da natureza.'
    ],
    shortDescription: 'Uma relaxante descida de bote ou "macarrão" flutuador pelas águas calmas do rio, permitindo uma perspectiva única da vegetação e sons da natureza.',
    includedItems: ['Equipamento de flutuação', 'Guia'],
    keywords: ['flutuação', 'rio', 'relaxar'],
    categories: [aquaticPt],
    recommendedFor: [familiesPt]
};

export const riverFloatingEn: Tour = {
    ...commonData,
    name: 'Floating Down the River',
    description: [
        'A relaxing descent in a small boat or with a "pool noodle" floater down the calm river waters, offering a unique perspective of the vegetation and sounds of nature.'
    ],
    shortDescription: 'A relaxing descent in a small boat or with a "pool noodle" floater down the calm river waters, offering a unique perspective of the vegetation and sounds of nature.',
    includedItems: ['Floating equipment', 'Guide'],
    keywords: ['floating', 'river', 'relax'],
    categories: [aquaticEn],
    recommendedFor: [familiesEn]
};

export const riverFloatingEs: Tour = {
    ...commonData,
    name: 'Flotación en el Río',
    description: [
        'Un relajante descenso en bote o con flotador por las tranquilas aguas del río, permitiendo una perspectiva única de la vegetación y los sonidos de la naturaleza.'
    ],
    shortDescription: 'Un relajante descenso en bote o con flotador por las tranquilas aguas del río, permitiendo una perspectiva única de la vegetación y los sonidos de la naturaleza.',
    includedItems: ['Equipo de flotación', 'Guía'],
    keywords: ['flotación', 'río', 'relajarse'],
    categories: [aquaticEs],
    recommendedFor: [familiesEs]
};
