import { sanFranciscoImages } from "src/data/packages/common-data/san-francisco"
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"

export const sanFranciscoHotelEs: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`,
    slug: "fazenda-san-francisco",
    name: "Hacienda San Francisco Agro Ecoturismo",
    shortDescription: "Una auténtica hacienda productiva en el Pantanal del Río Miranda, combinando agroecoturismo, observación de fauna (enfoque en jaguares) y una completa estructura de ocio.",
    description: [
        "La Hacienda San Francisco Agro Ecoturismo Posada y Paseos está ubicada en el Pantanal del Río Miranda, Mato Grosso do Sul. El lugar presenta el funcionamiento real de una hacienda: cultivo, producción y quehaceres, caminando juntos con la preocupación por la conservación del medio ambiente.",
        "Con una gran variedad de fauna y flora, la hacienda se especializa en paseos como Birding in Pantanal, Jaguar in Pantanal, Avistamiento Nocturno, Safari Ecológico y diversas otras actividades de observación.",
        "La propiedad ofrece una excelente estructura de ocio en la sede, incluyendo un complejo de piscinas, convirtiéndose en una gran opción para quien quiere conocer el Pantanal Sur con comodidad y seguridad."
    ],
    location: {
        lat: -20.060714, 
        lng: -56.598286,
        address: "Rodovia BR-262, Km 583, Miranda - MS, Brasil"
    },
    commonAreas: [
        "Complejo de Piscinas (02 piscinas e hidromasaje)",
        "Bar Temático",
        "Cantina Pantanera (Restaurante)",
        "Minimuseo (Sala climatizada)",
        "Tienda de Souvenirs",
        "Descanso de Arrieros (Hamacas)",
        "Wi-Fi (Conectividad inalámbrica)",
        "Sala de conferencias/reuniones"
    ],
    gastronomy: [
        "Pensión Completa incluida (desayuno, almuerzo y cena)",
        "Cantina Pantanera con capacidad para atender grandes grupos",
        "Gastronomía regional con ingredientes de la hacienda",
        "Bar con bebidas variadas"
    ],
    accommodations: {
        name: "Apartamentos",
        description: [
            "Apartamentos equipados con aire acondicionado y ventilador de techo.",
            "Frigobar abastecido.",
            "Baño privado con ducha caliente.",
            "Decoración rústica y ambiente con mosquiteros para protección contra insectos.",
            "Opciones que comportan desde parejas hasta familias."
        ],
        galleryImage: sanFranciscoImages
    }
}