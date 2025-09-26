import { type Duration } from "./Duration";
import { type Tour } from "./Tour";

export interface ItineraryItem {
  id?: string
  title: string
  activities: string[]
  observation?: string
  tours?: Tour[]
  duration?: Duration
  rules?: string[]
}