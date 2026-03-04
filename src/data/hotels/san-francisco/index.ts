import { sanFranciscoImages } from "src/data/packages/common-data/san-francisco"
// Supondo que você criará este arquivo de imagens
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"
const commonData = {
  slug: "fazenda-san-francisco"
};

export const sanFranciscoHotelPt: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`,
    name: "Fazenda San Francisco Agro Ecoturismo",
    shortDescription: "Uma autêntica fazenda produtiva no Pantanal do Rio Miranda, combinando agro-ecoturismo, observação de fauna (foco em onças-pintadas) e uma completa estrutura de lazer.",
    description: [
        "A Fazenda San Francisco Agro Ecoturismo Pousada e Passeios situa-se no Pantanal do Rio Miranda, Mato Grosso do Sul. O local apresenta o real funcionamento de uma fazenda: cultivo, produção e afazeres, caminhando juntos com a preocupação da conservação do meio ambiente.",
        "Com uma grande variedade de fauna e flora, a fazenda é especialista em passeios como Birding in Pantanal, Jaguar in Pantanal, Focagem Noturna, Safari Ecológico e diversas outras atividades de observação.",
        "A propriedade oferece uma excelente estrutura de lazer na sede, incluindo um complexo de piscinas, tornando-se uma ótima opção para quem quer conhecer o Pantanal Sul com conforto e segurança."
    ],
    location: {
        lat: -20.060714,
        lng: -56.598286,
        address: "Rodovia BR-262, Km 583, Miranda - MS, Brasil"
    },
    commonAreas: [
        "Complexo de Piscinas (02 piscinas e hidromassagem)",
        "Bar Temático",
        "Cantina Pantaneira (Restaurante)",
        "Minimuseu (Sala climatizada)",
        "Loja de Souvenir",
        "Repouso Boiadeiro",
        "Wi-Fi (Conectividade sem fio)",
        "Sala de palestras/reuniões"
    ],
    gastronomy: [
        "Pensão Completa inclusa (café da manhã, almoço e jantar)",
        "Cantina Pantaneira com capacidade para atender grandes grupos",
        "Gastronomia regional com ingredientes da fazenda",
        "Bar com bebidas variadas"
    ],
    accommodations: {
        name: "Apartamentos",
        description: [
            "Apartamentos equipados com ar-condicionado e ventilador de teto.",
            "Frigobar abastecido.",
            "Banheiro privativo com chuveiro quente.",
            "Decoração rústica e ambiente telado para proteção contra insetos.",
            "Opções que comportam desde casais até famílias."
        ],
        galleryImage: sanFranciscoImages
    }
};

export const sanFranciscoHotelEn: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`,
    name: "San Francisco Agro Ecotourism Farm",
    shortDescription: "An authentic productive farm in the Miranda River Pantanal, combining agro-ecotourism, wildlife observation (focus on jaguars), and a complete leisure infrastructure.",
    description: [
        "The San Francisco Agro Ecotourism Lodge and Tours Farm is located in the Pantanal of the Miranda River, Mato Grosso do Sul. It presents the real functioning of a farm: cultivation, production, and chores, walking hand in hand with a concern for environmental conservation.",
        "Boasting a wide variety of fauna and flora, the farm specializes in tours such as Birding in Pantanal, Jaguar in Pantanal, Night Spotting, Ecological Safari, and various other observation activities.",
        "The property offers excellent leisure infrastructure at the headquarters, including a swimming pool complex, making it a great option for those who want to explore the Southern Pantanal with comfort and safety."
    ],
    location: {
        lat: -20.060714,
        lng: -56.598286,
        address: "Rodovia BR-262, Km 583, Miranda - MS, Brazil"
    },
    commonAreas: [
        "Swimming Pool Complex (02 pools and jacuzzi)",
        "Themed Bar",
        "Pantaneira Canteen (Restaurant)",
        "Mini-museum (Air-conditioned room)",
        "Souvenir Shop",
        "Cowboy Resting Area (Hammocks)",
        "Wi-Fi (Wireless connectivity)",
        "Lecture/Meeting room"
    ],
    gastronomy: [
        "Full Board included (breakfast, lunch, and dinner)",
        "Pantaneira Canteen with capacity to serve large groups",
        "Regional cuisine with farm-fresh ingredients",
        "Bar with a variety of drinks"
    ],
    accommodations: {
        name: "Apartments",
        description: [
            "Apartments equipped with air conditioning and ceiling fans.",
            "Stocked minibar.",
            "Private bathroom with hot shower.",
            "Rustic decoration and screened environment for insect protection.",
            "Options suitable for couples to families."
        ],
        galleryImage: sanFranciscoImages
    }
};

export const sanFranciscoHotelEs: Hotel = {
    ...commonData,
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`,
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
};
