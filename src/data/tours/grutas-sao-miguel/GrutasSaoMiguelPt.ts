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
    'Antes de iniciar a caminhada o grupo assiste a um vídeo de apresentação das Grutas de São Miguel. Logo após, o grupo se direciona para uma trilha suspensa, de aproximadamente 05 metros de altura e de 180 metros de comprimento que termina em um mirante de onde se pode observar o vale e a vegetação característica do local.',
    'A caminhada continua por passarelas, até um mirante de observação da caverna, por onde se pode ter o primeiro contato visual com seu interior. Em seguida o turista é conduzido até a entrada da cavidade, neste percurso, conhecerá formações espeleológicas.',
    'Existe ainda a possibilidade de se observar a coruja Suindara que habita a caverna, para tanto faz-se uso de lanternas e da própria iluminação artificial que há no interior da gruta. Uso obrigatório de tênis.'
  ],
  shortDescription: 'Visitação de gruta seca com acesso por trilha suspensa na mata.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Capacete', 'Lanterna'],
  keywords: ['gruta', 'caverna', 'trilha suspensa', 'seco'],
  categories: [cavesPt, ecotourismPt],
  recommendedFor: [],
  city: bonito
};
