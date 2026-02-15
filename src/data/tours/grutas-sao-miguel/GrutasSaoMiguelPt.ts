import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { cavesPt } from '../../categories/cavess/CavessPt';

const img = `${TOURS_BUCKET_NAME}/grutas-sao-miguel/img1.webp`

export const grutasSaoMiguelPt: Tour = {
  id: 'TOUR-GSM-01',
  slug: 'grutas-sao-miguel',
  name: 'Grutas de São Miguel',
  description: [
    'Passeio seco em gruta. Inicia com um vídeo de apresentação e segue por uma trilha suspensa na copa das árvores até a caverna.',
    'No interior, formações espeleológicas impressionantes como estalagmites, estalactites e corais.',
    'Possibilidade de avistar a coruja Suindara.'
  ],
  shortDescription: 'Visitação de gruta seca com acesso por trilha suspensa na mata.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Capacete', 'Lanterna'],
  keywords: ['gruta', 'caverna', 'trilha suspensa', 'seco'],
  categories: [cavesPt, ecotourismPt],
  recommendedFor: [],
  city: bonito
};
