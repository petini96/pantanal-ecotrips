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
    name: 'Pantanal Norte',
    subtitle: 'O reino da onça-pintada e a Transpantaneira.',
    description: [
        'O Pantanal Norte é famoso pela Rodovia Transpantaneira e por ser o melhor lugar do mundo para avistar onças-pintadas, especialmente na região de Porto Jofre. É um destino mais voltado para a observação intensa de vida selvagem e fotografia da natureza.',
        'Partindo de Cuiabá, capital do Mato Grosso, a viagem percorre cerca de 100 km de asfalto até Poconé, onde começa a lendária Transpantaneira — uma estrada de terra sobre 122 pontes de madeira que corta o coração do Pantanal Norte por 147 km até Porto Jofre, às margens do Rio Cuiabá.',
        'A região abriga uma biodiversidade impressionante: mais de 650 espécies de aves, capivaras, jacarés, ariranhas, antas e, claro, a onça-pintada — o maior felino das Américas. Ao longo da Transpantaneira, pousadas e lodges ecológicos oferecem toda a estrutura para que o visitante viva a experiência pantaneira de forma confortável e segura.',
        'Na região de Cáceres, o Rio Paraguai e a Reserva Ecológica Tayamã adicionam mais uma dimensão ao Pantanal Norte, com passeios de barco entre baías e canais, avistamento de macacos, jaguatiricas, ariranhas e ninhais de aves coloridas.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone, cities.caceres],
    highlights: ['Onça-pintada', 'Rodovia Transpantaneira', 'Observação de Aves'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé / Cáceres - Mato Grosso, Brasil'
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
    ],
    howToGetThere: {
        description: [
            'O acesso ao Pantanal Norte é feito a partir de Cuiabá (MT), com voos diretos de São Paulo, Rio de Janeiro, Campo Grande e outras capitais.',
            'De Cuiabá, segue-se pela MT-060 por cerca de 100 km de asfalto até Poconé, onde começa a Transpantaneira. Para Cáceres, segue-se pela BR-070 por aproximadamente 215 km.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Avião até Cuiabá',
                description: 'Aeroporto Marechal Rondon (CGB) — voos diários de São Paulo, Rio de Janeiro, Brasília e Campo Grande.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Carro / Transfer privativo',
                description: 'De Cuiabá até Poconé: ~100 km de asfalto. De Poconé até Porto Jofre: 147 km pela Transpantaneira (terra). Veículos com tração recomendados na cheia.',
                icon: 'mdi-car-4x4'
            },
            {
                type: 'bus',
                title: 'Ônibus até Poconé',
                description: 'Há linhas regulares de ônibus de Cuiabá até Poconé. A partir daí, é necessário transfer privativo ou veículo próprio pela Transpantaneira.',
                icon: 'mdi-bus'
            }
        ]
    }
};

export const pantanalNorteEn: Region = {
    ...commonData,
    name: 'Northern Pantanal',
    subtitle: 'The realm of the Jaguar and the Transpantaneira Highway.',
    description: [
        'The Northern Pantanal is famous for the Transpantaneira Highway and for being the best place in the world to spot jaguars, especially in the Porto Jofre region. It is a destination focused on intense wildlife watching and nature photography.',
        'Departing from Cuiabá, the capital of Mato Grosso, the journey covers about 100 km of paved road to Poconé, where the legendary Transpantaneira begins — an unpaved road crossing 122 wooden bridges that cuts through the heart of the Northern Pantanal for 147 km to Porto Jofre, on the banks of the Cuiabá River.',
        'The region hosts impressive biodiversity: over 650 bird species, capybaras, caimans, giant otters, tapirs, and of course the jaguar — the largest feline in the Americas. Along the Transpantaneira, eco-lodges and pousadas provide all the comfort needed to experience the Pantanal safely and authentically.',
        'In the Cáceres region, the Paraguay River and the Tayamã Ecological Reserve add another dimension to the Northern Pantanal, with boat trips through bays and channels for spotting monkeys, ocelots, giant otters and colorful bird colonies.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone, cities.caceres],
    highlights: ['Jaguar Spotting', 'Transpantaneira Highway', 'Birdwatching'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé / Cáceres - Mato Grosso, Brazil'
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
    ],
    howToGetThere: {
        description: [
            'Access to the Northern Pantanal is via Cuiabá (MT), with daily flights from São Paulo, Rio de Janeiro, Campo Grande and other major cities.',
            'From Cuiabá, take MT-060 for about 100 km of paved road to Poconé, where the Transpantaneira begins. For Cáceres, take BR-070 for approximately 215 km.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Flight to Cuiabá',
                description: 'Marechal Rondon Airport (CGB) — daily flights from São Paulo, Rio de Janeiro, Brasília and Campo Grande.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Car / Private Transfer',
                description: 'From Cuiabá to Poconé: ~100 km paved road. From Poconé to Porto Jofre: 147 km via Transpantaneira (unpaved). 4WD vehicles recommended during the wet season.',
                icon: 'mdi-car-4x4'
            },
            {
                type: 'bus',
                title: 'Bus to Poconé',
                description: 'Regular bus lines from Cuiabá to Poconé. From there, private transfer or own vehicle is needed to travel the Transpantaneira.',
                icon: 'mdi-bus'
            }
        ]
    }
};

