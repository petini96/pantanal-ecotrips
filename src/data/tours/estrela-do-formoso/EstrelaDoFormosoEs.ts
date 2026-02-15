import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

export const estrelaDoFormosoEs: Tour = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  name: 'Estrela do Formoso',
  description: [
    'Estrela do Formoso es el paseo ideal para todas las edades. Los senderos dentro y alrededor de la Isla, te llevan hasta 07 decks de baño en el principal río de la ciudad, el Río Formoso, conocido por sus aguas cristalinas y vida acuática pujante con peces de la especie piraputanga, curimba y dorado que transforman el agua en el escenario ideal para tomar “ese” baño refrescante.',
    'Además de toda la belleza natural, contamos con recepción, baños, área de descanso y estacionamiento. Para uso de los Pérgolas, consultar valores y disponibilidad. Hay opciones de paseo de Stand Up y Kayak, con duración media de 1h.'
  ],
  shortDescription: 'Balneario exclusivo con decks en el Río Formoso y ambiente privado.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acceso a los decks y senderos'],
  keywords: ['balneario', 'exclusivo', 'río formoso', 'decks'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
