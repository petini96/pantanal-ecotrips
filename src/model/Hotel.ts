import { type GalleryImage } from "src/components/galerry/MosaicGallery.vue"

export interface Hotel {
    id?: string
    slug: string
    heroImage: string
    name: string
    description: string[]
    shortDescription: string
    location: {
        lat: number
        lng: number
        address: string
    },
    commonAreas: string[]
    gastronomy: string[]
    accommodations: Accommodations
}

export interface Accommodations {
    name: string
    description: string[]
    galleryImage: GalleryImage[]
}