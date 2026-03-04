import { type Tour } from "src/model/Tour";

// Import existing tours (EN)
import { birdwatchingEn } from "./birdwatching";
import { bocaDaOncaEn } from "./boca-onca";
import { boteRioFormosoEn } from "./bote-rio-formoso";
import { buracoDasArarasEn } from "./buraco-das-araras";
import { cabanasArvorismoEn } from "./cabanas-arvorismo";
import { canoeingEn } from "./canoeing";
import { chalanaPiranhaFishingEn } from "./chalana-piranha-fishing";
import { ecologicalSafariEn } from "./ecological-safari";
import { ecologicalWalkEn } from "./ecological-walk";
import { estanciaMimosaEn } from "./estancia-mimosa";
import { fluvialSafariEn } from "./fluvial-safari";
import { grutaLagoAzulEn } from "./gruta-lago-azul";
import { horsebackRidingEn } from "./horseback-riding";
import { jaguarSafariEn } from "./jaguar-safari";
import { jeepSafariEn } from "./jeep-safari";
import { jungleCampingEn } from "./jungle-camping";
import { motorBoatTripEn } from "./motor-boat-trip";
import { nocturnalSpotlightingEn } from "./nocturnal-spotlighting";
import { piranhaFishingEn } from "./piranha-fishing";
import { rioDaPrataEn } from "./rio-da-prata";
import { riverFloatingEn } from "./river-floating";

// Import existing tours (PT)
import { birdwatchingPt } from "./birdwatching";
import { bocaDaOncaPt } from "./boca-onca";
import { boteRioFormosoPt } from "./bote-rio-formoso";
import { buracoDasArarasPt } from "./buraco-das-araras";
import { cabanasArvorismoPt } from "./cabanas-arvorismo";
import { canoeingPt } from "./canoeing";
import { chalanaPiranhaFishingPt } from "./chalana-piranha-fishing";
import { ecologicalSafariPt } from "./ecological-safari";
import { ecologicalWalkPt } from "./ecological-walk";
import { estanciaMimosaPt } from "./estancia-mimosa";
import { fluvialSafariPt } from "./fluvial-safari";
import { grutaLagoAzulPt } from "./gruta-lago-azul";
import { horsebackRidingPt } from "./horseback-riding";
import { jaguarSafariPt } from "./jaguar-safari";
import { jeepSafariPt } from "./jeep-safari";
import { jungleCampingPt } from "./jungle-camping";
import { motorBoatTripPt } from "./motor-boat-trip";
import { nocturnalSpotlightingPt } from "./nocturnal-spotlighting";
import { piranhaFishingPt } from "./piranha-fishing";
import { rioDaPrataPt } from "./rio-da-prata";
import { riverFloatingPt } from "./river-floating";

// Import existing tours (ES)
import { birdwatchingEs } from "./birdwatching";
import { bocaDaOncaEs } from "./boca-onca";
import { boteRioFormosoEs } from "./bote-rio-formoso";
import { buracoDasArarasEs } from "./buraco-das-araras";
import { cabanasArvorismoEs } from "./cabanas-arvorismo";
import { canoeingEs } from "./canoeing";
import { chalanaPiranhaFishingEs } from "./chalana-piranha-fishing";
import { ecologicalSafariEs } from "./ecological-safari";
import { ecologicalWalkEs } from "./ecological-walk";
import { estanciaMimosaEs } from "./estancia-mimosa";
import { fluvialSafariEs } from "./fluvial-safari";
import { grutaLagoAzulEs } from "./gruta-lago-azul";
import { horsebackRidingEs } from "./horseback-riding";
import { jaguarSafariEs } from "./jaguar-safari";
import { jeepSafariEs } from "./jeep-safari";
import { jungleCampingEs } from "./jungle-camping";
import { motorBoatTripEs } from "./motor-boat-trip";
import { nocturnalSpotlightingEs } from "./nocturnal-spotlighting";
import { piranhaFishingEs } from "./piranha-fishing";
import { rioDaPrataEs } from "./rio-da-prata";
import { riverFloatingEs } from "./river-floating";

