import { sanFranciscoImages } from "src/data/packages/common-data/san-francisco" // Supondo que você criará este arquivo de imagens
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"

export const sanFranciscoHotelPt: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`, // Caminho sugerido
    slug: "fazenda-san-francisco",
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
}