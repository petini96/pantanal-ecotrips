import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/aquario-natural/img1.webp`

export const aquarioNaturalEs: Tour = {
  id: 'TOUR-AN-01',
  slug: 'aquario-natural',
  name: 'Aquário Natural',
  description: [
    'Comenzando con una caminata de aprox. 700m en el bosque de galería hasta el nacimiento del río Baía Bonita, donde se realiza la flotación de aprox. 800m apreciando la diversidad de peces y plantas subacuáticas.',
    'Al regreso por el sendero de los animales (aprox. 1.000m), el visitante podrá avistar aves y animales silvestres y saltar en la tirolesa en el encuentro de los ríos. El paseo cuenta con un barco de apoyo durante todo el recorrido.',
    'Hay restaurante en el atractivo, consumo pagado aparte.'
  ],
  shortDescription: 'Flotación en aguas cristalinas en el nacimiento del río Baía Bonita, con sendero y rica vida subacuática.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '8km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Equipos (máscara, snorkel, traje de neopreno)', 'Barco de apoyo'],
  keywords: ['flotación', 'peces', 'nacimiento', 'sendero', 'tirolesa'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
