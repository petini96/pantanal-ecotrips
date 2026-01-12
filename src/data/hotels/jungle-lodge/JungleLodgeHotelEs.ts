import { jungleLodgeImages } from "src/data/packages/common-data/jungle-lodge";
import { type Hotel } from "src/model/Hotel";
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils";

export const jungleLodgeHotelEs: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img29.jpg`,
    slug: "jungle-lodge",
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
}