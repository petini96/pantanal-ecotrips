import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

export const ecologicalSafariPt: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safári Fotográfico',
  description: 'Passeio diurno em carro aberto pelas áreas da fazenda, como campos, cerrados e matas, para observação da fauna e flora local. Uma ótima oportunidade para fotos.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Veículo de safári', 'Guia'],
  keywords: ['safári', 'fotográfico', 'fauna', 'flora'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};