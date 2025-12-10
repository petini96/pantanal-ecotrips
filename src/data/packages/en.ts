import { type TourPackage } from 'src/model/TourPackage';
import { bonitoAmizadeEn } from './BonitoAmizade/PackageData';
import { familiaFelizEn } from './FamiliaFeliz/PackageData';
import {
  fazendaCoatiEn,
  fazendaArarinhaEn,
  fazendaAntaEn,
  fazendaAguiaEn,
} from './FazendaSanFrancisco/PackageData';
import {
  jungleLodgeOtterEn,
  jungleLodgeCaimanEn,
  jungleLodgeAnacondaEn,
  jungleLodgeEagleEn,
} from './JungleLodge/PackageData';
import { noiteFelizEn } from './NoiteFeliz/PackageData';
import { reveillonBonitoEn } from './ReveillonBonito/PackageData';

export const packagesEn: Record<string, TourPackage> = {
  bonitoAmizade: bonitoAmizadeEn,
  familiaFeliz: familiaFelizEn,
  fazendaCoati: fazendaCoatiEn,
  fazendaArarinha: fazendaArarinhaEn,
  fazendaAnta: fazendaAntaEn,
  fazendaAguia: fazendaAguiaEn,
  jungleLodgeOtter: jungleLodgeOtterEn,
  jungleLodgeCaiman: jungleLodgeCaimanEn,
  jungleLodgeAnaconda: jungleLodgeAnacondaEn,
  jungleLodgeEagle: jungleLodgeEagleEn,
  noiteFeliz: noiteFelizEn,
  reveillonBonito: reveillonBonitoEn,
};