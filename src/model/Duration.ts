export interface Duration {
  hours: number;
  minutes: number;
}

export interface Unlimited {
  pt: "Ilimitado";
  en: "Unlimited";
  es: "No mucho";
}

export const UNLIMITED_PLACES: Unlimited = {
  pt: "Ilimitado",
  en: "Unlimited",
  es: "No mucho",
};