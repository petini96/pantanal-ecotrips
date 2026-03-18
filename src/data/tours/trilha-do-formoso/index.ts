import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/trilha-do-formoso/img1.webp`

const commonData = {
  id: 'TOUR-TF-01',
  slug: 'trilha-do-formoso',
  mainImage: img,
  durationInHours: 3,
  minAge: 8,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const trilhaDoFormosoPt: Tour = {
    ...commonData,
    name: 'Trilha do Formoso',
    description: [
        'Uma caminhada repleta de aventura por trilhas preservadas, passando pela Serrinha da Piúva.',
        'O percurso inclui decks exclusivos com trampolim e tirolesa, permitindo que o visitante se divirta e se refresque nas águas do Rio Formoso.',
        'A trilha tem aproximadamente 3km de extensão, e existe a possibilidade de fazer parte do trajeto diretamente pelo leito do rio.',
        'Idade mínima: 08 anos. É recomendado o uso de calçados apropriados para caminhada e água.'
    ],
    shortDescription: 'Caminhada de 3km com decks, trampolim e tirolesa no Rio Formoso.',
    includedItems: ['Acompanhamento de guia especializado', 'Uso dos decks e trampolins', 'Tirolesa aquática'],
    keywords: ['trilha', 'rio formoso', 'aventura', 'trampolim', 'tirolesa'],
    categories: [adventurePt],
    recommendedFor: []
};

export const trilhaDoFormosoEn: Tour = {
    ...commonData,
    name: 'Formoso Trail',
    description: [
        'An adventure-filled walk through preserved trails, passing through Serrinha da Piúva.',
        'The route includes exclusive decks with trampolines and zip lines, allowing visitors to have fun and refresh themselves in the waters of the Formoso River.',
        'The trail is approximately 3 km long, and there is the possibility of doing part of the route directly through the riverbed.',
        'Minimum age: 08 years old. Walking and water-appropriate footwear is recommended.'
    ],
    shortDescription: '3km hike with decks, trampoline and zipline at the Formoso River.',
    includedItems: ['Specialized guide accompaniment', 'Use of decks and trampolines', 'Water zipline'],
    keywords: ['trail', 'rio formoso', 'adventure', 'trampoline', 'zipline'],
    categories: [adventureEn],
    recommendedFor: []
};

export const trilhaDoFormosoEs: Tour = {
    ...commonData,
    name: 'Sendero del Formoso',
    description: [
        'Una caminata llena de aventura por senderos preservados, pasando por la Serrinha da Piúva.',
        'El recorrido incluye plataformas exclusivas con trampolín y tirolesa, permitiendo que el visitante se divierta y se refresque en las aguas del río Formoso.',
        'El sendero tiene aproximadamente 3 km de longitud, y existe la posibilidad de realizar parte del trayecto directamente por el cauce del río.',
        'Edad mínima: 08 años. Se recomienda el uso de calzado adecuado para caminata y agua.'
    ],
    shortDescription: 'Caminata de 3km con plataformas, trampolín y tirolesa en el río Formoso.',
    includedItems: ['Acompañamiento de guía especializado', 'Uso de plataformas y trampolines', 'Tirolesa acuática'],
    keywords: ['sendero', 'rio formoso', 'aventura', 'trampolín', 'tirolesa'],
    categories: [adventureEs],
    recommendedFor: []
};
