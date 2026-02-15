import { type Tour } from "src/model/Tour";

// Import existing tours (EN)
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

// Import existing tours (PT)
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

// Import existing tours (ES)
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

// Import NEW tours (PT)
import { aquarioNaturalPt } from "./aquario-natural/AquarioNaturalPt";
import { barraDoSucuriPt } from "./barra-do-sucuri/BarraDoSucuriPt";
import { lagoaMisteriosaPt } from "./lagoa-misteriosa/LagoaMisteriosaPt";
import { nascenteAzulPt } from "./nascente-azul/NascenteAzulPt";
import { rioSucuriPt } from "./rio-sucuri/RioSucuriPt";
import { grutaDoMimosoPt } from "./gruta-mimoso/GrutaDoMimosoPt";
import { abismoAnhumasPt } from "./abismo-anhumas/AbismoAnhumasPt";
import { portoDaIlhaPt } from "./porto-da-ilha/PortoDaIlhaPt";
import { ceitaCorePt } from "./ceita-core/CeitaCorePt";
import { parqueRioFormosoPt } from "./parque-rio-formoso/ParqueRioFormosoPt";
import { balnearioMunicipalPt } from "./balneario-municipal/BalnearioMunicipalPt";
import { grutasSaoMiguelPt } from "./grutas-sao-miguel/GrutasSaoMiguelPt";
import { estrelaDoFormosoPt } from "./estrela-do-formoso/EstrelaDoFormosoPt";
import { balnearioDoSolPt } from "./balneario-do-sol/BalnearioDoSolPt";
import { rioDoPeixePt } from "./rio-do-peixe/RioDoPeixePt";
import { fazendaSanFranciscoPt } from "./fazenda-san-francisco/FazendaSanFranciscoPt";
import { projetoJiboiaPt } from "./projeto-jiboia/ProjetoJiboiaPt";
import { bioParkPt } from "./bio-park/BioParkPt";
import { canionsDoSalobraPt } from "./canions-do-salobra/CanionsDoSalobraPt";

// Import NEW tours (EN)
import { aquarioNaturalEn } from "./aquario-natural/AquarioNaturalEn";
import { barraDoSucuriEn } from "./barra-do-sucuri/BarraDoSucuriEn";
import { lagoaMisteriosaEn } from "./lagoa-misteriosa/LagoaMisteriosaEn";
import { nascenteAzulEn } from "./nascente-azul/NascenteAzulEn";
import { rioSucuriEn } from "./rio-sucuri/RioSucuriEn";
import { grutaDoMimosoEn } from "./gruta-mimoso/GrutaDoMimosoEn";
import { abismoAnhumasEn } from "./abismo-anhumas/AbismoAnhumasEn";
import { portoDaIlhaEn } from "./porto-da-ilha/PortoDaIlhaEn";
import { ceitaCoreEn } from "./ceita-core/CeitaCoreEn";
import { parqueRioFormosoEn } from "./parque-rio-formoso/ParqueRioFormosoEn";
import { balnearioMunicipalEn } from "./balneario-municipal/BalnearioMunicipalEn";
import { grutasSaoMiguelEn } from "./grutas-sao-miguel/GrutasSaoMiguelEn";
import { estrelaDoFormosoEn } from "./estrela-do-formoso/EstrelaDoFormosoEn";
import { balnearioDoSolEn } from "./balneario-do-sol/BalnearioDoSolEn";
import { rioDoPeixeEn } from "./rio-do-peixe/RioDoPeixeEn";
import { fazendaSanFranciscoEn } from "./fazenda-san-francisco/FazendaSanFranciscoEn";
import { projetoJiboiaEn } from "./projeto-jiboia/ProjetoJiboiaEn";
import { bioParkEn } from "./bio-park/BioParkEn";
import { canionsDoSalobraEn } from "./canions-do-salobra/CanionsDoSalobraEn";

