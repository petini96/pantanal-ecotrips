import { sanFranciscoHotelPt, sanFranciscoHotelEn, sanFranciscoHotelEs } from './san-francisco';
import { jungleLodgeHotelPt, jungleLodgeHotelEn, jungleLodgeHotelEs } from './jungle-lodge';
import { hotelMatoGrossoPt, hotelMatoGrossoEn, hotelMatoGrossoEs } from './hotel-mato-grosso';
import { hotelBaiazinhaPt, hotelBaiazinhaEn, hotelBaiazinhaEs } from './hotel-baiazinha';
import { pousadaPiuvalPt, pousadaPiuvalEn, pousadaPiuvalEs } from './pousada-piuval';
import { type Hotel } from "src/model/Hotel";







export const hotelsEn: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEn,
  sanFrancisco: sanFranciscoHotelEn,
  hotelMatoGrosso: hotelMatoGrossoEn,
  hotelBaiazinha: hotelBaiazinhaEn,
  pousadaPiuval: pousadaPiuvalEn,
};

export const hotelsPt: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelPt,
  sanFrancisco: sanFranciscoHotelPt,
  hotelMatoGrosso: hotelMatoGrossoPt,
  hotelBaiazinha: hotelBaiazinhaPt,
  pousadaPiuval: pousadaPiuvalPt,
};

export const hotelsEs: Record<string, Hotel> = {
  jungleLodge: jungleLodgeHotelEs,
  sanFrancisco: sanFranciscoHotelEs,
  hotelMatoGrosso: hotelMatoGrossoEs,
  hotelBaiazinha: hotelBaiazinhaEs,
  pousadaPiuval: pousadaPiuvalEs,
};