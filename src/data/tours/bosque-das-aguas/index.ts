import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/bosque-das-aguas/img1.webp`

const commonData = {
  id: 'TOUR-BDA-01',
  slug: 'bosque-das-aguas',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const bosqueDasAguasPt: Tour = {
    ...commonData,
    name: 'Balneário Bosque das Águas',
    description: [
        'O Balneário Bosque das Águas está estrategicamente localizado às margens do Rio Formoso, um dos principais rios de Bonito.',
        'O local conta com diversos decks exclusivos para banho, permitindo um contato direto e seguro com as águas cristalinas e a vida subaquática.',
        'Com uma área verde preservada, o balneário oferece churrasqueiras, áreas de descanso e infraestrutura de lazer para aproveitar com a família e amigos.',
        'É o lugar ideal para quem busca tranquilidade e um ambiente acolhedor em meio à natureza nativa. Idade mínima: Livre.'
    ],
    shortDescription: 'Decks exclusivos para banho no Rio Formoso com área verde e lazer completo.',
    includedItems: ['Acesso aos decks de banho', 'Áreas de descanso', 'Infraestrutura do balneário', 'Estacionamento'],
    keywords: ['bosque das aguas', 'balneario', 'rio formoso', 'banho', 'familia', 'bonito'],
    categories: [resortsPt],
    recommendedFor: []
};

export const bosqueDasAguasEn: Tour = {
    ...commonData,
    name: 'Bosque das Águas (Water Forest Resort)',
    description: [
        'The Bosque das Águas Resort is strategically located on the banks of the Formoso River, one of the main rivers in Bonito.',
        'The site features several exclusive decks for swimming, allowing direct and safe contact with the crystal-clear waters and underwater life.',
        'With a preserved green area, the resort offers barbecue pits, resting areas, and leisure infrastructure to enjoy with family and friends.',
        'It is the ideal place for those seeking tranquility and a welcoming environment in the midst of native nature. Minimum age: Free.'
    ],
    shortDescription: 'Exclusive decks for swimming in the Formoso River with a green area and complete leisure.',
    includedItems: ['Access to bathing decks', 'Resting areas', 'Resort infrastructure', 'Parking'],
    keywords: ['bosque das aguas', 'resort', 'rio formoso', 'swimming', 'family', 'bonito'],
    categories: [resortsEn],
    recommendedFor: []
};

export const bosqueDasAguasEs: Tour = {
    ...commonData,
    name: 'Balneario Bosque das Águas',
    description: [
        'El Balneario Bosque das Águas está estratégicamente ubicado a orillas del río Formoso, uno de los principales ríos de Bonito.',
        'El lugar cuenta con varias plataformas exclusivas para el baño, permitiendo un contacto directo y seguro con las aguas cristalinas y la vida subacuática.',
        'Con una zona verde preservada, el balneario ofrece parrillas, áreas de descanso e infraestructura de ocio para disfrutar con la familia y amigos.',
        'Es el lugar ideal para quienes buscan tranquilidad y un ambiente acogedor en medio de la naturaleza nativa. Edad mínima: Libre.'
    ],
    shortDescription: 'Plataformas exclusivas para el baño en el río Formoso con zona verde y ocio completo.',
    includedItems: ['Acceso a las plataformas de baño', 'Áreas de descanso', 'Infraestructura del balneario', 'Estacionamiento'],
    keywords: ['bosque das aguas', 'balneario', 'rio formoso', 'baño', 'familia', 'bonito'],
    categories: [resortsEs],
    recommendedFor: []
};
