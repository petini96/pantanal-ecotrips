import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const bonitoSerraBodoquenaEs: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito y Sierra de Bodoquena',
  subtitle: 'La capital del ecoturismo brasileño y sus aguas cristalinas.',
  description: [
    `Conocida como el "Caribe de agua dulce", Bonito es el principal destino de ecoturismo de Brasil y ofrece una experiencia única de contacto con la naturaleza. La región es famosa por sus ríos de aguas cristalinas, donde es posible realizar flotaciones y observar una increíble diversidad de peces y plantas acuáticas como si estuviera en un acuario gigante.`,
    `Además de las flotaciones, Bonito y la Serra da Bodoquena albergan impresionantes grutas con formaciones geológicas milenarias y lagos subterráneos de azul intenso, como la famosa Gruta del Lago Azul. Las cascadas de la región también son un espectáculo aparte, con majestuosas caídas de agua y piscinas naturales perfectas para el baño.`,
    `La ciudad cuenta con una excelente infraestructura turística, con opciones gastronómicas que van desde la cocina regional pantanera hasta platos internacionales, y una red hotelera diversificada. El turismo aquí es organizado y sostenible: las atracciones tienen límite de visitas diarias para preservar el medio ambiente, asegurando que las bellezas naturales permanezcan intocadas para las futuras generaciones.`
  ],
  coverImage: `${baseImgPath}/bonito/img1.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
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
        description: 'El Aeropuerto Regional de Bonito (BYO) recibe vuelos directos de Campinas (Azul) y conexiones. Es la opción más rápida y cómoda, a solo 15km del centro de la ciudad.',
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