// Import NEW tours (ES)
import { aquarioNaturalEs } from "./aquario-natural/AquarioNaturalEs";
import { barraDoSucuriEs } from "./barra-do-sucuri/BarraDoSucuriEs";
import { lagoaMisteriosaEs } from "./lagoa-misteriosa/LagoaMisteriosaEs";
import { nascenteAzulEs } from "./nascente-azul/NascenteAzulEs";
import { rioSucuriEs } from "./rio-sucuri/RioSucuriEs";
import { grutaDoMimosoEs } from "./gruta-mimoso/GrutaDoMimosoEs";
import { abismoAnhumasEs } from "./abismo-anhumas/AbismoAnhumasEs";
import { portoDaIlhaEs } from "./porto-da-ilha/PortoDaIlhaEs";
import { ceitaCoreEs } from "./ceita-core/CeitaCoreEs";
import { parqueRioFormosoEs } from "./parque-rio-formoso/ParqueRioFormosoEs";
import { balnearioMunicipalEs } from "./balneario-municipal/BalnearioMunicipalEs";
import { grutasSaoMiguelEs } from "./grutas-sao-miguel/GrutasSaoMiguelEs";
import { estrelaDoFormosoEs } from "./estrela-do-formoso/EstrelaDoFormosoEs";
import { balnearioDoSolEs } from "./balneario-do-sol/BalnearioDoSolEs";
import { rioDoPeixeEs } from "./rio-do-peixe/RioDoPeixeEs";
import { fazendaSanFranciscoEs } from "./fazenda-san-francisco/FazendaSanFranciscoEs";
import { projetoJiboiaEs } from "./projeto-jiboia/ProjetoJiboiaEs";
import { bioParkEs } from "./bio-park/BioParkEs";
import { canionsDoSalobraEs } from "./canions-do-salobra/CanionsDoSalobraEs";


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
  // New tours
  [aquarioNaturalPt.id]: aquarioNaturalEn,
  [barraDoSucuriPt.id]: barraDoSucuriEn,
  [lagoaMisteriosaPt.id]: lagoaMisteriosaEn,
  [nascenteAzulPt.id]: nascenteAzulEn,
  [rioSucuriPt.id]: rioSucuriEn,
  [grutaDoMimosoPt.id]: grutaDoMimosoEn,
  [abismoAnhumasPt.id]: abismoAnhumasEn,
  [portoDaIlhaPt.id]: portoDaIlhaEn,
  [ceitaCorePt.id]: ceitaCoreEn,
  [parqueRioFormosoPt.id]: parqueRioFormosoEn,
  [balnearioMunicipalPt.id]: balnearioMunicipalEn,
  [grutasSaoMiguelPt.id]: grutasSaoMiguelEn,
  [estrelaDoFormosoPt.id]: estrelaDoFormosoEn,
  [balnearioDoSolPt.id]: balnearioDoSolEn,
  [rioDoPeixePt.id]: rioDoPeixeEn,
  [fazendaSanFranciscoPt.id]: fazendaSanFranciscoEn,
  [projetoJiboiaPt.id]: projetoJiboiaEn,
  [bioParkPt.id]: bioParkEn,
  [canionsDoSalobraPt.id]: canionsDoSalobraEn,
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
  // New tours
  [aquarioNaturalPt.id]: aquarioNaturalEs,
  [barraDoSucuriPt.id]: barraDoSucuriEs,
  [lagoaMisteriosaPt.id]: lagoaMisteriosaEs,
  [nascenteAzulPt.id]: nascenteAzulEs,
  [rioSucuriPt.id]: rioSucuriEs,
  [grutaDoMimosoPt.id]: grutaDoMimosoEs,
  [abismoAnhumasPt.id]: abismoAnhumasEs,
  [portoDaIlhaPt.id]: portoDaIlhaEs,
  [ceitaCorePt.id]: ceitaCoreEs,
  [parqueRioFormosoPt.id]: parqueRioFormosoEs,
  [balnearioMunicipalPt.id]: balnearioMunicipalEs,
  [grutasSaoMiguelPt.id]: grutasSaoMiguelEs,
  [estrelaDoFormosoPt.id]: estrelaDoFormosoEs,
  [balnearioDoSolPt.id]: balnearioDoSolEs,
  [rioDoPeixePt.id]: rioDoPeixeEs,
  [fazendaSanFranciscoPt.id]: fazendaSanFranciscoEs,
  [projetoJiboiaPt.id]: projetoJiboiaEs,
  [bioParkPt.id]: bioParkEs,
  [canionsDoSalobraPt.id]: canionsDoSalobraEs,
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
  // New Tours
  [aquarioNaturalPt.id]: aquarioNaturalPt,
  [barraDoSucuriPt.id]: barraDoSucuriPt,
  [lagoaMisteriosaPt.id]: lagoaMisteriosaPt,
  [nascenteAzulPt.id]: nascenteAzulPt,
  [rioSucuriPt.id]: rioSucuriPt,
  [grutaDoMimosoPt.id]: grutaDoMimosoPt,
  [abismoAnhumasPt.id]: abismoAnhumasPt,
  [portoDaIlhaPt.id]: portoDaIlhaPt,
  [ceitaCorePt.id]: ceitaCorePt,
  [parqueRioFormosoPt.id]: parqueRioFormosoPt,
  [balnearioMunicipalPt.id]: balnearioMunicipalPt,
  [grutasSaoMiguelPt.id]: grutasSaoMiguelPt,
  [estrelaDoFormosoPt.id]: estrelaDoFormosoPt,
  [balnearioDoSolPt.id]: balnearioDoSolPt,
  [rioDoPeixePt.id]: rioDoPeixePt,
  [fazendaSanFranciscoPt.id]: fazendaSanFranciscoPt,
  [projetoJiboiaPt.id]: projetoJiboiaPt,
  [bioParkPt.id]: bioParkPt,
  [canionsDoSalobraPt.id]: canionsDoSalobraPt,
};