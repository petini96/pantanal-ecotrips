import { sanFranciscoHotelPt, sanFranciscoHotelEn, sanFranciscoHotelEs } from './san-francisco';
import { jungleLodgeHotelPt, jungleLodgeHotelEn, jungleLodgeHotelEs } from './jungle-lodge';
import { type Hotel } from "src/model/Hotel";







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