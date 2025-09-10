import image1 from 'src/assets/images/tours/tour_1.jpg'
import image2 from 'src/assets/images/tours/tour_2.jpeg'
import image3 from 'src/assets/images/tours/tour_3.jpg'
import image4 from 'src/assets/images/tours/tour_4.jpg'
import image5 from 'src/assets/images/tours/tour_5.jpg'

export interface Tour { id: string; image: string; price: string; }

export const tours: Tour[] = [
  { id: 'safari_pantanal', image: image1, price: '2.850,00' },
  { id: 'flutuacao_prata', image: image2, price: '1.980,00' },
  { id: 'pantanal_jungle_lodge', image: image3, price: '3.500,00' },
  { id: 'combo_pantanal_bonito', image: image3, price: '4.500,00' },
  { id: 'cavalgada_pantaneira', image: image4, price: '1.550,00' },
  { id: 'outro_exemplo_1', image: image5, price: '1.234,00' },
  { id: 'outro_exemplo_2', image: image1, price: '5.678,00' },
];

export type TourForSitemap = Omit<Tour, 'image' | 'price'>;

export const toursForSitemap: TourForSitemap[] = tours.map(({ id }) => ({ id }));