import { type Tour } from "src/model/Tour";
import { birdwatchingPt } from "./Birdwatching";
import { bocaDaOncaPt } from "./BocaDaOnca";
import { boteRioFormosoPt } from "./BoteRioFormoso";
import { buracoDasArarasPt } from "./BuracoDasAraras";
import { cabanasArvorismoPt } from "./CabanasArvorismo";
import { canoeingPt } from "./Canoeing";
import { chalanaPiranhaFishingPt } from "./ChalanaPiranhaFishing";
import { ecologicalSafariPt } from "./EcologicalSafari";
import { ecologicalWalkPt } from "./EcologicalWalk";
import { estanciaMimosaPt } from "./EstanciaMimosa";
import { fluvialSafariPt } from "./FluvialSafari";
import { grutaLagoAzulPt } from "./GrutaLagoAzul";
import { horsebackRidingPt } from "./HorsebackRiding";
import { jaguarSafariPt } from "./JaguarSafari";
import { jeepSafariPt } from "./JeepSafari";
import { jungleCampingPt } from "./JungleCamping";
import { motorBoatTripPt } from "./MotorBoatTrip";
import { nocturnalSpotlightingPt } from "./NocturnalSpotlighting";
import { piranhaFishingPt } from "./PiranhaFishing";
import { rioDaPrataPt } from "./RioDaPrata";
import { riverFloatingPt } from "./RiverFloating";

export const toursPt: Record<string, Tour> = {
  [birdwatchingPt.id]: birdwatchingPt,
  [bocaDaOncaPt.id]: bocaDaOncaPt,
  [boteRioFormosoPt.id]: boteRioFormosoPt,
  [buracoDasArarasPt.id]: buracoDasArarasPt,
  [cabanasArvorismoPt.id]: cabanasArvorismoPt,
  [canoeingPt.id]: canoeingPt,
  [chalanaPiranhaFishingPt.id]: chalanaPiranhaFishingPt,
  [ecologicalSafariPt.id]: ecologicalSafariPt,
  [ecologicalWalkPt.id]: ecologicalWalkPt,
  [estanciaMimosaPt.id]: estanciaMimosaPt,
  [fluvialSafariPt.id]: fluvialSafariPt,
  [grutaLagoAzulPt.id]: grutaLagoAzulPt,
  [horsebackRidingPt.id]: horsebackRidingPt,
  [jaguarSafariPt.id]: jaguarSafariPt,
  [jeepSafariPt.id]: jeepSafariPt,
  [jungleCampingPt.id]: jungleCampingPt,
  [motorBoatTripPt.id]: motorBoatTripPt,
  [nocturnalSpotlightingPt.id]: nocturnalSpotlightingPt,
  [piranhaFishingPt.id]: piranhaFishingPt,
  [rioDaPrataPt.id]: rioDaPrataPt,
  [riverFloatingPt.id]: riverFloatingPt,
};