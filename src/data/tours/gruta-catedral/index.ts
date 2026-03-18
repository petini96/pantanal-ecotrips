import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { contemplationPt, contemplationEn, contemplationEs } from "src/data/categories/contemplation";

const img = `${TOURS_BUCKET_NAME}/gruta-catedral/img1.jpg`

const commonData = {
  id: 'TOUR-GC-01',
  slug: 'gruta-catedral',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 5,
  distanceFromCity: '4km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE],
  city: bonito
};

export const grutaCatedralPt: Tour = {
    ...commonData,
    name: 'Gruta Catedral (Antiga São Mateus)',
    description: [
        'A Gruta Catedral oferece uma fascinante jornada subterrânea, começando pelo Museu dos Índios Kadiwéus no receptivo.',
        'O museu possui um rico acervo de objetos históricos e animais empalhados que contam a história da região.',
        'Para chegar à cavidade, o visitante atravessa uma ponte suspensa e percorre uma trilha na mata.',
        'No interior, a gruta revela formações rochosas impressionantes (estalactites e estalagmites) realçadas pela iluminação artificial estratégica.',
        'O percurso interno tem cerca de 150 metros com profundidade de até 90 metros. Uso obrigatório de tênis.'
    ],
    shortDescription: 'Visita guiada a uma das cavernas mais tradicionais de Bonito, incluindo museu histórico.',
    includedItems: ['Acesso ao Museu Kadiwéu', 'Equipamento de segurança (capacete)', 'Acompanhamento de guia'],
    keywords: ['gruta catedral', 'caverna', 'contemplacao', 'museu', 'kadiweu', 'bonito'],
    categories: [contemplationPt],
    recommendedFor: []
};

export const grutaCatedralEn: Tour = {
    ...commonData,
    name: 'Catedral Cave (Formerly São Mateus)',
    description: [
        'Catedral Cave offers a fascinating underground journey, starting with the Kadiwéus Indian Museum at the reception.',
        'The museum has a rich collection of historical objects and stuffed animals that tell the story of the region.',
        'To reach the cavity, visitors cross a suspended bridge and follow a forest trail.',
        'Inside, the cave reveals impressive rock formations (stalactites and stalagmites) enhanced by strategic artificial lighting.',
        'The internal route is about 150 meters long with a depth of up to 90 meters. Closed shoes are mandatory.'
    ],
    shortDescription: 'Guided visit to one of Bonito\'s most traditional caves, including a historical museum.',
    includedItems: ['Kadiwéu Museum access', 'Safety equipment (helmet)', 'Guide accompaniment'],
    keywords: ['catedral cave', 'cave', 'contemplation', 'museum', 'history', 'bonito'],
    categories: [contemplationEn],
    recommendedFor: []
};

export const grutaCatedralEs: Tour = {
    ...commonData,
    name: 'Gruta Catedral (Antigua São Mateus)',
    description: [
        'La Gruta Catedral ofrece un fascinante viaje subterráneo, comenzando por el Museo de los Indios Kadiwéus en la recepción.',
        'El museo cuenta con una rica colección de objetos históricos y animales disecados que narran la historia de la región.',
        'Para llegar a la cavidad, los visitantes cruzan un puente colgante y siguen un sendero por el bosque.',
        'En el interior, la gruta revela impresionantes formaciones rocosas (estalactitas y estalagmitas) realzadas por una iluminación artificial estratégica.',
        'El recorrido interno tiene unos 150 metros de longitud con una profundidad de hasta 90 metros. Uso obligatorio de calzado cerrado.'
    ],
    shortDescription: 'Visita guiada a una de las cuevas más tradicionales de Bonito, incluyendo museo histórico.',
    includedItems: ['Acceso al Museo Kadiwéu', 'Equipo de seguridad (casco)', 'Acompañamiento de guía'],
    keywords: ['gruta catedral', 'cueva', 'contemplacion', 'museo', 'historia', 'bonito'],
    categories: [contemplationEs],
    recommendedFor: []
};
