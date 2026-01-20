import { sanFranciscoImages } from "src/data/packages/common-data/san-francisco"
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"

export const sanFranciscoHotelEn: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/fazenda-san-francisco/img0014.jpg`,
    slug: "fazenda-san-francisco",
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
}