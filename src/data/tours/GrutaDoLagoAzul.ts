import { type Duration } from "src/model/Duration";
import { type Tour } from "src/model/Tour";

import imageTour1 from "src/assets/images/tours/tour_1.jpg";

export const grutaDoLagoAzulPt = {
  name: "GRUTA DO LAGO AZUL",
  description: `
        Considerada o cartão postal da cidade de Bonito a Gruta do Lago Azul é um passeio contemplativo  e histórico que tem início com uma caminhada de aproximadamente 300m até a entrada da caverna, onde já se pode ter uma idéia  de sua beleza. Descendo aprox. 200m por uma escadaria cavada na terra, avista-se um lago que encanta pelas águas de  tom intensamente azuladas e belíssimos espeleotemas de milhares de anos. O receptivo oferece bar e restaurante, sanitários e loja de souvenires.
    `,
  rules: ["Uso obrigatório de tênis"],
  duration: {
    hours: 1,
    minutes: 30,
  } as Duration,
  distance: "20km",
  keywords: ["bar", "restaurante", "sanitários", "loja de souvenires"],
  included: [
    "Os equipamentos necessários para a realização do passeio estão inclusos no valor",
  ],
  mainImage: imageTour1
} as Tour;

// ENGLISH

export const grutaDoLagoAzulEn = {
  name: "BLUE LAKE GROTTO",
  description: `
        Considered the postcard of the city of Bonito, the Blue Lake Grotto is a contemplative and historical tour that begins with an approximately 300m walk to the cave entrance, where you can already get an idea of its beauty. Descending approx. 200m via a staircase carved into the earth, you will see a lake that enchants with its intensely blue waters and beautiful speleothems thousands of years old. The reception area offers a bar and restaurant, restrooms, and a gift shop.
    `,
  rules: ["Mandatory use of sneakers"],
  duration: {
    hours: 1,
    minutes: 30,
  },
  distance: "20km",
  keywords: ["bar", "restaurant", "restrooms", "gift shop"],
  included: [
    "The necessary equipment for the tour is included in the price.",
  ],
  mainImage: imageTour1
};

//SPANISH

export const grutaDoLagoAzulEs = {
  name: "GRUTA DEL LAGO AZUL",
  description: `
        Considerada la tarjeta postal de la ciudad de Bonito, la Gruta del Lago Azul es una excursión contemplativa e histórica que comienza con una caminata de aproximadamente 300m hasta la entrada de la cueva, donde ya se puede tener una idea de su belleza. Descendiendo aprox. 200m por una escalera cavada en la tierra, se divisa un lago que encanta por sus aguas de tono intensamente azulado y bellísimos espeleotemas de miles de años. El área de recepción ofrece bar y restaurante, baños y tienda de recuerdos.
    `,
  rules: ["Uso obligatorio de zapatillas"],
  duration: {
    hours: 1,
    minutes: 30,
  },
  distance: "20km",
  keywords: ["bar", "restaurante", "baños", "tienda de recuerdos"],
  included: [
    "El equipo necesario para realizar la excursión está incluido en el precio.",
  ],
  mainImage: imageTour1
};