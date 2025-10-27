// src/data/packages/pt.ts

import { type TourPackage } from 'src/model/TourPackage';

// Importa todos os pacotes em Português
import { bonitoAmizadePt } from './BonitoAmizade/PackageData';
import { familiaFelizPt } from './FamiliaFeliz/PackageData';
import {
  fazendaCoatiPt,
  fazendaArarinhaPt,
  fazendaAntaPt,
  fazendaAguiaPt,
} from './FazendaSanFrancisco/PackageData';
import {
  jungleLodgeOtterPt,
  jungleLodgeCaimanPt,
  jungleLodgeAnacondaPt,
  jungleLodgeEaglePt,
} from './JungleLodge/PackageData';
import { noiteFelizPt } from './NoiteFeliz/PackageData';
import { reveillonBonitoPt } from './ReveillonBonito/PackageData';
// Se tiver mais pacotes, adicione os imports aqui

// Agrega e exporta todos em um único objeto
export const packagesPt: Record<string, TourPackage> = {
  bonitoAmizade: bonitoAmizadePt,
  familiaFeliz: familiaFelizPt,
  fazendaCoati: fazendaCoatiPt,
  fazendaArarinha: fazendaArarinhaPt,
  fazendaAnta: fazendaAntaPt,
  fazendaAguia: fazendaAguiaPt,
  jungleLodgeOtter: jungleLodgeOtterPt,
  jungleLodgeCaiman: jungleLodgeCaimanPt,
  jungleLodgeAnaconda: jungleLodgeAnacondaPt,
  jungleLodgeEagle: jungleLodgeEaglePt,
  noiteFeliz: noiteFelizPt,
  reveillonBonito: reveillonBonitoPt,
};