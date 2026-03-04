import { jungleLodgeImages } from "src/data/packages/common-data/jungle-lodge"
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"
const commonData = {
  slug: "jungle-lodge"
};

export const jungleLodgeHotelPt: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img29.jpg`,
    name: "Pantanal Jungle Lodge",
    shortDescription: "Um hotel de madeira aconchegante sobre palafitas perto do Rio Miranda, oferecendo o equilíbrio perfeito entre conforto e a natureza selvagem do Pantanal Sul.",
    description: [
        "O Jungle Lodge está localizado na Estrada Parque do Pantanal Sul, a 7 quilômetros da estrada de acesso principal (Buraco das Piranhas), na região do Passo do Lontra.",
        "A estrutura do hotel é uma construção de madeira sobre palafitas situada perto da margem do Rio Miranda, perfeita para se adaptar ao evento típico do ecossistema chamado 'cheia', quando o nível da água sobe.",
        "Respeitando a vida selvagem e buscando promover um equilíbrio perfeito entre o homem e a natureza, o Pantanal Jungle Lodge oferece a melhor hospitalidade e atividades turísticas no Pantanal Sul.",
        "A localização oferece excelentes oportunidades para passeios turísticos com guias nativos bilíngues, com grande conhecimento da fauna e flora locais."
    ],
    location: {
        lat: -19.5763595,
        lng: -57.0337329,
        address: "Estrada Parque, Passo do Lontra, Corumbá - MS, Brasil"
    },
    commonAreas: [
        "Piscina",
        "Varanda com redes (Redário)",
        "Restaurante espaçoso com ar-condicionado",
        "Sala de TV",
        "Bar em estilo pantaneiro",
        "Jogos interativos (bilhar, cartas)",
        "Lavanderia comunitária",
        "Wi-Fi gratuito",
        "Estacionamento gratuito"
    ],
    gastronomy: [
        "Buffet livre para café da manhã (06:00 às 07:30)",
        "Almoço (12:00 às 13:30)",
        "Jantar (19:30 às 21:00)",
        "Bar com grande variedade de bebidas"
    ],
    accommodations: {
        name: "Quartos e Dormitórios",
        description: [
            "Doze quartos privativos disponíveis.",
            "Cinco dormitórios com capacidade máxima de 8 pessoas.",
            "Um quarto acessível (PCD).",
            "Todos os quartos possuem ar-condicionado, frigobar, banheiro privativo e roupa de cama/banho."
        ],
        galleryImage: jungleLodgeImages
    }
};

export const jungleLodgeHotelEn: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img29.jpg`,
    name: "Pantanal Jungle Lodge",
    shortDescription: "A cozy wooden lodge on stilts located near the Miranda River, offering a perfect balance between comfort and the wild nature of the Southern Pantanal.",
    description: [
        "Jungle Lodge is located on the park road of Southern Pantanal, 7 kilometers from the main access road (Buraco Das Piranhas station), in a region named Passo Do Lontra.",
        "The hotel structure is a wooden construction on stilts situated near the bank of the Miranda River, perfectly adapted to the typical ecosystem event called 'water season' when the water level rises.",
        "Respecting the wildlife and seeking to promote a perfect balance between man and nature, the Pantanal Jungle Lodge offers the best hospitality and tourist activities in Southern Pantanal, adding a cozy atmosphere to your discovery adventures.",
        "The location offers excellent opportunities for sightseeing activities with native bilingual guides knowledgeable about the local fauna and flora."
    ],
    location: {
        lat: -19.5763595,
        lng: -57.0337329,
        address: "Estrada Parque, Passo do Lontra, Corumbá - MS, Brazil"
    },
    commonAreas: [
        "Swimming pool",
        "Hammock veranda",
        "Spacious air-conditioned restaurant",
        "TV room",
        "Pantanal style barroom",
        "Interactive games (billiards, cards)",
        "Communal laundry",
        "Free Wi-Fi",
        "Free Parking"
    ],
    gastronomy: [
        "Free buffet for breakfast (06:00 to 07:30)",
        "Lunch (12:00 to 13:30)",
        "Dinner (19:30 to 21:00)",
        "Bar with a large variety of beverages"
    ],
    accommodations: {
        name: "Rooms & Dormitories",
        description: [
            "Twelve private rooms available.",
            "Five dormitories with a maximum capacity of 8 people.",
            "One accessible room.",
            "All rooms feature air conditioning, mini fridge, private bathroom, and bed/bath linen."
        ],
        galleryImage: jungleLodgeImages
    }
};

export const jungleLodgeHotelEs: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img29.jpg`,
    name: "Pantanal Jungle Lodge",
    shortDescription: "Un acogedor albergue de madera sobre pilotes cerca del río Miranda, que ofrece un equilibrio perfecto entre la comodidad y la naturaleza salvaje del Pantanal Sur.",
    description: [
        "El Jungle Lodge está ubicado en la carretera del parque del Pantanal Sur, a 7 kilómetros de la carretera de acceso principal (estación Buraco Das Piranhas), en la región de Passo Do Lontra.",
        "La estructura del hotel es una construcción de madera sobre pilotes situada cerca de la orilla del río Miranda, perfectamente adaptada al evento típico del ecosistema llamado 'temporada de aguas'.",
        "Respetando la vida silvestre y buscando promover un equilibrio perfecto entre el hombre y la naturaleza, el Pantanal Jungle Lodge ofrece la mejor hospitalidad y actividades turísticas.",
        "La ubicación ofrece excelentes oportunidades para actividades turísticas con guías nativos bilingües con gran conocimiento de la fauna y flora local."
    ],
    location: {
        lat: -19.5763595,
        lng: -57.0337329,
        address: "Estrada Parque, Passo do Lontra, Corumbá - MS, Brasil"
    },
    commonAreas: [
        "Piscina",
        "Veranda con hamacas",
        "Amplio restaurante con aire acondicionado",
        "Sala de TV",
        "Bar estilo Pantanal",
        "Juegos interactivos (billar, cartas)",
        "Lavandería comunitaria",
        "Wi-Fi gratuito",
        "Estacionamiento gratuito"
    ],
    gastronomy: [
        "Buffet libre para el desayuno (06:00 a 07:30)",
        "Almuerzo (12:00 a 13:30)",
        "Cena (19:30 a 21:00)",
        "Bar con gran variedad de bebidas"
    ],
    accommodations: {
        name: "Habitaciones y Dormitorios",
        description: [
            "Doce habitaciones privadas disponibles.",
            "Cinco dormitorios con capacidad máxima de 8 personas.",
            "Una habitación accesible.",
            "Todas las habitaciones cuentan con aire acondicionado, minibar, baño privado y ropa de cama/baño."
        ],
        galleryImage: jungleLodgeImages
    }
};
