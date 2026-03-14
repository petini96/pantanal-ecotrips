import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';
import { ecotourismPt } from '../../categories/ecotourismm';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { ecotourismEn } from '../../categories/ecotourismm';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/rio-sucuri/img1.jpg`

const commonData = {
  id: 'TOUR-RS-01',
  slug: 'rio-sucuri',
  mainImage: img,
  durationInHours: 4,
  minAge: 4,
  distanceFromCity: '19km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const rioSucuriPt: Tour = {
    ...commonData,
    name: 'Rio Sucuri',
    description: [
        'O transporte do atrativo levará os visitantes ao início da trilha de aprox. 500m, percorrida na mata ciliar levando o visitante até as nascentes do Rio Sucuri.',
        'Na flutuação por cerca de 1.500m, o visitante poderá apreciar a beleza da flora subaquática e interação com diversos cardumes de peixes.',
        'O passeio conta com um barco de apoio durante todo percurso. Possui Restaurante'
    ],
    shortDescription: 'Flutuação em uma das águas mais cristalinas do mundo.',
    groupLimit: 6,
    includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Barco de apoio'],
    keywords: ['flutuação', 'cristalina', 'peixes', 'rio sucuri'],
    categories: [aquaticPt, ecotourismPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const rioSucuriEn: Tour = {
    ...commonData,
    name: 'Rio Sucuri',
    description: [
        'The attraction transport will take visitors to the beginning of the trail of approx. 500m, covered in the riparian forest taking the visitor to the springs of the Rio Sucuri.',
        'In the floating for about 1,500m, the visitor will be able to appreciate the beauty of the underwater flora and interaction with several schools of fish.',
        'The tour has a support boat throughout the course. It has a Restaurant'
    ],
    shortDescription: 'Snorkeling in one of the clearest waters in the world.',
    groupLimit: 6,
    includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Support boat'],
    keywords: ['snorkeling', 'crystal clear', 'fish', 'rio sucuri'],
    categories: [aquaticEn, ecotourismEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const rioSucuriEs: Tour = {
    ...commonData,
    name: 'Rio Sucuri',
    description: [
        'El transporte del atractivo llevará a los visitantes al inicio del sendero de aprox. 500m, recorrido en el bosque de galería llevando al visitante hasta los nacimientos del Río Sucuri.',
        'En la flotación por cerca de 1.500m, el visitante podrá apreciar la belleza de la flora subaquática e interacción con diversos cardúmenes de peces.',
        'El paseo cuenta con un barco de apoyo durante todo el recorrido. Posee Restaurante'
    ],
    shortDescription: 'Flotación en una de las aguas más cristalinas del mundo.',
    groupLimit: 6,
    includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Barco de apoyo'],
    keywords: ['flotación', 'cristalina', 'peces', 'río sucuri'],
    categories: [aquaticEs, ecotourismEs],
    recommendedFor: [familiesEs, couplesEs]
};