// Import NEW tours (PT)
import { aquarioNaturalPt } from "./aquario-natural";
import { barraDoSucuriPt } from "./barra-do-sucuri";
import { lagoaMisteriosaPt } from "./lagoa-misteriosa";
import { nascenteAzulPt } from "./nascente-azul";
import { rioSucuriPt } from "./rio-sucuri";
import { grutaDoMimosoPt } from "./gruta-mimoso";
import { abismoAnhumasPt } from "./abismo-anhumas";
import { portoDaIlhaPt } from "./porto-da-ilha";
import { ceitaCorePt } from "./ceita-core";
import { parqueRioFormosoPt } from "./parque-rio-formoso";
import { balnearioMunicipalPt } from "./balneario-municipal";
import { grutasSaoMiguelPt } from "./grutas-sao-miguel";
import { estrelaDoFormosoPt } from "./estrela-do-formoso";
import { balnearioDoSolPt } from "./balneario-do-sol";
import { rioDoPeixePt } from "./rio-do-peixe";
import { fazendaSanFranciscoPt } from "./fazenda-san-francisco";
import { projetoJiboiaPt } from "./projeto-jiboia";
import { bioParkPt } from "./bio-park";
import { canionsDoSalobraPt } from "./canions-do-salobra";

// Import NEW tours (EN)
import { aquarioNaturalEn } from "./aquario-natural";
import { barraDoSucuriEn } from "./barra-do-sucuri";
import { lagoaMisteriosaEn } from "./lagoa-misteriosa";
import { nascenteAzulEn } from "./nascente-azul";
import { rioSucuriEn } from "./rio-sucuri";
import { grutaDoMimosoEn } from "./gruta-mimoso";
import { abismoAnhumasEn } from "./abismo-anhumas";
import { portoDaIlhaEn } from "./porto-da-ilha";
import { ceitaCoreEn } from "./ceita-core";
import { parqueRioFormosoEn } from "./parque-rio-formoso";
import { balnearioMunicipalEn } from "./balneario-municipal";
import { grutasSaoMiguelEn } from "./grutas-sao-miguel";
import { estrelaDoFormosoEn } from "./estrela-do-formoso";
import { balnearioDoSolEn } from "./balneario-do-sol";
import { rioDoPeixeEn } from "./rio-do-peixe";
import { fazendaSanFranciscoEn } from "./fazenda-san-francisco";
import { projetoJiboiaEn } from "./projeto-jiboia";
import { bioParkEn } from "./bio-park";
import { canionsDoSalobraEn } from "./canions-do-salobra";

// Import NEW tours (ES)
import { aquarioNaturalEs } from "./aquario-natural";
import { barraDoSucuriEs } from "./barra-do-sucuri";
import { lagoaMisteriosaEs } from "./lagoa-misteriosa";
import { nascenteAzulEs } from "./nascente-azul";
import { rioSucuriEs } from "./rio-sucuri";
import { grutaDoMimosoEs } from "./gruta-mimoso";
import { abismoAnhumasEs } from "./abismo-anhumas";
import { portoDaIlhaEs } from "./porto-da-ilha";
import { ceitaCoreEs } from "./ceita-core";
import { parqueRioFormosoEs } from "./parque-rio-formoso";
import { balnearioMunicipalEs } from "./balneario-municipal";
import { grutasSaoMiguelEs } from "./grutas-sao-miguel";
import { estrelaDoFormosoEs } from "./estrela-do-formoso";
import { balnearioDoSolEs } from "./balneario-do-sol";
import { rioDoPeixeEs } from "./rio-do-peixe";
import { fazendaSanFranciscoEs } from "./fazenda-san-francisco";
import { projetoJiboiaEs } from "./projeto-jiboia";
import { bioParkEs } from "./bio-park";
import { canionsDoSalobraEs } from "./canions-do-salobra";


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