export const pantanalNorteEs: Region = {
    ...commonData,
    name: 'Pantanal Norte',
    subtitle: 'El reino del jaguar y la Transpantaneira.',
    description: [
        'El Pantanal Norte es famoso por la Carretera Transpantaneira y por ser el mejor lugar del mundo para avistar jaguares, especialmente en la región de Porto Jofre. Es un destino enfocado en la observación intensa de vida salvaje y fotografía de naturaleza.',
        'Partiendo de Cuiabá, capital de Mato Grosso, el viaje recorre unos 100 km de asfalto hasta Poconé, donde comienza la legendaria Transpantaneira — una carretera de tierra sobre 122 puentes de madera que atraviesa el corazón del Pantanal Norte por 147 km hasta Porto Jofre, a orillas del Río Cuiabá.',
        'La región alberga una impresionante biodiversidad: más de 650 especies de aves, capibaras, caimanes, nutrias gigantes, tapires y, por supuesto, el jaguar — el felino más grande de las Américas. A lo largo de la Transpantaneira, lodges ecológicos y pousadas ofrecen toda la comodidad para vivir la experiencia pantanera de forma segura y auténtica.',
        'En la región de Cáceres, el Río Paraguay y la Reserva Ecológica Tayamã añaden otra dimensión al Pantanal Norte, con paseos en bote por bahías y canales para avistar monos, ocelotes, nutrias gigantes y coloridas colonias de aves.'
    ],
    coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
    cities: [cities.pocone, cities.caceres],
    highlights: ['Avistamiento de Jaguares', 'Carretera Transpantaneira', 'Observación de Aves'],
    location: {
        lat: -16.3722,
        lng: -56.6280,
        address: 'Poconé / Cáceres - Mato Grosso, Brasil'
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
    ],
    howToGetThere: {
        description: [
            'El acceso al Pantanal Norte se realiza desde Cuiabá (MT), con vuelos diarios desde São Paulo, Río de Janeiro, Campo Grande y otras ciudades.',
            'Desde Cuiabá, se toma la MT-060 por unos 100 km de asfalto hasta Poconé, donde comienza la Transpantaneira. Para Cáceres, se toma la BR-070 por aproximadamente 215 km.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Vuelo a Cuiabá',
                description: 'Aeropuerto Marechal Rondon (CGB) — vuelos diarios desde São Paulo, Río de Janeiro, Brasília y Campo Grande.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Auto / Traslado privado',
                description: 'De Cuiabá a Poconé: ~100 km de asfalto. De Poconé a Porto Jofre: 147 km por la Transpantaneira (tierra). Se recomiendan vehículos 4x4 en la época de lluvias.',
                icon: 'mdi-car-4x4'
            },
            {
                type: 'bus',
                title: 'Autobús a Poconé',
                description: 'Hay líneas regulares de autobús de Cuiabá a Poconé. Desde allí, es necesario traslado privado o vehículo propio por la Transpantaneira.',
                icon: 'mdi-bus'
            }
        ]
    }
};
