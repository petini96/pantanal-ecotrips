import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/trilha-boiadeira/img1.webp`

const commonData = {
  id: 'TOUR-TB-01',
  slug: 'trilha-boiadeira',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 6,
  distanceFromCity: '3km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST],
  city: bonito
};

export const trilhaBoiadeiraPt: Tour = {
    ...commonData,
    name: 'Trilha Boiadeira (Quadriciclo)',
    description: [
        'Realizado em quadriciclos acompanhados por monitor, o passeio percorre uma antiga rota utilizada pelas comitivas de bois na região.',
        'O percurso tem aproximadamente 8 km de extensão, passando por trechos de mata, buracos e obstáculos que garantem adrenalina e emoção.',
        'É obrigatório o uso de calça comprida e calçado fechado (tênis ou bota).',
        'O passeio oferece também opção de saída noturna. Para pilotar é necessário ter no mínimo 16 anos. Crianças a partir de 6 anos podem ir na garupa.'
    ],
    shortDescription: 'Muita adrenalina em um percurso de 8km por uma antiga rota de comitivas.',
    includedItems: ['Acompanhamento de monitor', 'Equipamento de segurança (capacete)', 'Treinamento inicial'],
    keywords: ['quadriciclo', 'boiadeira', 'aventura', 'comitivas', 'trilha'],
    categories: [adventurePt],
    recommendedFor: []
};

export const trilhaBoiadeiraEn: Tour = {
    ...commonData,
    name: 'Boiadeira Trail (ATV/Quad Bike)',
    description: [
        'Carried out on quad bikes accompanied by a monitor, the tour follows an old route used by cattle drives in the region.',
        'The route is approximately 8 km long, passing through stretches of forest, holes, and obstacles that guarantee adrenaline and excitement.',
        'The use of long pants and closed shoes (sneakers or boots) is mandatory.',
        'The tour also offers a night departure option. To ride you must be at least 16 years old. Children from 6 years old can go as passengers.'
    ],
    shortDescription: 'Lots of adrenaline on an 8km route through an old cattle drive path.',
    includedItems: ['Monitor accompaniment', 'Safety equipment (helmet)', 'Initial training'],
    keywords: ['atv', 'quad bike', 'boiadeira', 'adventure', 'cattle drive', 'trail'],
    categories: [adventureEn],
    recommendedFor: []
};

export const trilhaBoiadeiraEs: Tour = {
    ...commonData,
    name: 'Sendero Boiadeira (Cuatriciclo)',
    description: [
        'Realizado en cuatriciclos acompañados por un monitor, el recorrido sigue una antigua ruta utilizada por las comitivas de bueyes en la región.',
        'El recorrido tiene aproximadamente 8 km de longitud, pasando por tramos de bosque, hoyos y obstáculos que garantizan adrenalina y emoción.',
        'Es obligatorio el uso de pantalones largos y calzado cerrado (zapatillas o botas).',
        'El recorrido también ofrece una opción de salida nocturna. Para conducir se debe tener al menos 16 años. Los niños a partir de 6 años pueden ir como acompañantes.'
    ],
    shortDescription: 'Mucha adrenalina en un recorrido de 8km por una antigua ruta de comitivas.',
    includedItems: ['Acompañamiento de monitor', 'Equipo de seguridad (casco)', 'Entrenamiento inicial'],
    keywords: ['cuatriciclo', 'boiadeira', 'aventura', 'comitivas', 'sendero'],
    categories: [adventureEs],
    recommendedFor: []
};
