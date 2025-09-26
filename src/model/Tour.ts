import { type Duration } from "./Duration";
import { type TourCategory } from "./TourCategory";

export interface Tour {
  id?: string
  name: string
  description?: string
  rules?: string[]
  duration: Duration
  distance?: string
  keywords: string[]
  included?: string[]
  notIncluded?: string[]
  minAgeYears?: number
  mainImage: string
  category?: TourCategory
}