import { type Tour } from "src/model/Tour";
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