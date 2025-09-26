import { type Unlimited} from "./Duration";
import { type ItineraryItem } from "./ItineraryItem";
import { type PackageCategory } from "./PackageCategory";
import { type PackageRecommendedFor } from "./PackageRecommendedFor";

export interface MostWantedPackage {
  id?: string;
  title: string;
  subtitle?: string;
  qtdPlaces: number | Unlimited;
  minNumberPeople: number | Unlimited;
  qtdDay: number;
  qtdNight: number;
  itinerary: ItineraryItem[];
  included?: string[];
  notIncluded?: string[];
  observation: string;
  shouldIBring: string[];
  rules?: string[];
  cancellation?: string[];
  packageCategory?: PackageCategory[]
  packageRecommendedFor?: PackageRecommendedFor[]
}