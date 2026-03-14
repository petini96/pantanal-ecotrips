import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

const commonData = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  galleryImages: [],
  icon: 'mdi-fish'
};

export const bonitoSerraBodoquenaPt: Region = {
    ...commonData,
    name: 'Bonito & Serra da Bodoquena',
    subtitle: 'A capital do ecoturismo brasileiro e suas águas cristalinas.',
    description: [
        `Conhecida como o "Caribe de água doce", Bonito é o principal destino de ecoturismo do Brasil e oferece uma experiência única de contato com a natureza. A região é famosa por seus rios de águas cristalinas, onde é possível realizar flutuações e observar uma incrível diversidade de peixes e plantas aquáticas como se estivesse em um aquário gigante.`,
        `Além das flutuações, Bonito e a Serra da Bodoquena abrigam grutas impressionantes com formações geológicas milenares e lagos subterrâneos de azul intenso, como a famosa Gruta do Lago Azul. As cachoeiras da região também são um espetáculo à parte, com quedas d'água majestosas e piscinas naturais perfeitas para banho.`,
        `A cidade possui uma excelente infraestrutura turística, com opções gastronômicas que vão da culinária regional pantaneira a pratos internacionais, e uma rede hoteleira diversificada. O turismo aqui é organizado e sustentável: as atrações têm limite de visitação para preservar o meio ambiente, garantindo que as belezas naturais permaneçam intocadas para as futuras gerações.`
    ],
    coverImage: `${baseImgPath}/bonito/img1.webp`,
    cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
    highlights: ['Flutuações', 'Grutas', 'Cachoeiras', 'Mergulho'],
    location: {
        lat: -21.1214,
        lng: -56.4819,
        address: 'Mato Grosso do Sul, Brasil'
    },
    details: {
        bestTime: 'Abril a Setembro (Águas mais cristalinas) | Outubro a Março (Cachoeiras mais cheias)',
        climate: 'Tropical úmido. Verão quente e chuvoso, inverno ameno e seco.',
        access: 'Aeroporto Regional de Bonito (BYO) ou Aeroporto de Campo Grande (CGR) + 290km de transfer.',
    },
    gastronomy: ['Pintado a Urucum', 'Carne de Jacaré', 'Caldo de Piranha', 'Pacu Assado'],
    tips: [
        'Obrigatório uso de Voucher Único para passeios.',
        'Reserve com antecedência, os passeios têm limite diário.',
        'Não é permitido uso de protetor solar nas flutuações.'
    ],
    howToGetThere: {
        description: [
            'Chegar a Bonito é o primeiro passo para sua aventura. A cidade conta com um aeroporto próprio que facilita o acesso, mas muitos visitantes também optam por desembarcar na capital, Campo Grande, e seguir viagem via terrestre, aproveitando para apreciar as paisagens do Mato Grosso do Sul.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Voos Diretos (BYO)',
                description: 'O Aeroporto Regional de Bonito (BYO) recebe voos diretos de Campinas (Azul) e Congonhas (GOL e LATAM), além de oferecer opções com conexões. É a opção mais rápida e cômoda, a apenas 15km do centro da cidade.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Via Campo Grande (CGR)',
                description: 'Desembarque no Aeroporto Internacional de Campo Grande e siga para Bonito via transfer regular, privativo ou carro alugado. O trajeto de 290km é asfaltado e leva cerca de 4 horas.',
                icon: 'mdi-car-side'
            },
            {
                type: 'bus',
                title: 'Ônibus / Transfer',
                description: 'Existem diversas opções de vans e ônibus que fazem o trajeto Campo Grande - Bonito diariamente, com saídas diretas do aeroporto ou rodoviária.',
                icon: 'mdi-bus'
            }
        ]
    }
};

export const bonitoSerraBodoquenaEn: Region = {
    ...commonData,
    name: 'Bonito & Bodoquena Ridge',
    subtitle: 'The capital of Brazilian ecotourism and its crystal clear waters.',
    description: [
        `Known as the "Freshwater Caribbean", Bonito is Brazil's premier ecotourism destination, offering a unique experience of connection with nature. The region is famous for its crystal-clear rivers, where you can snorkel and observe an incredible diversity of fish and aquatic plants as if you were in a giant aquarium.`,
        `In addition to snorkeling, Bonito and the Serra da Bodoquena are home to impressive caves with millenary geological formations and deep blue underground lakes, such as the famous Blue Lake Cave. The region's waterfalls are also a spectacle apart, with majestic falls and natural swimming pools perfect for bathing.`,
        `The city boasts excellent tourism infrastructure, with dining options ranging from regional Pantanal cuisine to international dishes, and a diverse hotel network. Tourism here is organized and sustainable: attractions have daily visitation limits to preserve the environment, ensuring that natural beauties remain untouched for future generations.`
    ],
    coverImage: `${baseImgPath}/bonito/img1.webp`,
    cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
    highlights: ['Snorkeling', 'Caves', 'Waterfalls', 'Diving'],
    // Novos campos sugeridos
    location: {
        lat: -21.1214,
        lng: -56.4819,
        address: 'Mato Grosso do Sul, Brazil'
    },
    details: {
        bestTime: 'April to September (Clearer waters) | October to March (Fuller waterfalls)',
        climate: 'Humid tropical. Hot and rainy summer, mild and dry winter.',
        access: 'Bonito Regional Airport (BYO) or Campo Grande Airport (CGR) + 290km transfer.',
    },
    gastronomy: ['Pintado a Urucum', 'Alligator Meat', 'Piranha Soup', 'Roasted Pacu'],
    tips: [
        'Single Voucher use is mandatory for tours.',
        'Book in advance, tours have daily limits.',
        'Sunscreen is not allowed in snorkeling activities.'
    ],
    howToGetThere: {
        description: [
            'Getting to Bonito is the first step of your adventure. The city has its own airport facilitating access, but many visitors also choose to land in the capital, Campo Grande, and travel by land, taking the opportunity to enjoy the landscapes of Mato Grosso do Sul.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Direct Flights (BYO)',
                description: 'Bonito Regional Airport (BYO) receives direct flights from Campinas (Azul) and Congonhas (GOL and LATAM), as well as connection options. It is the fastest and most convenient option, just 15km from the city center.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Via Campo Grande (CGR)',
                description: 'Land at Campo Grande International Airport and proceed to Bonito via regular transfer, private car, or rental. The 290km journey is on paved roads and takes about 4 hours.',
                icon: 'mdi-car-side'
            },
            {
                type: 'bus',
                title: 'Bus / Transfer',
                description: 'There are several van and bus options that make the Campo Grande - Bonito route daily, with departures directly from the airport or bus station.',
                icon: 'mdi-bus'
            }
        ]
    }
};

