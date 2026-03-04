import { type TourPackage } from "src/model/TourPackage";
import { bonitoAmizadeEn } from './bonito-amizade';
import { bonitoAmizadeEs } from './bonito-amizade';
import { bonitoAmizadePt } from './bonito-amizade';
import { familiaFelizEn } from './familia-feliz';
import { familiaFelizEs } from './familia-feliz';
import { familiaFelizPt } from './familia-feliz';
import { fazendaCoatiEn } from './fazenda-san-francisco-2d-1n';
import { fazendaCoatiEs } from './fazenda-san-francisco-2d-1n';
import { fazendaCoatiPt } from './fazenda-san-francisco-2d-1n';
import { fazendaArarinhaEn } from './fazenda-san-francisco-3d-2n';
import { fazendaArarinhaEs } from './fazenda-san-francisco-3d-2n';
import { fazendaArarinhaPt } from './fazenda-san-francisco-3d-2n';
import { fazendaAntaEn } from './fazenda-san-francisco-4d-3n';
import { fazendaAntaEs } from './fazenda-san-francisco-4d-3n';
import { fazendaAntaPt } from './fazenda-san-francisco-4d-3n';
import { fazendaAguiaEn } from './fazenda-san-francisco-5d-4n';
import { fazendaAguiaEs } from './fazenda-san-francisco-5d-4n';
import { fazendaAguiaPt } from './fazenda-san-francisco-5d-4n';
import { jungleLodgeOtterEn } from './jungle-lodge-2d-1n';
import { jungleLodgeOtterEs } from './jungle-lodge-2d-1n';
import { jungleLodgeOtterPt } from './jungle-lodge-2d-1n';
import { jungleLodgeCaimanEn } from './jungle-lodge-3d-2n';
import { jungleLodgeCaimanEs } from './jungle-lodge-3d-2n';
import { jungleLodgeCaimanPt } from './jungle-lodge-3d-2n';
import { jungleLodgeAnacondaEn } from './jungle-lodge-4d-3n';
import { jungleLodgeAnacondaEs } from './jungle-lodge-4d-3n';
import { jungleLodgeAnacondaPt } from './jungle-lodge-4d-3n';
import { jungleLodgeEagleEn } from './jungle-lodge-5d-4n';
import { jungleLodgeEagleEs } from './jungle-lodge-5d-4n';
import { jungleLodgeEaglePt } from './jungle-lodge-5d-4n';
import { noiteFelizEn } from './noite-feliz';
import { noiteFelizEs } from './noite-feliz';
import { noiteFelizPt } from './noite-feliz';
import { reveillonBonitoEn } from './reveillon-bonito';
import { reveillonBonitoEs } from './reveillon-bonito';
import { reveillonBonitoPt } from './reveillon-bonito';

export const packagesEn: Record<string, TourPackage> = {
  jungleLodgeOtter: jungleLodgeOtterEn,
  jungleLodgeCaiman: jungleLodgeCaimanEn,
  jungleLodgeAnaconda: jungleLodgeAnacondaEn,
  jungleLodgeEagle: jungleLodgeEagleEn,
  bonitoAmizade: bonitoAmizadeEn,
  familiaFeliz: familiaFelizEn,
  fazendaCoati: fazendaCoatiEn,
  fazendaArarinha: fazendaArarinhaEn,
  fazendaAnta: fazendaAntaEn,
  fazendaAguia: fazendaAguiaEn,
  noiteFeliz: noiteFelizEn,
  reveillonBonito: reveillonBonitoEn,
};

export const packagesEs: Record<string, TourPackage> = {
  jungleLodgeOtter: jungleLodgeOtterEs,
  jungleLodgeCaiman: jungleLodgeCaimanEs,
  jungleLodgeAnaconda: jungleLodgeAnacondaEs,
  jungleLodgeEagle: jungleLodgeEagleEs,
  bonitoAmizade: bonitoAmizadeEs,
  familiaFeliz: familiaFelizEs,
  fazendaCoati: fazendaCoatiEs,
  fazendaArarinha: fazendaArarinhaEs,
  fazendaAnta: fazendaAntaEs,
  fazendaAguia: fazendaAguiaEs,
  noiteFeliz: noiteFelizEs,
  reveillonBonito: reveillonBonitoEs,
};

export const packagesPt: Record<string, TourPackage> = {
  jungleLodgeOtter: jungleLodgeOtterPt,
  jungleLodgeCaiman: jungleLodgeCaimanPt,
  jungleLodgeAnaconda: jungleLodgeAnacondaPt,
  jungleLodgeEagle: jungleLodgeEaglePt,
  bonitoAmizade: bonitoAmizadePt,
  familiaFeliz: familiaFelizPt,
  fazendaCoati: fazendaCoatiPt,
  fazendaArarinha: fazendaArarinhaPt,
  fazendaAnta: fazendaAntaPt,
  fazendaAguia: fazendaAguiaPt,
  noiteFeliz: noiteFelizPt,
  reveillonBonito: reveillonBonitoPt,
};