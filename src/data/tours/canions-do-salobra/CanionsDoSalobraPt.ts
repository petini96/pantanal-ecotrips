import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/canions-do-salobra/img1.webp`

export const canionsDoSalobraPt: Tour = {
  id: 'TOUR-CS-01',
  slug: 'canions-do-salobra',
  name: 'Cânions do Salobra',
  description: [
    'Expedição de aventura pelo Rio Salobra. Pode ser feita de Caiaque Duck ou Acquatrekking (trilha na água).',
    'Cenários selvagens e deslumbrantes, com paradas para banho e cachoeiras.',
    'Ideal para quem busca contato profundo com a natureza intocada.'
  ],
  shortDescription: 'Expedição de aventura (Duck ou Trekking) pelos cânions selvagens do Rio Salobra.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '92km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipamentos', 'Guia', 'Almoço'],
  keywords: ['aventura', 'duck', 'trekking', 'canion'],
  categories: [adventurePt, ecotourismPt],
  recommendedFor: [],
  city: bonito
};
