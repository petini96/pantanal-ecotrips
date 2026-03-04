import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { ecotourismPt } from '../../categories/ecotourismm';
import { aquaticPt } from '../../categories/aquaticc';
import { familiesEn } from '../../audiences/families';
import { ecotourismEn } from '../../categories/ecotourismm';
import { aquaticEn } from '../../categories/aquaticc';
import { familiesEs } from '../../audiences/families';
import { ecotourismEs } from '../../categories/ecotourismm';
import { aquaticEs } from '../../categories/aquaticc';

const img = `${TOURS_BUCKET_NAME}/ceita-core/img1.webp`

const commonData = {
  id: 'TOUR-CC-01',
  slug: 'ceita-core',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  city: bonito
};

export const ceitaCorePt: Tour = {
    ...commonData,
    name: 'Ceita Corê',
    description: [
        'Na língua tupi-guarani Ceita Corê significa “Terra de meus filhos”. Trilha interpretativa por passarelas e pontes suspensas fazem o grupo apreciar os sons e se refrescar em cachoeiras e piscinas naturais, percurso de 4km na mata ciliar do rio Chapeninha, com parada para banho na cachoeira.',
        'E visitação na exótica nascente de águas cristalinas, que aguça a imaginação, pois é considerada uma das cavernas mais profundas do mundo, com vazão de 1300 lts. de água por segundo. Uso obrigatório de tênis.'
    ],
    shortDescription: 'Trilha com cachoeiras e visita à nascente misteriosa do Rio Chapeninha.',
    includedItems: ['Acompanhamento de guia', 'Almoço', 'Uso da infraestrutura'],
    keywords: ['cachoeiras', 'trilha', 'nascente', 'fazenda'],
    categories: [ecotourismPt, aquaticPt],
    recommendedFor: [familiesPt]
};

export const ceitaCoreEn: Tour = {
    ...commonData,
    name: 'Ceita Corê',
    description: [
        'In the Tupi-Guarani language Ceita Corê means “Land of my children”. Interpretive trail through walkways and suspension bridges make the group appreciate the sounds and refresh themselves in waterfalls and natural pools, a 4km route in the riparian forest of the Chapeninha river, with a stop for bathing in the waterfall.',
        'And visitation to the exotic spring of crystal clear waters, which stimulates the imagination, as it is considered one of the deepest caves in the world, with a flow rate of 1300 liters of water per second. Mandatory use of sneakers.'
    ],
    shortDescription: 'Trail with waterfalls and visit to the mysterious source of the Chapeninha River.',
    includedItems: ['Guide accompaniment', 'Lunch', 'Use of infrastructure'],
    keywords: ['waterfalls', 'trail', 'spring', 'farm'],
    categories: [ecotourismEn, aquaticEn],
    recommendedFor: [familiesEn]
};

export const ceitaCoreEs: Tour = {
    ...commonData,
    name: 'Ceita Corê',
    description: [
        'En la lengua tupi-guarani Ceita Corê significa “Tierra de mis hijos”. Sendero interpretativo por pasarelas y puentes colgantes hacen que el grupo aprecie los sonidos y se refresque en cascadas y piscinas naturales, recorrido de 4km en el bosque de galería del río Chapeninha, con parada para baño en la cascada.',
        'Y visita al exótico nacimiento de aguas cristalinas, que agudiza la imaginación, pues es considerada una de las cavernas más profundas del mundo, con caudal de 1300 lts. de agua por segundo. Uso obligatorio de zapatillas.'
    ],
    shortDescription: 'Sendero con cascadas y visita al nacimiento misterioso del Río Chapeninha.',
    includedItems: ['Acompañamiento de guía', 'Almuerzo', 'Uso de la infraestructura'],
    keywords: ['cascadas', 'sendero', 'nacimiento', 'estancia'],
    categories: [ecotourismEs, aquaticEs],
    recommendedFor: [familiesEs]
};
