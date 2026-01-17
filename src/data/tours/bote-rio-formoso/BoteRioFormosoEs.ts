import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { groupsEs } from '../../audiences/groups/GroupsEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img49.jpg`

export const boteRioFormosoEs: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Bote en el Río Formoso',
  description: ['Descenso de 6km en botes inflables por uno de los principales ríos de la región, pasando por tres cascadas, dos rápidos y con una parada para bañarse.'],
  shortDescription: 'Descenso de 6km en botes inflables por uno de los principales ríos de la región, pasando por tres cascadas, dos rápidos y con una parada para bañarse.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Chaleco salvavidas', 'Acompañamiento de guía'],
  keywords: ['bote', 'río formoso', 'rápidos', 'cascada'],
  categories: [aquaticEs, adventureEs],
  recommendedFor: [familiesEs, groupsEs],
  city: bonito
};

