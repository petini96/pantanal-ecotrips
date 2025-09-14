import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import imageTour1 from 'src/assets/images/tours/tour_1.jpg';
import imageTour2 from 'src/assets/images/tours/tour_2.jpeg';
import imageTour3 from 'src/assets/images/tours/tour_3.jpg';
import imageTour4 from 'src/assets/images/tours/tour_4.jpg';
import imageTour5 from 'src/assets/images/tours/tour_5.jpg';

export interface ItineraryItem {
  day: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export interface Tour {
  id: string;
  image: string;
  price: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  itinerary: ItineraryItem[] | null;
  included: string[];
  notIncluded: string[];
}

const toursDataPt: Record<string, Omit<Tour, 'id'>> = {
  safari_pantanal: { image: imageTour1, price: '2.850,00', title: 'Essência do Pantanal', description: 'Uma imersão completa na vida selvagem, com safáris para avistar onças, jacarés e a rica avifauna local.', duration: '5 dias', type: 'Fotografia', itinerary: null, included: [], notIncluded: [] },
  flutuacao_prata: { image: imageTour2, price: '1.980,00', title: 'Mergulho em Águas Cristalinas', description: 'Flutue em rios que são verdadeiros aquários naturais e explore as grutas de beleza estonteante em Bonito.', duration: '4 dias', type: 'Aventura', itinerary: null, included: [], notIncluded: [] },
  pantanal_jungle_lodge: {
    image: imageTour3, price: '3.500,00', title: 'Aventura no Pantanal Jungle Lodge', description: 'Uma experiência imersiva de 5 dias no Pantanal Sul, com foco na vida selvagem e natureza. Inclui safáris, passeios de barco e uma noite de acampamento selvagem.', duration: '5 dias', type: 'Ecoturismo',
    itinerary: [
      { day: 1, title: 'Chegada & Passeio Noturno de Barco', subtitle: 'Boas-vindas ao Pantanal!', icon: 'mdi-airplane-landing', description: 'Chegue em Campo Grande, transfira-se para o lodge e termine o dia com um passeio noturno de barco no Rio Miranda para avistar jacarés e outros animais noturnos.' },
      { day: 2, title: 'Exploração Fluvial & Canoagem', subtitle: 'Perto da vida selvagem aquática', icon: 'mdi-canoe', description: 'Um passeio de barco a motor pela manhã no Rio Miranda, seguido por uma tarde de canoagem silenciosa pelos corixos para uma observação íntima da vida selvagem.' },
      { day: 3, title: 'Safári & Imersão na Natureza', subtitle: 'Explore a Estrada Parque Pantanal', icon: 'mdi-jeep-wrangler', description: 'Embarque em um safári em veículo 4x4, faça uma caminhada ecológica e experimente uma atividade única de flutuação no rio. Safári noturno opcional à noite.' },
      { day: 4, title: 'Cavalgada & Acampamento Selvagem', subtitle: 'Vivencie o Pantanal como um local', icon: 'mdi-horse-human-reach', description: 'Cavalgue por diversas paisagens em uma fazenda tradicional e, em seguida, vá para um acampamento remoto à beira do rio para uma noite de acampamento selvagem sob as estrelas.' },
      { day: 5, title: 'Atividade Matinal & Partida', subtitle: 'Última chance para aventura', icon: 'mdi-airplane-takeoff', description: 'Desfrute de uma última atividade, como pesca de piranhas, antes de retornar a Campo Grande para sua partida.' },
    ],
    included: ['Todos os transportes (transfers do aeroporto, safáris, barcos)', '4 noites de acomodação (3 no lodge, 1 acampamento)', 'Todas as refeições conforme especificado no roteiro', 'Todas as atividades e excursões guiadas', 'Taxas de parque e contribuições ambientais'],
    notIncluded: ['Voos de/para Campo Grande', 'Seguro de viagem (altamente recomendado)', 'Bebidas alcoólicas e refrigerantes', 'Despesas pessoais e gorjetas'],
  },
  combo_pantanal_bonito: { image: imageTour3, price: '4.500,00', title: 'O Melhor dos Dois Mundos', description: 'Combine a aventura selvagem do Pantanal com a beleza translúcida das águas e grutas de Bonito.', duration: '8 dias', type: 'Conforto', itinerary: null, included: [], notIncluded: [] },
  cavalgada_pantaneira: { image: imageTour4, price: '1.550,00', title: 'Vivência Pantaneira', description: 'Sinta-se um verdadeiro pantaneiro cavalgando por paisagens incríveis em uma fazenda tradicional.', duration: '3 dias', type: 'Aventura', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_1: { image: imageTour5, price: '1.234,00', title: 'Outro exemplo', description: 'Exemplo de passeio bom para visitar com a sua família. Muito recomendado.', duration: '5 dias', type: 'Turismo', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_2: { image: imageTour1, price: '5.678,00', title: 'Outro exemplo 2', description: 'Exemplo 2 de passeio bom para visitar com a sua família. Muito recomendado.', duration: '5 dias', type: 'Turismo', itinerary: null, included: [], notIncluded: [] },
};

const toursDataEn: Record<string, Omit<Tour, 'id'>> = {
  safari_pantanal: { image: imageTour1, price: '2,850.00', title: 'Essence of the Pantanal', description: 'A complete immersion into the wildlife, with safaris to spot jaguars, caimans, and the rich local birdlife.', duration: '5 days', type: 'Photography', itinerary: null, included: [], notIncluded: [] },
  flutuacao_prata: { image: imageTour2, price: '1,980.00', title: 'Snorkeling in Crystal Clear Waters', description: 'Snorkel in rivers that are true natural aquariums and explore the breathtakingly beautiful caves in Bonito.', duration: '4 days', type: 'Adventure', itinerary: null, included: [], notIncluded: [] },
  pantanal_jungle_lodge: {
    image: imageTour3, price: '3,500.00', title: 'Pantanal Jungle Lodge Adventure', description: 'An immersive 5-day experience in the Southern Pantanal, focusing on wildlife and nature. Includes safaris, boat trips, and a night of wild camping.', duration: '5 days', type: 'Ecotourism',
    itinerary: [
        { day: 1, title: 'Arrival & Night Boat Tour', subtitle: 'Welcome to the Pantanal!', icon: 'mdi-airplane-landing', description: 'Arrive in Campo Grande, transfer to the lodge, and end the day with a night boat tour on the Miranda River to spot caimans and other nocturnal animals.' },
        { day: 2, title: 'River Exploration & Canoeing', subtitle: 'Up close with aquatic wildlife', icon: 'mdi-canoe', description: 'A morning motorboat tour on the Miranda River, followed by an afternoon of silent canoeing through the streams for an intimate observation of wildlife.' },
        { day: 3, title: 'Safari & Nature Immersion', subtitle: 'Explore the Pantanal Park Road', icon: 'mdi-jeep-wrangler', description: 'Embark on a 4x4 safari, take an ecological walk, and experience a unique river floating activity. Optional night safari in the evening.' },
        { day: 4, title: 'Horseback Riding & Wild Camping', subtitle: 'Experience the Pantanal like a local', icon: 'mdi-horse-human-reach', description: 'Ride through diverse landscapes on a traditional farm, then head to a remote riverside camp for a night of wild camping under the stars.' },
        { day: 5, title: 'Morning Activity & Departure', subtitle: 'Last chance for adventure', icon: 'mdi-airplane-takeoff', description: 'Enjoy one last activity, such as piranha fishing, before returning to Campo Grande for your departure.' },
    ],
    included: ['All transportation (airport transfers, safaris, boats)', '4 nights accommodation (3 at the lodge, 1 camping)', 'All meals as specified in the itinerary', 'All guided activities and excursions', 'Park fees and environmental contributions'],
    notIncluded: ['Flights to/from Campo Grande', 'Travel insurance (highly recommended)', 'Alcoholic beverages and soft drinks', 'Personal expenses and gratuities'],
  },
  combo_pantanal_bonito: { image: imageTour3, price: '4,500.00', title: 'The Best of Both Worlds', description: 'Combine the wild adventure of the Pantanal with the translucent beauty of the waters and caves of Bonito.', duration: '8 days', type: 'Comfort', itinerary: null, included: [], notIncluded: [] },
  cavalgada_pantaneira: { image: imageTour4, price: '1,550.00', title: 'Pantaneiro Experience', description: 'Feel like a true Pantanal cowboy riding through incredible landscapes on a traditional ranch.', duration: '3 days', type: 'Adventure', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_1: { image: imageTour5, price: '1,234.00', title: 'Another Example', description: 'A great tour example to visit with your family. Highly recommended.', duration: '5 days', type: 'Tourism', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_2: { image: imageTour1, price: '5,678.00', title: 'Another Example 2', description: 'Example 2 of a great tour to visit with your family. Highly recommended.', duration: '5 days', type: 'Tourism', itinerary: null, included: [], notIncluded: [] },
};

const toursDataEs: Record<string, Omit<Tour, 'id'>> = {
  safari_pantanal: { image: imageTour1, price: '2.850,00', title: 'Esencia del Pantanal', description: 'Una inmersión completa en la vida salvaje, con safaris para avistar jaguares, caimanes y la rica avifauna local.', duration: '5 días', type: 'Fotografía', itinerary: null, included: [], notIncluded: [] },
  flutuacao_prata: { image: imageTour2, price: '1.980,00', title: 'Buceo en Aguas Cristalinas', description: 'Flote en ríos que son verdaderos acuarios naturales y explore las grutas de belleza deslumbrante en Bonito.', duration: '4 días', type: 'Aventura', itinerary: null, included: [], notIncluded: [] },
  pantanal_jungle_lodge: {
    image: imageTour3, price: '3.500,00', title: 'Aventura en el Pantanal Jungle Lodge', description: 'Una experiencia inmersiva de 5 días en el Pantanal Sur, centrada en la vida salvaje y la naturaleza. Incluye safaris, paseos en barco y una noche de acampada salvaje.', duration: '5 días', type: 'Ecoturismo',
    itinerary: [
      { day: 1, title: 'Llegada y Paseo Nocturno en Barco', subtitle: '¡Bienvenidos al Pantanal!', icon: 'mdi-airplane-landing', description: 'Llegue a Campo Grande, trasládese al lodge y termine el día con un paseo nocturno en barco por el Río Miranda para avistar caimanes y otros animales nocturnos.' },
      { day: 2, title: 'Exploración Fluvial y Piragüismo', subtitle: 'Cerca de la vida salvaje acuática', icon: 'mdi-canoe', description: 'Un paseo en lancha por la mañana en el Río Miranda, seguido de una tarde de piragüismo silencioso por los arroyos para una observación íntima de la vida salvaje.' },
      { day: 3, title: 'Safari e Inmersión en la Naturaleza', subtitle: 'Explore la Carretera Parque Pantanal', icon: 'mdi-jeep-wrangler', description: 'Embárquese en un safari en vehículo 4x4, realice una caminata ecológica y experimente una actividad única de flotación en el río. Safari nocturno opcional por la noche.' },
      { day: 4, title: 'Cabalgata y Acampada Salvaje', subtitle: 'Viva el Pantanal como un lugareño', icon: 'mdi-horse-human-reach', description: 'Cabalge por diversos paisajes en una hacienda tradicional y luego diríjase a un campamento remoto a orillas del río para una noche de acampada salvaje bajo las estrellas.' },
      { day: 5, title: 'Actividad Matutina y Partida', subtitle: 'Última oportunidad para la aventura', icon: 'mdi-airplane-takeoff', description: 'Disfrute de una última actividad, como la pesca de pirañas, antes de regresar a Campo Grande para su partida.' },
    ],
    included: ['Todos los transportes (traslados del aeropuerto, safaris, barcos)', '4 noches de alojamiento (3 en el lodge, 1 acampada)', 'Todas las comidas según se especifica en el itinerario', 'Todas las actividades y excursiones guiadas', 'Tasas de parque y contribuciones ambientales'],
    notIncluded: ['Vuelos hacia/desde Campo Grande', 'Seguro de viaje (muy recomendado)', 'Bebidas alcohólicas y refrescos', 'Gastos personales y propinas'],
  },
  combo_pantanal_bonito: { image: imageTour3, price: '4.500,00', title: 'Lo Mejor de Dos Mundos', description: 'Combine la aventura salvaje del Pantanal con la belleza translúcida de las aguas y grutas de Bonito.', duration: '8 días', type: 'Confort', itinerary: null, included: [], notIncluded: [] },
  cavalgada_pantaneira: { image: imageTour4, price: '1.550,00', title: 'Vivencia Pantaneira', description: 'Siéntase como un verdadero pantaneiro cabalgando por paisajes increíbles en una hacienda tradicional.', duration: '3 días', type: 'Aventura', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_1: { image: imageTour5, price: '1.234,00', title: 'Otro Ejemplo', description: 'Ejemplo de un buen tour para visitar con su familia. Muy recomendado.', duration: '5 días', type: 'Turismo', itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_2: { image: imageTour1, price: '5.678,00', title: 'Otro Ejemplo 2', description: 'Ejemplo 2 de un buen tour para visitar con su familia. Muy recomendado.', duration: '5 días', type: 'Turismo', itinerary: null, included: [], notIncluded: [] },
};

export const useTourStore = defineStore('tours', () => {
  const tours = ref<Record<string, Omit<Tour, 'id'>>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  function clearTours() {
    tours.value = {};
  }
  
  async function fetchTours(lang = 'pt-BR') {
    if (Object.keys(tours.value).length > 0) return;

    loading.value = true;
    error.value = null;
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      switch (lang) {
        case 'en-US':
          tours.value = toursDataEn;
          break;
        case 'es':
          tours.value = toursDataEs;
          break;
        default:
          tours.value = toursDataPt;
      }
    } catch (e) {
      error.value = 'Falha ao carregar os passeios.';
      console.error(e);
    } finally {
      loading.value = false;
    }
  }
  
  const getTourById = computed(() => (id: string): Tour | null => tours.value[id] ? { id, ...tours.value[id] } : null);
  const allTours = computed((): Tour[] => Object.entries(tours.value).map(([id, tourData]) => ({ id, ...tourData })));
  
  return { loading, error, getTourById, allTours, fetchTours, clearTours };
});