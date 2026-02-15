import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';


const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingEs: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Paseo en Chalana con Pesca de Pirañas',
  description: [
    'Realizado en el Corixo São Domingos, un brazo del Río Miranda. Durante el paseo es posible observar la fauna y flora ribereña y realizar la pesca artesanal de pirañas. Duración aproximada de 2:00 horas.'
  ],
  shortDescription: 'Paseo en Chalana en el Corixo São Domingos con pesca artesanal de pirañas y observación de fauna.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipo de pesca', 'Guía'],
  keywords: ['chalana', 'pesca', 'piraña', 'río miranda', 'corixo'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};
