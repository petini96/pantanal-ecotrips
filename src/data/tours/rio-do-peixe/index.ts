import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
const img = `${TOURS_BUCKET_NAME}/rio-do-peixe/img1.webp`

const commonData = {
  id: 'TOUR-RIO-PEIXE-01',
  slug: 'rio-do-peixe',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  city: bonito
};

export const rioDoPeixePt: Tour = {
    ...commonData,
    name: 'Rio do Peixe',
    description: [
        'Uma fascinante caminhada de 4,5 km na fazenda Água Viva, onde se pode curtir e relaxar nas cachoeiras entre cardumes de peixes nas piscinas naturais e salto de carretilha nos rios Olaria e do Peixe.',
        'Considerada uma trilha tranquila para crianças, não tem limite de idade. São feitas 9 paradas para que você possa se refrescar nas águas cristalinas entre elas, 5 são belíssimas cachoeiras, 1 ponto para banho muito especial cercado por diversos peixinhos e, para os mais aventureiros, a propriedade ainda disponibiliza 1 plataforma de salto na Cachoeira do Poção e 2 tirolesas.',
        'Após o delicioso almoço que é famoso na região.'
    ],
    shortDescription: 'Trilha com cachoeiras incríveis, muitos peixes e almoço pantaneiro.',
    includedItems: ['Almoço', 'Acompanhamento de guia', 'Acesso às cachoeiras'],
    keywords: ['cachoeiras', 'peixes', 'fazenda', 'almoco'],
    categories: [trailsWaterfallsPt],
    recommendedFor: [familiesPt]
};

export const rioDoPeixeEn: Tour = {
    ...commonData,
    name: 'Rio do Peixe',
    description: [
        'A fascinating 4.5 km walk at Fazenda Água Viva, where you can enjoy and relax in waterfalls amidst schools of fish in natural pools and zip lining on the Olaria and do Peixe rivers.',
        'Considered a quiet trail for children, it has no age limit. 9 stops are made so you can refresh yourself in the crystal clear waters among them, 5 are beautiful waterfalls, 1 very special bathing spot surrounded by various little fish and, for the more adventurous, the property also provides 1 jumping platform at Cachoeira do Poção and 2 zip lines.',
        'After the delicious lunch that is famous in the region.'
    ],
    shortDescription: 'Trail with incredible waterfalls, lots of fish and Pantanal lunch.',
    includedItems: ['Lunch', 'Guide accompaniment', 'Access to waterfalls'],
    keywords: ['waterfalls', 'fish', 'farm', 'lunch'],
    categories: [trailsWaterfallsEn],
    recommendedFor: [familiesEn]
};

export const rioDoPeixeEs: Tour = {
    ...commonData,
    name: 'Rio do Peixe',
    description: [
        'Una fascinante caminata de 4,5 km en la hacienda Água Viva, donde se puede disfrutar y relajar en las cascadas entre cardúmenes de peces en las piscinas naturales y salto de tirolesa en los ríos Olaria y do Peixe.',
        'Considerada un sendero tranquilo para niños, no tiene límite de edad. Se realizan 9 paradas para que usted pueda refrescarse en las aguas cristalinas entre ellas, 5 son bellísimas cascadas, 1 punto de baño muy especial rodeado por diversos pececitos y, para los más aventureros, la propiedad aún disponibiliza 1 plataforma de salto en la Cachoeira do Poção y 2 tirolesas.',
        'Después del delicioso almuerzo que es famoso en la región.'
    ],
    shortDescription: 'Sendero con cascadas increíbles, muchos peces y almuerzo pantanero.',
    includedItems: ['Almuerzo', 'Acompañamiento de guía', 'Acceso a las cascadas'],
    keywords: ['cascadas', 'peces', 'hacienda', 'almuerzo'],
    categories: [trailsWaterfallsEs],
    recommendedFor: [familiesEs]
};
