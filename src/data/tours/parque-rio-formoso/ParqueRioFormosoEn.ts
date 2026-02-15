import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/parque-ecologico-rio-formoso/img1.webp`

export const parqueRioFormosoEn: Tour = {
  id: 'TOUR-PRF-01',
  slug: 'parque-rio-formoso',
  name: 'Rio Formoso Ecological Park',
  description: [
    'Located just 7km from the center, it gathers various activities such as Tubing (Boia Cross), Horseback Riding, Hiking and Arborism.',
    'It has a lagoon for swimming and relaxation (resort).',
    'Ideal for spending the day with the family with optional activities.'
  ],
  shortDescription: 'Park near the city with a lagoon for swimming and optional adventure activities.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Access to Lagoa Formosa (if Day Use)', 'Other activities charged separately'],
  keywords: ['lagoon', 'tubing', 'horseback riding', 'relax'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [familiesEn],
  city: bonito
};
