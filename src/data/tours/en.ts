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
