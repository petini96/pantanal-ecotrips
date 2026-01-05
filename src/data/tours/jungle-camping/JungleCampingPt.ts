import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/acampamento-na-selva/img1.webp`

// PT-BR
export const jungleCampingPt: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva-em-miranda',
  name: 'Acampamento na Selva (uma noite)',
  description: ['Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.'],
  shortDescription: 'Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.',
  mainImage: img,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Rede com mosquiteiro', 'Jantar e café da manhã no local', 'Guia'],
  keywords: ['acampar', 'selva', 'rede', 'aventura'],
  categories: [adventurePt],
  recommendedFor: [],
  city: miranda
};

