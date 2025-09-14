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
  itinerary: ItineraryItem[] | null;
  included: string[];
  notIncluded: string[];
}

const toursData: Record<string, Omit<Tour, 'id'>> = {
  safari_pantanal: {
    image: imageTour1,
    price: '2.850,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
  flutuacao_prata: {
    image: imageTour2,
    price: '1.980,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
  pantanal_jungle_lodge: {
    image: imageTour3,
    price: '3.500,00',
    itinerary: [
      { day: 1, title: 'tour_pjl_day1_title', subtitle: 'tour_pjl_day1_subtitle', icon: 'mdi-airplane-landing', description: 'tour_pjl_day1_desc' },
      { day: 2, title: 'tour_pjl_day2_title', subtitle: 'tour_pjl_day2_subtitle', icon: 'mdi-canoe', description: 'tour_pjl_day2_desc' },
      { day: 3, title: 'tour_pjl_day3_title', subtitle: 'tour_pjl_day3_subtitle', icon: 'mdi-jeep-wrangler', description: 'tour_pjl_day3_desc' },
      { day: 4, title: 'tour_pjl_day4_title', subtitle: 'tour_pjl_day4_subtitle', icon: 'mdi-horse-human-reach', description: 'tour_pjl_day4_desc' },
      { day: 5, title: 'tour_pjl_day5_title', subtitle: 'tour_pjl_day5_subtitle', icon: 'mdi-airplane-takeoff', description: 'tour_pjl_day5_desc' },
    ],
    included: ['tour_pjl_included_1', 'tour_pjl_included_2', 'tour_pjl_included_3', 'tour_pjl_included_4', 'tour_pjl_included_5'],
    notIncluded: ['tour_pjl_not_included_1', 'tour_pjl_not_included_2', 'tour_pjl_not_included_3', 'tour_pjl_not_included_4'],
  },
  combo_pantanal_bonito: {
    image: imageTour3,
    price: '4.500,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
  cavalgada_pantaneira: {
    image: imageTour4,
    price: '1.550,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
  outro_exemplo_1: {
    image: imageTour5,
    price: '1.234,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
  outro_exemplo_2: {
    image: imageTour1,
    price: '5.678,00',
    itinerary: null,
    included: [],
    notIncluded: [],
  },
};

export const useTourStore = defineStore('tours', () => {
  // --- STATE ---
  const tours = ref<Record<string, Omit<Tour, 'id'>>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  // --- GETTERS ---
  const getTourById = computed(() => {
    return (id: string): Tour | null => {
      if (tours.value[id]) {
        return { id, ...tours.value[id] };
      }
      return null;
    };
  });

  const allTours = computed((): Tour[] => {
    return Object.entries(tours.value).map(([id, tourData]) => ({
      id,
      ...tourData,
    }));
  });

  // --- ACTIONS ---
  async function fetchTours() {
    if (Object.keys(tours.value).length > 0) return;

    loading.value = true;
    error.value = null;
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      tours.value = toursData;
    } catch (e) {
      error.value = 'Falha ao carregar os passeios.';
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    error,
    getTourById,
    allTours,
    fetchTours,
  };
});