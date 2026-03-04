import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

const commonData = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  galleryImages: [],
  icon: 'mdi-cow'
};

export const pantanalSulPt: Region = {
    ...commonData,
    name: 'Pantanal Sul (MS)',
    subtitle: 'Fazendas tradicionais, pesca e fácil acesso.',
    description: [
        `O Destino Visitar o Pantanal Sul é ingressar em um dos ecossistemas mais vibrantes do planeta. Reconhecido pela UNESCO como Patrimônio Natural da Humanidade e Reserva da Biosfera, este bioma vai muito além de uma planície alagável; é um organismo vivo que pulsa conforme o movimento das águas. Aqui, a transição entre o Cerrado, a Floresta Amazônica e o Chaco cria um refúgio de biodiversidade inigualável, onde a natureza se exibe sem timidez.`,
        `O Ciclo das Águas A paisagem pantaneira está em constante transformação. O regime de cheias e vazantes dita o ritmo da vida. Durante a estação chuvosa, a planície se torna um imenso espelho d'água, refletindo o céu e criando cenários fotográficos deslumbrantes. Já na estação seca, as lagoas diminuem e a vida selvagem se concentra, transformando a região em um verdadeiro "zoológico a céu aberto", ideal para a observação de fauna.`,
        `Vida Selvagem e Clima Com um clima tropical que alterna verões intensos e invernos secos e amenos, o Pantanal é o habitat de gigantes. É o lar da onça-pintada, do tuiuiú (o símbolo do Pantanal), de araras-azuis, jacarés, capivaras e centenas de outras espécies. É um destino obrigatório para biólogos, fotógrafos e amantes da natureza que buscam a autenticidade de um ambiente preservado.`,
        `Sua Experiência Personalizada Nós acreditamos que cada viajante possui um ritmo próprio. Por isso, fugimos do turismo de massa. Nossa especialidade é conectar você à essência do Pantanal Sul através de roteiros flexíveis. Seja através de safáris fotográficos em veículos 4x4, focagem noturna de animais, passeios de barco pelos rios Aquidauana ou Miranda, cavalgadas pelas fazendas tradicionais ou pesca esportiva, nós desenhamos a sua jornada.`,
        `Se você não encontrou o pacote exato que procurava, não se preocupe. Entre em contato conosco. Nossa equipe está pronta para criar um roteiro sob medida, garantindo conforto, segurança e uma imersão inesquecível na maior planície alagável do mundo.`
    ],
    coverImage: `${baseImgPath}/pantanal-sul/img1.webp`,
    cities: [cities.aquidauana, cities.miranda, cities.corumba],
    highlights: ['Pesca Esportiva', 'Cavalgadas', 'Focagem Noturna', 'Safaris'],
    // Campos novos que estavam faltando:
    location: {
        lat: -20.4697,
        lng: -55.7876,
        address: 'Aquidauana/Miranda - Mato Grosso do Sul, Brasil'
    },
    details: {
        bestTime: 'Maio a Setembro (Seca e Ipês floridos) | Outubro a Março (Cheia)',
        climate: 'Tropical. Verões chuvosos e invernos secos.',
        access: 'Aeroporto de Campo Grande (CGR) + Transfer (aprox. 3h).',
    },
    gastronomy: ['Sopa Paraguaia', 'Arroz Carreteiro', 'Chipa', 'Caldo de Piranha'],
    tips: [
        'Combine o roteiro com a cidade de Bonito.',
        'Ótimo para vivenciar o dia a dia do peão pantaneiro.',
        'A pesca só é permitida nos meses abertos (março a outubro).'
    ]
};

