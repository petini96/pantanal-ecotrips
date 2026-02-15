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
    'Arvorismo Cabanas es un recorrido de 300 metros de longitud y altura que varía de 4 a 15 metros. El visitante pasa por 20 actividades diferentes, y dos tirolesas, siendo la última una tirolesa acuática en el Río Formoso.'
  ],
  shortDescription: 'Recorrido de arborismo con 300m y 20 estaciones, incluyendo tirolesas y tirolesa acuática en el Río Formoso.',
  mainImage: img,
  durationInHours: 3,
  minAge: 6,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Equipos de seguridad (arnés, casco)', 'Entrenamiento', 'Guía'],
  keywords: ['arborismo', 'tirolesa', 'aventura', 'río formoso'],
  categories: [adventureEs],
  recommendedFor: [familiesEs, groupsEs],
  city: bonito
};
