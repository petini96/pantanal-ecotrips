import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

const commonData = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  galleryImages: [],
  icon: 'mdi-paw'
};

export const pantanalNortePt: Region = {
    ...commonData,
    name: 'Pantanal Norte (MT)',
    subtitle: 'O reino da onça-pintada e a Transpantaneira.',
    description: [
        'O Pantanal Norte é famoso pela Rodovia Transpantaneira e por ser o melhor lugar do mundo para avistar onças-pintadas, especialmente na região de Porto Jofre. É um destino mais voltado para a observação intensa de vida selvagem e fotografia.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone],
    highlights: ['Onça-pintada', 'Rodovia Transpantaneira', 'Observação de Aves'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé - Mato Grosso, Brasil'
    },
    details: {
        bestTime: 'Julho a Setembro (Seca, ideal para ver onças) | Fevereiro a Maio (Cheia)',
        climate: 'Tropical continental. Muito quente na seca.',
        access: 'Aeroporto de Cuiabá (CGB) + Transfer terrestre pela Transpantaneira.',
    },
    gastronomy: ['Mojica de Pintado', 'Pacu Assado', 'Farofa de Banana', 'Maria Isabel'],
    tips: [
        'Leve repelente e roupas de manga longa.',
        'Porto Jofre é o ponto chave para ver onças.',
        'A estrada é de terra, prepare-se para poeira na seca.'
    ]
};

export const pantanalNorteEn: Region = {
    ...commonData,
    name: 'North Pantanal',
    subtitle: 'The realm of the Jaguar and the Transpantaneira Highway.',
    description: [
        'The Northern Pantanal is famous for the Transpantaneira Highway and for being the best place in the world to spot jaguars, especially in the Porto Jofre region. It is a destination focused on intense wildlife watching and photography.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone],
    highlights: ['Jaguar Spotting', 'Transpantaneira Highway', 'Birdwatching'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé - Mato Grosso, Brazil'
    },
    details: {
        bestTime: 'July to September (Dry season, best for Jaguars) | February to May (Wet season)',
        climate: 'Tropical continental. Very hot during the dry season.',
        access: 'Cuiabá Airport (CGB) + Land transfer via Transpantaneira.',
    },
    gastronomy: ['Pintado Fish Stew (Mojica)', 'Baked Pacu', 'Banana Farofa', 'Maria Isabel Meat Rice'],
    tips: [
        'Bring insect repellent and long-sleeved clothes.',
        'Porto Jofre is the key spot for jaguars.',
        'The road is unpaved, expect dust during the dry season.'
    ]
};

export const pantanalNorteEs: Region = {
    ...commonData,
    name: 'Pantanal Norte',
    subtitle: 'El reino del jaguar y la Transpantaneira.',
    description: [
        'El Pantanal Norte es famoso por la Carretera Transpantaneira y por ser el mejor lugar del mundo para avistar jaguares, especialmente en la región de Porto Jofre. Es un destino enfocado en la observación intensa de vida salvaje y fotografía.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone],
    highlights: ['Avistamiento de Jaguares', 'Carretera Transpantaneira', 'Observación de Aves'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé - Mato Grosso, Brasil'
    },
    details: {
        bestTime: 'Julio a Septiembre (Seca, ideal para jaguares) | Febrero a Mayo (Inundación)',
        climate: 'Tropical continental. Muy caluroso en la estación seca.',
        access: 'Aeropuerto de Cuiabá (CGB) + Traslado terrestre por la Transpantaneira.',
    },
    gastronomy: ['Mojica de Pintado', 'Pacú Asado', 'Farofa de Plátano', 'Maria Isabel'],
    tips: [
        'Lleve repelente y ropa de manga larga.',
        'Porto Jofre es el punto clave para ver jaguares.',
        'El camino es de tierra, prepárese para el polvo en la temporada seca.'
    ]
};
