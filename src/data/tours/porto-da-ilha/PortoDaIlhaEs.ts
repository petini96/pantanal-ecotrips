import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';

const img = `${TOURS_BUCKET_NAME}/porto-da-ilha/img1.webp`

export const portoDaIlhaEs: Tour = {
  id: 'TOUR-PI-01',
  slug: 'porto-da-ilha',
  name: 'Porto da Ilha (Eco Park)',
  description: [
    'Porto da Ilha – El Eco Park Porto da Ilha ofrece diferentes paseos acuáticos al aire libre y la oportunidad de apreciar las bellezas naturales del Río Formoso y su maravillosa fauna: peces, aves, mamíferos y cascadas increíbles, de aguas tranquilas y cristalinas.',
    'La estructura cuenta con restaurante, sanitarios y una serie de actividades (vendidas por separado).'
  ],
  shortDescription: 'Complejo de actividades acuáticas en el Río Formoso: Bote, Boia Cross y Balneario.',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acceso al balneario', 'Actividades contratadas (Bote, Boia Cross, etc)'],
  keywords: ['boia cross', 'bote', 'río formoso', 'balneario', 'duck'],
  categories: [aquaticEs, adventureEs],
  recommendedFor: [familiesEs],
  city: bonito
};
