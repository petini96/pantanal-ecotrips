import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalSulEs: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
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
  galleryImages: [],
  icon: 'mdi-cow',
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