import { type Hotel } from "src/model/Hotel";
import { jungleLodgeHotelEn } from "./jungle-lodge/JungleLodgeHotelEn";
import { jungleLodgeHotelPt } from "./jungle-lodge/JungleLodgeHotelPt";
import { jungleLodgeHotelEs } from "./jungle-lodge/JungleLodgeHotelEs";
import { sanFranciscoHotelEn } from "./san-francisco/sanFranciscoHotelEn";
import { sanFranciscoHotelPt } from "./san-francisco/SanFranciscoHotelPt";
import { sanFranciscoHotelEs } from "./san-francisco/sanFranciscoHotelEs";

export const hotelsEn: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEn,
  sanFrancisco: sanFranciscoHotelEn
};

export const hotelsPt: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelPt,
  sanFrancisco: sanFranciscoHotelPt
};

export const hotelsEs: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEs,
  sanFrancisco: sanFranciscoHotelEs
};