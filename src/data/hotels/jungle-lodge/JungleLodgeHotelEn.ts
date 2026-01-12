import { jungleLodgeImages } from "src/data/packages/common-data/jungle-lodge"
import { type Hotel } from "src/model/Hotel"
import { GENERAL_BUCKET_NAME } from "src/utils/environmentUtils"

export const jungleLodgeHotelEn: Hotel = {
    heroImage: `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img29.jpg`, // Placeholder path
    slug: "jungle-lodge",
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
}

