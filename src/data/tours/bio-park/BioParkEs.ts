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
    'El Bio Park es un refugio de fauna silvestre abierto a la visita, que participa en importantes proyectos de conservación de especies en extinción como el lobo de crin y el tapir.',
    'El itinerario de la visita, conducido por un guía, presenta los animales que no tienen condiciones de volver a la naturaleza y la historia de cada una, despertando la sensibilización ambiental.',
    'Una verdadera clase de conocimiento y respeto a la naturaleza.'
  ],
  shortDescription: 'Refugio de animales silvestres y granjita de mini animales.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Acompañamiento de guía'],
  keywords: ['animales', 'refugio', 'educación', 'granjita'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: bonito
};
