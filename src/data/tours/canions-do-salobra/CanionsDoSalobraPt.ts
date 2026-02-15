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
    'Os Cânions do Salobra oferecem uma experiência inesquecível de conexão com a natureza, a expedição de 01 dia pelo sinuoso Rio Salobra é perfeita para quem busca aventura e cenários deslumbrantes no Pantanal.',
    'Navegue em barco a motor por águas tranquilas, cercado por paredões rochosos e vegetação exuberante, onde é possível avistar aves, peixes e outros animais da fauna local.',
    'O passeio inclui parada para banho refrescante nas águas cristalinas do rio salobra.'
  ],
  shortDescription: 'Expedição de aventura (Duck ou Trekking) pelos cânions selvagens do Rio Salobra.',
  mainImage: img,
  durationInHours: 8,
  minAge: 5,
  distanceFromCity: '62km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipamentos', 'Guia', 'Almoço'],
  keywords: ['aventura', 'duck', 'trekking', 'canion'],
  categories: [adventurePt, ecotourismPt],
  recommendedFor: [],
  city: bonito
};
