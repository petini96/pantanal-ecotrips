import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"

export const jungleLodgeHotelPt: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img1.jpg`,
    slug: "jungle-lodge",
    name: "Pantanal Jungle Lodge",
    shortDescription: "Um hotel de madeira aconchegante sobre palafitas perto do Rio Miranda, oferecendo o equilíbrio perfeito entre conforto e a natureza selvagem do Pantanal Sul.",
    description: [
        "O Jungle Lodge está localizado na Estrada Parque do Pantanal Sul, a 7 quilômetros da estrada de acesso principal (Buraco das Piranhas), na região do Passo do Lontra.",
        "A estrutura do hotel é uma construção de madeira sobre palafitas situada perto da margem do Rio Miranda, perfeita para se adaptar ao evento típico do ecossistema chamado 'cheia', quando o nível da água sobe.",
        "Respeitando a vida selvagem e buscando promover um equilíbrio perfeito entre o homem e a natureza, o Pantanal Jungle Lodge oferece a melhor hospitalidade e atividades turísticas no Pantanal Sul.",
        "A localização oferece excelentes oportunidades para passeios turísticos com guias nativos bilíngues, com grande conhecimento da fauna e flora locais."
    ],
    location: {
        lat: -19.5728,
        lng: -57.0258,
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
        galleryImage: []
    }
}

