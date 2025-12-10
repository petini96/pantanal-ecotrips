import { type Tour } from "src/model/Tour";
import { birdwatchingPt } from "./birdwatching/BirdwatchingPt";
import { bocaDaOncaPt } from "./boca-onca/BocaDaOncaPt";
import { boteRioFormosoPt } from "./bote-rio-formoso/BoteRioFormosoPt";
import { buracoDasArarasPt } from "./buraco-das-araras/BuracoDasArarasPt";
import { cabanasArvorismoPt } from "./cabanas-arvorismo/CabanasArvorismoPt";
import { canoeingPt } from "./canoeing/CanoeingPt";
import { chalanaPiranhaFishingPt } from "./chalana-piranha-fishing/ChalanaPiranhaFishingPt";
import { ecologicalSafariPt } from "./ecological-safari/EcologicalSafariPt";
import { ecologicalWalkPt } from "./ecological-walk/EcologicalWalkPt";
import { estanciaMimosaPt } from "./estancia-mimosa/EstanciaMimosaPt";
import { fluvialSafariPt } from "./fluvial-safari/FluvialSafariPt";
import { grutaLagoAzulPt } from "./gruta-lago-azul/GrutaLagoAzulPt";
import { horsebackRidingPt } from "./horseback-riding/HorsebackRidingPt";
import { jaguarSafariPt } from "./jaguar-safari/JaguarSafariPt";
import { jeepSafariPt } from "./jeep-safari/JeepSafariPt";
import { jungleCampingPt } from "./jungle-camping/JungleCampingPt";
import { motorBoatTripPt } from "./motor-boat-trip/MotorBoatTripPt";
import { nocturnalSpotlightingPt } from "./nocturnal-spotlighting/NocturnalSpotlightingPt";
import { piranhaFishingPt } from "./piranha-fishing/PiranhaFishingPt";
import { rioDaPrataPt } from "./rio-da-prata/RioDaPrataPt";
import { riverFloatingPt } from "./river-floating/RiverFloatingPt";

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