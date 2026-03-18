import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/escalada-bonito/img1.jpg`

const commonData = {
  id: 'TOUR-EB-01',
  slug: 'escalada-bonito',
  mainImage: img,
  durationInHours: 4,
  minAge: 12,
  distanceFromCity: '70km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const escaladaBonitoPt: Tour = {
    ...commonData,
    name: 'Escalada Bonito (Rio Salobra)',
    description: [
        'Aventura, desafio e natureza definem o Escalada Bonito. Uma experiência vertical única na Serra da Bodoquena.',
        'Iniciamos a atividade com uma trilha de 1km em meio à mata nativa em direção ao paredão de rochas calcárias, conhecido como Setor Virgem.',
        'O visitante encara a via "Lua de Mel" de 10 metros de altura com o suporte de instrutoras qualificadas e equipamento completo.',
        'Após a escalada, o grupo retorna para um banho relaxante nas águas cristalinas do Rio Salobra.',
        'Restrições: Peso mínimo de 45kg. Estão disponíveis 20 opções de vias entre IV e IX graus de dificuldade.'
    ],
    shortDescription: 'Escalada em paredão calcário de 10m com banho no Rio Salobra.',
    includedItems: ['Equipamento (capacete, cadeirinha, sapatilha)', 'Instrução especializada', 'Trilha guiada', 'Banho de rio'],
    keywords: ['escalada', 'bonito', 'salobra', 'aventura', 'vertical', 'rocha'],
    categories: [adventurePt],
    recommendedFor: []
};

export const escaladaBonitoEn: Tour = {
    ...commonData,
    name: 'Escalada Bonito (Rock Climbing)',
    description: [
        'Adventure, challenge, and nature define Escalada Bonito. A unique vertical experience in the Serra da Bodoquena.',
        'We start the activity with a 1km trail through native forest towards the limestone wall known as the Setor Virgem.',
        'Visitors take on the 10-meter-high "Lua de Mel" route with the support of qualified instructors and complete equipment.',
        'After the climb, the group returns for a relaxing swim in the crystal-clear waters of the Salobra River.',
        'Restrictions: Minimum weight of 45kg. There are 20 route options available between difficulty grades IV and IX.'
    ],
    shortDescription: '10m limestone wall climbing with a swim in the Salobra River.',
    includedItems: ['Equipment (helmet, harness, climbing shoes)', 'Specialized instruction', 'Guided trail', 'River swim'],
    keywords: ['rock climbing', 'bonito', 'salobra', 'adventure', 'vertical', 'rock'],
    categories: [adventureEn],
    recommendedFor: []
};

export const escaladaBonitoEs: Tour = {
    ...commonData,
    name: 'Escalada Bonito (Escalada en Roca)',
    description: [
        'Aventura, desafío y naturaleza definen el Escalada Bonito. Una experiencia vertical única en la Serra da Bodoquena.',
        'Iniciamos la actividad con un sendero de 1km en medio del bosque nativo hacia la pared de rocas calizas, conocida como Setor Virgem.',
        'El visitante se enfrenta a la vía "Lua de Mel" de 10 metros de altura con el apoyo de instructoras calificadas y equipo completo.',
        'Después de la escalada, el grupo regresa para un baño relajante en las aguas cristalinas del río Salobra.',
        'Restricciones: Peso mínimo de 45kg. Hay 20 opciones de vías disponibles entre los grados IV y IX de dificultad.'
    ],
    shortDescription: 'Escalada en pared calcárea de 10m con baño en el río Salobra.',
    includedItems: ['Equipo (casco, arnés, zapatillas)', 'Instrucción especializada', 'Sendero guiado', 'Baño de río'],
    keywords: ['escalada', 'bonito', 'salobra', 'aventura', 'vertical', 'roca'],
    categories: [adventureEs],
    recommendedFor: []
};
