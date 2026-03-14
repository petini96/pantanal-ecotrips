import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { contemplationPt, contemplationEn, contemplationEs } from "src/data/categories/contemplation";
const img = `${TOURS_BUCKET_NAME}/grutas-sao-miguel/img1.webp`

const commonData = {
  id: 'TOUR-GSM-01',
  slug: 'grutas-sao-miguel',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  city: bonito
};

export const grutasSaoMiguelPt: Tour = {
    ...commonData,
    name: 'Grutas de São Miguel',
    description: [
        'Antes de iniciar a caminhada o grupo assiste a um vídeo de apresentação das Grutas de São Miguel. Logo após, o grupo se direciona para uma trilha suspensa, de aproximadamente 05 metros de altura e de 180 metros de comprimento que termina em um mirante de onde se pode observar o vale e a vegetação característica do local.',
        'A caminhada continua por passarelas, até um mirante de observação da caverna, por onde se pode ter o primeiro contato visual com seu interior. Em seguida o turista é conduzido até a entrada da cavidade, neste percurso, conhecerá formações espeleológicas.',
        'Existe ainda a possibilidade de se observar a coruja Suindara que habita a caverna, para tanto faz-se uso de lanternas e da própria iluminação artificial que há no interior da gruta. Uso obrigatório de tênis.'
    ],
    shortDescription: 'Visitação de gruta seca com acesso por trilha suspensa na mata.',
    includedItems: ['Acompanhamento de guia', 'Capacete', 'Lanterna'],
    keywords: ['gruta', 'caverna', 'trilha suspensa', 'seco'],
    categories: [contemplationPt],
    recommendedFor: []
};

export const grutasSaoMiguelEn: Tour = {
    ...commonData,
    name: 'São Miguel Caves',
    description: [
        'Before starting the walk, the group watches a presentation video of the Grutas de São Miguel. Soon after, the group heads to a suspended trail, approximately 05 meters high and 180 meters long that ends at a lookout point from where you can observe the valley and the characteristic vegetation of the place.',
        'The walk continues along walkways, to a cave observation lookout, where you can have the first visual contact with its interior. Then the tourist is led to the entrance of the cavity, on this route, they will know speleological formations.',
        'There is also the possibility of observing the Suindara owl that inhabits the cave, for which flashlights and the artificial lighting inside the cave are used. Mandatory use of sneakers.'
    ],
    shortDescription: 'Dry cave visit accessed by a suspended trail in the forest.',
    includedItems: ['Guide accompaniment', 'Helmet', 'Flashlight'],
    keywords: ['grotto', 'cave', 'suspended trail', 'dry'],
    categories: [contemplationEn, contemplationEn],
    recommendedFor: []
};

export const grutasSaoMiguelEs: Tour = {
    ...commonData,
    name: 'Grutas de São Miguel',
    description: [
        'Antes de iniciar la caminata el grupo asiste a un video de presentación de las Grutas de São Miguel. Luego, el grupo se dirige a un sendero suspendido, de aproximadamente 05 metros de altura y de 180 metros de longitud que termina en un mirador desde donde se puede observar el valle y la vegetación característica del lugar.',
        'La caminata continúa por pasarelas, hasta un mirador de observación de la caverna, por donde se puede tener el primer contacto visual con su interior. En seguida el turista es conducido hasta la entrada de la cavidad, en este recorrido, conocerá formaciones espeleológicas.',
        'Existe aún la posibilidad de observar la lechuza Suindara que habita la caverna, para lo cual se hace uso de linternas y de la propia iluminación artificial que hay en el interior de la gruta. Uso obligatorio de zapatillas.'
    ],
    shortDescription: 'Visita a cueva seca con acceso por sendero suspendido en el bosque.',
    includedItems: ['Acompañamiento de guía', 'Casco', 'Linterna'],
    keywords: ['gruta', 'cueva', 'sendero suspendido', 'seco'],
    categories: [contemplationEs, contemplationEs],
    recommendedFor: []
};
