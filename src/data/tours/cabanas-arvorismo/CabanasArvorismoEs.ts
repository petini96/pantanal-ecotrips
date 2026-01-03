import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { groupsEs } from '../../audiences/groups/GroupsEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';

const img = `${TOURS_BUCKET_NAME}/cabanas-arvorismo/img1.jpg`

export const cabanasArvorismoEs: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Arborismo',
  description: [
    'Recorrido de 300m con 20 estaciones y 2 tirolinas, con alturas de 4m a 15m. La última es una tirolina acuática en el río Formoso.'
  ],
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: '6,1km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Equipo de seguridad (arnés, casco)', 'Entrenamiento'],
  keywords: ['arborismo', 'tirolina', 'aventura', 'río formoso'],
  categories: [adventureEs],
  recommendedFor: [familiesEs, groupsEs],
  city: bonito
};