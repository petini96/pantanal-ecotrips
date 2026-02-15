import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/bio-park/img1.webp`

export const bioParkEs: Tour = {
  id: 'TOUR-BP-01',
  slug: 'bio-park',
  name: 'Bio Park',
  description: [
    'Refugio de fauna silvestre que une conservación y educación ambiental. Animales que no pueden volver a la naturaleza encuentran hogar aquí.',
    'Posee también una granjita con mini animales para interacción con niños.',
    'Paseo ligero y educativo.'
  ],
  shortDescription: 'Refugio de animales silvestres y granjita de mini animales.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Acompañamiento de guía'],
  keywords: ['animales', 'refugio', 'educación', 'granjita'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: bonito
};
