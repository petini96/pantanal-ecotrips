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
    `Conocida mundialmente como el "Caribe de agua dulce", la región de Bonito y Serra da Bodoquena ofrece una experiencia única de ecoturismo. Aquí podrá disfrutar de la flotación en ríos de aguas transparentes, explorar grutas milenarias y contemplar cascadas majestuosas. Es el destino perfecto para quienes buscan un contacto directo con la naturaleza, con una excelente infraestructura de seguridad y preservación ambiental.`
  ],
  coverImage: `${baseImgPath}/bonito/img1.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flotación', 'Cuevas', 'Cascadas', 'Buceo'],
  // Novos campos sugeridos
  location: {
    lat: -21.1214,
    lng: -56.4819,
    address: 'Mato Grosso do Sul, Brasil'
  },
  details: {
    bestTime: 'Abril a Septiembre (Aguas más cristalinas) | Octubre a Marzo (Cascadas más caudalosas)',
    climate: 'Tropical húmedo. Verano caluroso y lluvioso, invierno suave y seco.',
    access: 'Aeropuerto Regional de Bonito (BYO) o Aeropuerto de Campo Grande (CGR) + 290km de traslado.',
  },
  gastronomy: ['Pintado a Urucum', 'Carne de Yacaré', 'Caldo de Piraña', 'Pacú Asado'],
  tips: [
    'Uso obligatorio de Voucher Único para las excursiones.',
    'Reserve con antelación, los paseos tienen cupo diario limitado.',
    'No se permite el uso de protector solar en las flotaciones.'
  ]
};