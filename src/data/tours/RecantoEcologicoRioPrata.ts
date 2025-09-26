import { type Duration } from "src/model/Duration";
import { type Tour } from "src/model/Tour";

import imageTour1 from "src/assets/images/tours/tour_1.jpg";

export const recantoEcologicoRioPrataPt = {
  name: "RECANTO ECOLÓGICO RIO DA PRATA",
  description: `
        O passeio tem início com uma caminhada de aprox. 50 min. por uma trilha interpretativa através de uma linda e preservada floresta com rica flora, onde conviverá harmoniosamente com aves e  outros animais silvestres. Ao mergulhar na nascente do Rio Olho D´água, um novo mundo estará diante de seus olhos. Você flutuará tranquilamente em um imenso aquário de águas cristalinas por aprox. 2.200m. A curiosa sensação que se  tem é de estar voando em meio a animais e plantas subaquáticas. Após o passeio, existe a tentadora opção de saborear um delicioso almoço típico sul-matogrossense, servido na sede da fazenda, que possui bar e restaurante, sanitários, redário  e loja de souvenires. Outra opção seria um passeio a cavalo para completar o dia. Os equipamentos para flutuação (roupa e bota de neoprene, colete salva-vidas, máscara e  snorkel)   estão inclusos. Duração: dia    todo. Distância: 56km.
    `,
  included: [
    "roupa e bota de neoprene",
    "colete salva-vidas",
    "máscara",
    "snorkel",
  ],
  duration: {
    hours: 23,
    minutes: 59,
  } as Duration,
  distance: "56 km",
  keywords: [
    "nascente",
    "flora",
    "animais silvestres",
    "águas cristalinas",
    "passeio a cavalo",
  ],
  mainImage: imageTour1
} as Tour;

// ENGLISH

export const recantoEcologicoRioPrataEn = {
  name: "RECANTO ECOLÓGICO RIO DA PRATA",
  description: `
        The tour begins with an approx. 50-minute walk on an interpretive trail through a beautiful and preserved forest with rich flora, where you will coexist harmoniously with birds and other wild animals. Upon entering the spring of the Olho D'água River, a new world will be before your eyes. You will float peacefully in a huge aquarium of crystal-clear waters for approx. 2,200m. The curious sensation one has is of flying amidst underwater animals and plants. After the tour, there is the tempting option to savor a delicious typical lunch from Mato Grosso do Sul, served at the farm's headquarters, which has a bar and restaurant, restrooms, a hammock area, and a gift shop. Another option is a horseback ride to complete the day. Floating equipment (neoprene wetsuit and boots, life vest, mask, and snorkel) is included. Duration: full day. Distance: 56km.
    `,
  included: [
    "neoprene wetsuit and boots",
    "life vest",
    "mask",
    "snorkel",
  ],
  duration: {
    hours: 23,
    minutes: 59,
  },
  distance: "56 km",
  keywords: [
    "river spring",
    "flora",
    "wild animals",
    "crystal-clear waters",
    "horseback riding",
  ],
  mainImage: imageTour1
};

// SPANISH

export const recantoEcologicoRioPrataEs = {
  name: "RECANTO ECOLÓGICO RIO DA PRATA",
  description: `
        La excursión comienza con una caminata de aprox. 50 min. por un sendero interpretativo a través de un hermoso y preservado bosque con rica flora, donde convivirá armoniosamente con aves y otros animales silvestres. Al entrar en el naciente del Río Olho D'água, un nuevo mundo estará ante sus ojos. Flotará tranquilamente en un inmenso acuario de aguas cristalinas por aprox. 2.200m. La curiosa sensación que se tiene es la de estar volando entre animales y plantas subacuáticas. Después de la excursión, existe la tentadora opción de saborear un delicioso almuerzo típico de Mato Grosso do Sul, servido en la sede de la hacienda, que cuenta con bar y restaurante, baños, área de hamacas y tienda de recuerdos. Otra opción sería un paseo a caballo para completar el día. El equipo para la flotación (traje y botas de neopreno, chaleco salvavidas, máscara y snorkel) está incluido. Duración: día completo. Distancia: 56km.
    `,
  included: [
    "traje y botas de neopreno",
    "chaleco salvavidas",
    "máscara",
    "snorkel",
  ],
  duration: {
    hours: 23,
    minutes: 59,
  },
  distance: "56 km",
  keywords: [
    "naciente del río",
    "flora",
    "animales silvestres",
    "aguas cristalinas",
    "paseo a caballo",
  ],
  mainImage: imageTour1
};