export const pantanalSulEn: Region = {
    ...commonData,
    name: 'South Pantanal',
    subtitle: 'Traditional ranches, fishing, and easy access.',
    description: [
        `The Destination Visiting the Southern Pantanal means entering one of the most vibrant ecosystems on the planet. Recognized by UNESCO as a World Natural Heritage Site and Biosphere Reserve, this biome is far more than just a wetland; it is a living organism that pulses with the movement of water. Here, the unique transition between the Savanna (Cerrado), the Amazon Rainforest, and the Chaco creates an unparalleled biodiversity refuge where nature displays itself without inhibition.`,
        `The Cycle of Waters The Pantanal landscape is in constant transformation. The cycle of floods and receding waters dictates the rhythm of life. During the wet season, the plains turn into a vast water mirror, reflecting the sky and creating breathtaking photographic scenery. In the dry season, the lagoons shrink and wildlife gathers around the remaining water sources, turning the region into a true "open-air zoo," perfect for wildlife spotting.`,
        `Wildlife and Climate With a tropical climate that alternates between intense summers and mild, dry winters, the Pantanal is the habitat of giants. It is home to the Jaguar, the Jabiru Stork (the symbol of the Pantanal), Hyacinth Macaws, Caimans, Capybaras, and hundreds of other species. It is a must-visit destination for biologists, photographers, and nature lovers seeking the authenticity of a preserved environment.`,
        `Your Personalized Experience We believe that every traveler has their own pace. That is why we avoid mass tourism. Our specialty is connecting you to the essence of the Southern Pantanal through flexible itineraries. Whether through photographic safaris in 4x4 vehicles, nocturnal wildlife spotting, boat tours along the Aquidauana or Miranda rivers, horseback riding through traditional farms, or sport fishing, we design your journey.`,
        `If you haven't found the exact package you were looking for, don't worry. Contact us. Our team is ready to create a tailor-made itinerary, ensuring comfort, safety, and an unforgettable immersion in the world's largest tropical wetland.`
    ],
    coverImage: `${baseImgPath}/pantanal-sul/img1.webp`,
    cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
    highlights: ['Sport Fishing', 'Horseback Riding', 'Night Spotting', 'Safaris'],
    // Campos novos que estavam faltando:
    location: {
        lat: -20.4697,
        lng: -55.7876,
        address: 'Aquidauana/Miranda - Mato Grosso do Sul, Brazil'
    },
    details: {
        bestTime: 'May to September (Dry season) | October to March (Wet season)',
        climate: 'Tropical. Rainy summers and dry winters.',
        access: 'Campo Grande Airport (CGR) + Transfer (approx. 3h).',
    },
    gastronomy: ['Sopa Paraguaia (Cornbread)', 'Wagoner\'s Rice', 'Chipa', 'Piranha Soup'],
    tips: [
        'Combine your itinerary with Bonito.',
        'Great for experiencing the daily life of a "pantaneiro" cowboy.',
        'Fishing is only allowed during open season (March to October).'
    ]
};

export const pantanalSulEs: Region = {
    ...commonData,
    name: 'Pantanal Sur',
    subtitle: 'Estancias tradicionales, pesca y fácil acceso.',
    description: [
        `El Destino Visitar el Pantanal Sur es ingresar a uno de los ecosistemas más vibrantes del planeta. Reconocido por la UNESCO como Patrimonio Natural de la Humanidad y Reserva de la Biosfera, este bioma es mucho más que una llanura inundable; es un organismo vivo que pulsa con el movimiento de las aguas. Aquí, la transición entre el Cerrado, la Selva Amazónica y el Chaco crea un refugio de biodiversidad inigualable, donde la naturaleza se exhibe sin timidez.`,
        `El Ciclo de las Aguas El paisaje pantanero está en constante transformación. El régimen de crecidas y sequías dicta el ritmo de la vida. Durante la temporada de lluvias, la llanura se convierte en un inmenso espejo de agua, reflejando el cielo y creando escenarios fotográficos deslumbrantes. En la temporada seca, las lagunas disminuyen y la vida silvestre se concentra, transformando la región en un verdadero "zoológico a cielo abierto", ideal para la observación de fauna.`,
        `Vida Silvestre y Clima Con un clima tropical que alterna veranos intensos e inviernos secos y templados, el Pantanal es el hábitat de gigantes. Es el hogar del Jaguar (onça-pintada), el Jabirú (símbolo del Pantanal), guacamayos azules, caimanes, carpinchos y cientos de otras especies. Es un destino obligatorio para biólogos, fotógrafos y amantes de la naturaleza que buscan la autenticidad de un ambiente preservado.`,
        `Su Experiencia Personalizada Creemos que cada viajero tiene su propio ritmo. Por eso, huimos del turismo de masas. Nuestra especialidad es conectarlo con la esencia del Pantanal Sur a través de itinerarios flexibles. Ya sea a través de safaris fotográficos en vehículos 4x4, avistamiento nocturno de animales, paseos en barco por los ríos Aquidauana o Miranda, cabalgatas por haciendas tradicionales o pesca deportiva, nosotros diseñamos su jornada.`,
        `Si no encontró el paquete exacto que buscaba, no se preocupe. Contáctenos. Nuestro equipo está listo para crear un itinerario a medida, garantizando confort, seguridad y una inmersión inolvidable en el humedal más grande del mundo.`
    ],
    coverImage: `${baseImgPath}/pantanal-sul/img1.webp`,
    cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
    highlights: ['Pesca Deportiva', 'Cabalgatas', 'Avistamiento Nocturno', 'Safaris'],
    // Campos novos que estavam faltando:
    location: {
        lat: -20.4697,
        lng: -55.7876,
        address: 'Aquidauana/Miranda - Mato Grosso do Sul, Brasil'
    },
    details: {
        bestTime: 'Mayo a Septiembre (Seca) | Octubre a Marzo (Inundación)',
        climate: 'Tropical. Veranos lluviosos e inviernos secos.',
        access: 'Aeropuerto de Campo Grande (CGR) + Traslado (aprox. 3h).',
    },
    gastronomy: ['Sopa Paraguaya', 'Arroz Carreteiro', 'Chipa', 'Caldo de Piraña'],
    tips: [
        'Combine el itinerario con la ciudad de Bonito.',
        'Genial para vivir el día a día del vaquero pantanero.',
        'La pesca solo está permitida en los meses abiertos (marzo a octubre).'
    ]
};
