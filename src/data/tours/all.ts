import { type Tour } from "src/model/Tour";
import { birdwatchingEn } from "./birdwatching/BirdwatchingEn";
import { bocaDaOncaEn } from "./boca-onca/BocaDaOncaEn";
import { boteRioFormosoEn } from "./bote-rio-formoso/BoteRioFormosoEn";
import { buracoDasArarasEn } from "./buraco-das-araras/BuracoDasArarasEn";
import { cabanasArvorismoEn } from "./cabanas-arvorismo/CabanasArvorismoEn";
import { canoeingEn } from "./canoeing/CanoeingEn";
import { chalanaPiranhaFishingEn } from "./chalana-piranha-fishing/ChalanaPiranhaFishingEn";
import { ecologicalSafariEn } from "./ecological-safari/EcologicalSafariEn";
import { ecologicalWalkEn } from "./ecological-walk/EcologicalWalkEn";
import { estanciaMimosaEn } from "./estancia-mimosa/EstanciaMimosaEn";
import { fluvialSafariEn } from "./fluvial-safari/FluvialSafariEn";
import { grutaLagoAzulEn } from "./gruta-lago-azul/GrutaLagoAzulEn";
import { horsebackRidingEn } from "./horseback-riding/HorsebackRidingEn";
import { jaguarSafariEn } from "./jaguar-safari/JaguarSafariEn";
import { jeepSafariEn } from "./jeep-safari/JeepSafariEn";
import { jungleCampingEn } from "./jungle-camping/JungleCampingEn";
import { motorBoatTripEn } from "./motor-boat-trip/MotorBoatTripEn";
import { nocturnalSpotlightingEn } from "./nocturnal-spotlighting/NocturnalSpotlightingEn";
import { piranhaFishingEn } from "./piranha-fishing/PiranhaFishingEn";
import { rioDaPrataEn } from "./rio-da-prata/RioDaPrataEn";
import { riverFloatingEn } from "./river-floating/RiverFloatingEn";
import { birdwatchingEs } from "./birdwatching/BirdwatchingEs";
import { bocaDaOncaEs } from "./boca-onca/BocaDaOncaEs";
import { boteRioFormosoEs } from "./bote-rio-formoso/BoteRioFormosoEs";
import { buracoDasArarasEs } from "./buraco-das-araras/BuracoDasArarasEs";
import { cabanasArvorismoEs } from "./cabanas-arvorismo/CabanasArvorismoEs";
import { canoeingEs } from "./canoeing/CanoeingEs";
import { chalanaPiranhaFishingEs } from "./chalana-piranha-fishing/ChalanaPiranhaFishingEs";
import { ecologicalSafariEs } from "./ecological-safari/EcologicalSafariEs";
import { ecologicalWalkEs } from "./ecological-walk/EcologicalWalkEs";
import { estanciaMimosaEs } from "./estancia-mimosa/EstanciaMimosaEs";
import { fluvialSafariEs } from "./fluvial-safari/FluvialSafariEs";
import { grutaLagoAzulEs } from "./gruta-lago-azul/GrutaLagoAzulEs";
import { horsebackRidingEs } from "./horseback-riding/HorsebackRidingEs";
import { jaguarSafariEs } from "./jaguar-safari/JaguarSafariEs";
import { jeepSafariEs } from "./jeep-safari/JeepSafariEs";
import { jungleCampingEs } from "./jungle-camping/JungleCampingEs";
import { motorBoatTripEs } from "./motor-boat-trip/MotorBoatTripEs";
import { nocturnalSpotlightingEs } from "./nocturnal-spotlighting/NocturnalSpotlightingEs";
import { piranhaFishingEs } from "./piranha-fishing/PiranhaFishingEs";
import { rioDaPrataEs } from "./rio-da-prata/RioDaPrataEs";
import { riverFloatingEs } from "./river-floating/RiverFloatingEs";
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

export const toursEn: Record<string, Tour> = {
  [birdwatchingEn.id]: birdwatchingEn,
  [bocaDaOncaEn.id]: bocaDaOncaEn,
  [boteRioFormosoEn.id]: boteRioFormosoEn,
  [buracoDasArarasEn.id]: buracoDasArarasEn,
  [cabanasArvorismoEn.id]: cabanasArvorismoEn,
  [canoeingEn.id]: canoeingEn,
  [chalanaPiranhaFishingEn.id]: chalanaPiranhaFishingEn,
  [ecologicalSafariEn.id]: ecologicalSafariEn,
  [ecologicalWalkEn.id]: ecologicalWalkEn,
  [estanciaMimosaEn.id]: estanciaMimosaEn,
  [fluvialSafariEn.id]: fluvialSafariEn,
  [grutaLagoAzulEn.id]: grutaLagoAzulEn,
  [horsebackRidingEn.id]: horsebackRidingEn,
  [jaguarSafariEn.id]: jaguarSafariEn,
  [jeepSafariEn.id]: jeepSafariEn,
  [jungleCampingEn.id]: jungleCampingEn,
  [motorBoatTripEn.id]: motorBoatTripEn,
  [nocturnalSpotlightingEn.id]: nocturnalSpotlightingEn,
  [piranhaFishingEn.id]: piranhaFishingEn,
  [rioDaPrataEn.id]: rioDaPrataEn,
  [riverFloatingEn.id]: riverFloatingEn,
};

export const toursEs: Record<string, Tour> = {
  [birdwatchingEs.id]: birdwatchingEs,
  [bocaDaOncaEs.id]: bocaDaOncaEs,
  [boteRioFormosoEs.id]: boteRioFormosoEs,
  [buracoDasArarasEs.id]: buracoDasArarasEs,
  [cabanasArvorismoEs.id]: cabanasArvorismoEs,
  [canoeingEs.id]: canoeingEs,
  [chalanaPiranhaFishingEs.id]: chalanaPiranhaFishingEs,
  [ecologicalSafariEs.id]: ecologicalSafariEs,
  [ecologicalWalkEs.id]: ecologicalWalkEs,
  [estanciaMimosaEs.id]: estanciaMimosaEs,
  [fluvialSafariEs.id]: fluvialSafariEs,
  [grutaLagoAzulEs.id]: grutaLagoAzulEs,
  [horsebackRidingEs.id]: horsebackRidingEs,
  [jaguarSafariEs.id]: jaguarSafariEs,
  [jeepSafariEs.id]: jeepSafariEs,
  [jungleCampingEs.id]: jungleCampingEs,
  [motorBoatTripEs.id]: motorBoatTripEs,
  [nocturnalSpotlightingEs.id]: nocturnalSpotlightingEs,
  [piranhaFishingEs.id]: piranhaFishingEs,
  [rioDaPrataEs.id]: rioDaPrataEs,
  [riverFloatingEs.id]: riverFloatingEs,
};

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