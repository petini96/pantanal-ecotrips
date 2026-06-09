import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { pocone } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { ecologicalTrailsPt, ecologicalTrailsEn, ecologicalTrailsEs } from 'src/data/categories/ecological-trails';
import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';

const img = `${TOURS_BUCKET_NAME}/pantanal-birding-norte/img1.webp`;

const commonData = {
  id: 'TOUR-PCN-PBN-01',
  slug: 'pantanal-birding-transpantaneira',
  mainImage: img,
  durationInHours: 4,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: pocone,
};

export const pantanalBirdingNortePt: Tour = {
  ...commonData,
  name: 'Pantanal Birding',
  description: [
    'O Pantanal Norte abriga uma das maiores diversidades de aves do planeta, com mais de 650 espécies registradas ao longo da Transpantaneira e arredores de Poconé. Tuiuiús, araras-azuis, garças, colhereiros, socós e papagaios são apenas algumas das espécies facilmente observáveis ao amanhecer.',
    'O roteiro de birding percorre trilhas e margens de rios com guias ornitólogos, utilizando binóculos e lista de espécies para identificação em campo. O período ideal é a seca (julho a setembro), quando as aves se concentram ao redor das poucas fontes de água — oferecendo avistamentos excepcionais.',
  ],
  shortDescription: 'Roteiro de observação de aves no Pantanal Norte, percorrendo a Transpantaneira com guia ornitólogo e mais de 650 espécies possíveis.',
  includedItems: ['Guia ornitólogo especializado', 'Binóculos (se necessário)', 'Lista de aves da região'],
  keywords: ['birding', 'observação de aves', 'pantanal norte', 'transpantaneira', 'tuiuiú', 'araras azuis', 'ornitologia'],
  categories: [pantanalPt, ecologicalTrailsPt],
  recommendedFor: [],
};

export const pantanalBirdingNorteEn: Tour = {
  ...commonData,
  name: 'Pantanal Birding',
  description: [
    'The Northern Pantanal is home to one of the greatest bird diversities on the planet, with over 650 species recorded along the Transpantaneira and surrounding areas of Poconé. Jabiru storks, hyacinth macaws, herons, roseate spoonbills and parrots are just some of the species easily observed at dawn.',
    'The birding route follows trails and riverbanks with ornithologist guides, using binoculars and species checklists for field identification. The ideal season is the dry period (July to September), when birds concentrate around the few water sources — providing exceptional sightings.',
  ],
  shortDescription: 'Birdwatching tour in the Northern Pantanal along the Transpantaneira, guided by an ornithologist with over 650 possible species.',
  includedItems: ['Specialized ornithologist guide', 'Binoculars (if needed)', 'Regional bird checklist'],
  keywords: ['birding', 'birdwatching', 'northern pantanal', 'transpantaneira', 'jabiru', 'hyacinth macaw', 'ornithology'],
  categories: [pantanalEn, ecologicalTrailsEn],
  recommendedFor: [],
};

export const pantanalBirdingNorteEs: Tour = {
  ...commonData,
  name: 'Pantanal Birding',
  description: [
    'El Pantanal Norte alberga una de las mayores diversidades de aves del planeta, con más de 650 especies registradas a lo largo de la Transpantaneira y los alrededores de Poconé. Jabirús, guacamayos jacintos, garzas, espátulas rosadas y loros son solo algunas de las especies fácilmente observables al amanecer.',
    'El recorrido de birding transcurre por senderos y orillas de ríos con guías ornitólogos, utilizando binoculares y listas de especies para identificación en campo. La época ideal es la seca (julio a septiembre), cuando las aves se concentran alrededor de las escasas fuentes de agua, ofreciendo avistamientos excepcionales.',
  ],
  shortDescription: 'Recorrido de observación de aves en el Pantanal Norte por la Transpantaneira, guiado por un ornitólogo con más de 650 especies posibles.',
  includedItems: ['Guía ornitólogo especializado', 'Binoculares (si es necesario)', 'Lista de aves de la región'],
  keywords: ['birding', 'observación de aves', 'pantanal norte', 'transpantaneira', 'jabirú', 'guacamayo jacinto', 'ornitología'],
  categories: [pantanalEs, ecologicalTrailsEs],
  recommendedFor: [],
};
