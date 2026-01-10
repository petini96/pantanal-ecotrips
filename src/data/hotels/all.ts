import { type Hotel } from "src/model/Hotel";
import { jungleLodgeHotelEn } from "./jungle-lodge/JungleLodgeHotelEn";
import { jungleLodgeHotelPt } from "./jungle-lodge/JungleLodgeHotelPt";
import { jungleLodgeHotelEs } from "./jungle-lodge/JungleLodgeHotelEs";

export const hotelsEn: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEn
};

export const hotelsPt: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelPt
};

export const hotelsEs: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEs
};