export const bonitoSerraBodoquenaEs: Region = {
    ...commonData,
    name: 'Bonito y Sierra de Bodoquena',
    subtitle: 'La capital del ecoturismo brasileño y sus aguas cristalinas.',
    description: [
        `Conocida como el "Caribe de agua dulce", Bonito es el principal destino de ecoturismo de Brasil y ofrece una experiencia única de contacto con la naturaleza. La región es famosa por sus ríos de aguas cristalinas, donde es posible realizar flotaciones y observar una increíble diversidad de peces y plantas acuáticas como si estuviera en un acuario gigante.`,
        `Además de las flotaciones, Bonito y la Serra da Bodoquena albergan impresionantes grutas con formaciones geológicas milenarias y lagos subterráneos de azul intenso, como la famosa Gruta del Lago Azul. Las cascadas de la región también son un espectáculo aparte, con majestuosas caídas de agua y piscinas naturales perfectas para el baño.`,
        `La ciudad cuenta con una excelente infraestructura turística, con opciones gastronómicas que van desde la cocina regional pantanera hasta platos internacionales, y una red hotelera diversificada. El turismo aquí es organizado y sostenible: las atracciones tienen límite de visitas diarias para preservar el medio ambiente, asegurando que las bellezas naturales permanezcan intocadas para las futuras generaciones.`
    ],
    coverImage: `${baseImgPath}/bonito/img1.webp`,
    cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
    highlights: ['Flotación', 'Grutas', 'Cascadas', 'Buceo'],
    // Novos campos sugeridos
    location: {
        lat: -21.1214,
        lng: -56.4819,
        address: 'Mato Grosso do Sul, Brasil'
    },
    details: {
        bestTime: 'Abril a Septiembre (Aguas más cristalinas) | Octubre a Marzo (Cascadas más caudalosas)',
        climate: 'Tropical húmedo. Verano caluroso y lluvioso, invierno suave y seco.',
        access: 'Aeropuerto Regional de Bonito (BYO) o Aeropuerto de Campo Grande (CGR) + 290km de transfer.',
    },
    gastronomy: ['Pintado a Urucum', 'Carne de Yacaré', 'Caldo de Piraña', 'Pacu Asado'],
    tips: [
        'Es obligatorio el uso de Voucher Único para los paseos.',
        'Reserve con antelación, los paseos tienen límite diario.',
        'No se permite el uso de protector solar en las flotaciones.'
    ],
    howToGetThere: {
        description: [
            'Llegar a Bonito es el primer paso para su aventura. La ciudad cuenta con un aeropuerto propio que facilita el acceso, pero muchos visitantes también optan por desembarcar en la capital, Campo Grande, y seguir viaje por tierra, aprovechando para apreciar los paisajes de Mato Grosso do Sul.'
        ],
        transportOptions: [
            {
                type: 'plane',
                title: 'Vuelos Directos (BYO)',
                description: 'El Aeropuerto Regional de Bonito (BYO) recibe vuelos directos de Campinas (Azul) y Congonhas (GOL y LATAM), además de conexiones. Es la opción más rápida y cómoda, a solo 15km del centro de la ciudad.',
                icon: 'mdi-airplane'
            },
            {
                type: 'car',
                title: 'Vía Campo Grande (CGR)',
                description: 'Desembarque en el Aeropuerto Internacional de Campo Grande y siga hacia Bonito vía transfer regular, privado o coche de alquiler. El trayecto de 290km está asfaltado y dura unas 4 horas.',
                icon: 'mdi-car-side'
            },
            {
                type: 'bus',
                title: 'Autobús / Transfer',
                description: 'Existen diversas opciones de furgonetas y autobuses que hacen el trayecto Campo Grande - Bonito diariamente, con salidas directas desde el aeropuerto o la terminal de autobuses.',
                icon: 'mdi-bus'
            }
        ]
    }
};
