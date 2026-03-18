import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/cavalgada-rio-formoso/img1.webp`

const commonData = {
  id: 'TOUR-CRF-01',
  slug: 'cavalgada-rio-formoso',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 8,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  city: bonito
};

export const cavalgadaRioFormosoPt: Tour = {
    ...commonData,
    name: 'Cavalgada (Parque Rio Formoso)',
    description: [
        'Um passeio gostoso e tranquilo em meio à natureza preservada de Bonito.',
        'Utilizando cavalos mansos e dóceis que andam em fila indiana, o passeio leva adultos e crianças com calma e segurança.',
        'O percurso passa por campos abertos e trilhas na mata até chegar às margens do Rio Formoso, onde acontece uma deliciosa parada de banho.',
        'Idade mínima: 08 anos. Peso máximo: 120 kg. É obrigatório o uso de calçado fechado para realizar a atividade.'
    ],
    shortDescription: 'Passeio a cavalo por trilhas na mata com parada para banho no Rio Formoso.',
    includedItems: ['Acompanhamento de guia especializado', 'Cavalos treinados', 'Equipamento de montaria', 'Parada para banho'],
    keywords: ['cavalgada', 'rio formoso', 'natureza', 'cavalos', 'fazenda'],
    categories: [adventurePt],
    recommendedFor: []
};

export const cavalgadaRioFormosoEn: Tour = {
    ...commonData,
    name: 'Horseback Riding (Rio Formoso Park)',
    description: [
        'A pleasant and peaceful ride amidst the preserved nature of Bonito.',
        'Using gentle, docile horses that walk in single file, the ride takes adults and children with calm and safety.',
        'The route passes through open fields and forest trails until reaching the banks of the Formoso River, where a delicious swimming stop takes place.',
        'Minimum age: 08 years old. Maximum weight: 120 kg. The use of closed shoes is mandatory to carry out the activity.'
    ],
    shortDescription: 'Horseback riding through forest trails with a swimming stop at the Formoso River.',
    includedItems: ['Specialized guide accompaniment', 'Trained horses', 'Riding equipment', 'Swimming stop'],
    keywords: ['horseback riding', 'rio formoso', 'nature', 'horses', 'farm'],
    categories: [adventureEn],
    recommendedFor: []
};

export const cavalgadaRioFormosoEs: Tour = {
    ...commonData,
    name: 'Cabalgata (Parque Rio Formoso)',
    description: [
        'Un paseo agradable y tranquilo en medio de la naturaleza preservada de Bonito.',
        'Utilizando caballos mansos y dóciles que caminan en fila india, el paseo lleva a adultos y niños con calma y seguridad.',
        'El recorrido pasa por campos abiertos y senderos en el bosque hasta llegar a las orillas del río Formoso, donde se realiza una deliciosa parada de baño.',
        'Edad mínima: 08 años. Peso máximo: 120 kg. Es obligatorio el uso de calzado cerrado para realizar la actividad.'
    ],
    shortDescription: 'Paseo a caballo por senderos en el bosque con parada para baño en el río Formoso.',
    includedItems: ['Acompañamiento de guía especializado', 'Caballos entrenados', 'Equipo de equitación', 'Parada para baño'],
    keywords: ['cabalgata', 'rio formoso', 'naturaleza', 'caballos', 'hacienda'],
    categories: [adventureEs],
    recommendedFor: []
};
