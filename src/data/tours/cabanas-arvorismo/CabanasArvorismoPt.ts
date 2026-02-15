import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { groupsPt } from '../../audiences/groups/GroupsPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';


const img = `${TOURS_BUCKET_NAME}/cabanas-arvorismo/img1.jpg`

export const cabanasArvorismoPt: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Arvorismo',
  description: [
    'O Arvorismo Cabanas é um percurso com 300 metros de extensão e altura variando de 4 a 15 metros. O visitante passa por 20 atividades diferentes, e duas tirolesas, sendo a última uma tirolesa aquática no Rio Formoso.'
  ],
  shortDescription: 'Percurso de arvorismo com 300m e 20 estações, incluindo tirolesas e tirolesa aquática no Rio Formoso.',
  mainImage: img,
  durationInHours: 3,
  minAge: 6,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Equipamentos de segurança (arnês, capacete)', 'Treinamento', 'Guia'],
  keywords: ['arvorismo', 'tirolesa', 'aventura', 'rio formoso'],
  categories: [adventurePt],
  recommendedFor: [familiesPt, groupsPt],
  city: bonito
};
