import { type TourPackage } from "src/model/TourPackage";
import { bonitoAmizadeEn } from "./bonito-amizade/package-data/PackageDataEn";
import { bonitoAmizadeEs } from "./bonito-amizade/package-data/PackageDataEs";
import { bonitoAmizadePt } from "./bonito-amizade/package-data/PackageDataPt";
import { familiaFelizEn } from "./familia-feliz/package-data/PackageDataEn";
import { familiaFelizEs } from "./familia-feliz/package-data/PackageDataEs";
import { familiaFelizPt } from "./familia-feliz/package-data/PackageDataPt";
import { fazendaCoatiEn } from "./fazenda-san-francisco-2d-1n/package-data/PackageDataEn";
import { fazendaCoatiEs } from "./fazenda-san-francisco-2d-1n/package-data/PackageDataEs";
import { fazendaCoatiPt } from "./fazenda-san-francisco-2d-1n/package-data/PackageDataPt";
import { fazendaArarinhaEn } from "./fazenda-san-francisco-3d-2n/package-data/PackageDataEn";
import { fazendaArarinhaEs } from "./fazenda-san-francisco-3d-2n/package-data/PackageDataEs";
import { fazendaArarinhaPt } from "./fazenda-san-francisco-3d-2n/package-data/PackageDataPt";
import { fazendaAntaEn } from "./fazenda-san-francisco-4d-3n/package-data/PackageDataEn";
import { fazendaAntaEs } from "./fazenda-san-francisco-4d-3n/package-data/PackageDataEs";
import { fazendaAntaPt } from "./fazenda-san-francisco-4d-3n/package-data/PackageDataPt";
import { fazendaAguiaEn } from "./fazenda-san-francisco-5d-4n/package-data/PackageDataEn";
import { fazendaAguiaEs } from "./fazenda-san-francisco-5d-4n/package-data/PackageDataEs";
import { fazendaAguiaPt } from "./fazenda-san-francisco-5d-4n/package-data/PackageDataPt";
import { jungleLodgeOtterEn } from "./jungle-lodge-2d-1n/package-data/PackageDataEn";
import { jungleLodgeOtterEs } from "./jungle-lodge-2d-1n/package-data/PackageDataEs";
import { jungleLodgeOtterPt } from "./jungle-lodge-2d-1n/package-data/PackageDataPt";
import { jungleLodgeCaimanEn } from "./jungle-lodge-3d-2n/package-data/PackageDataEn";
import { jungleLodgeCaimanEs } from "./jungle-lodge-3d-2n/package-data/PackageDataEs";
import { jungleLodgeCaimanPt } from "./jungle-lodge-3d-2n/package-data/PackageDataPt";
import { jungleLodgeAnacondaEn } from "./jungle-lodge-4d-3n/package-data/PackageDataEn";
import { jungleLodgeAnacondaEs } from "./jungle-lodge-4d-3n/package-data/PackageDataEs";
import { jungleLodgeAnacondaPt } from "./jungle-lodge-4d-3n/package-data/PackageDataPt";
import { jungleLodgeEagleEn } from "./jungle-lodge-5d-4n/package-data/PackageDataEn";
import { jungleLodgeEagleEs } from "./jungle-lodge-5d-4n/package-data/PackageDataEs";
import { jungleLodgeEaglePt } from "./jungle-lodge-5d-4n/package-data/PackageDataPt";
import { noiteFelizEn } from "./noite-feliz/package-data/PackageDataEn";
import { noiteFelizEs } from "./noite-feliz/package-data/PackageDataEs";
import { noiteFelizPt } from "./noite-feliz/package-data/PackageDataPt";
import { reveillonBonitoEn } from "./reveillon-bonito/package-data/PackageDataEn";
import { reveillonBonitoEs } from "./reveillon-bonito/package-data/PackageDataEs";
import { reveillonBonitoPt } from "./reveillon-bonito/package-data/PackageDataPt";

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