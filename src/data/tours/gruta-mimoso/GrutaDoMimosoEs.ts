import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { cavesEs } from '../../categories/cavess/CavessEs';

const img = `${TOURS_BUCKET_NAME}/gruta-do-mimoso/img1.webp`

export const grutaDoMimosoEs: Tour = {
  id: 'TOUR-GM-01',
  slug: 'gruta-do-mimoso',
  name: 'Gruta do Mimoso',
  description: [
    'Después de ser equipado, el grupo iniciará el sendero autoguiado de 300 metros. El grupo contará con un deck donde recibirá instrucciones sobre los equipos que utilizará en la flotación y también un entrenamiento práctico, donde realizará la actividad, posibilitando así total adaptación con el ambiente.',
    'Después del entrenamiento, el grupo descenderá una escalera con 78 escalones (pudiendo alterar conforme el nivel de agua de la caverna), siguiendo hacia el área interna de la caverna y dará inicio a la flotación donde podrá contemplar toda la Gruta do Mimoso y sus bellísimas formaciones geológicas.'
  ],
  shortDescription: 'Flotación dentro de una cueva con aguas azules y formaciones increíbles.',
  mainImage: img,
  durationInHours: 2,
  minAge: 8,
  groupLimit: 10,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Entrenamiento'],
  keywords: ['cueva', 'flotación', 'gruta', 'mimoso'],
  categories: [cavesEs, aquaticEs],
  recommendedFor: [couplesEs, familiesEs],
  city: bonito
};
