// src/data/packages/es.ts

import { type TourPackage } from 'src/model/TourPackage';

// Importa todos os pacotes em Espanhol
import { bonitoAmizadeEs } from './BonitoAmizade/PackageData';
import { familiaFelizEs } from './FamiliaFeliz/PackageData';
import {
  fazendaCoatiEs,
  fazendaArarinhaEs,
  fazendaAntaEs,
  fazendaAguiaEs,
} from './FazendaSanFrancisco/PackageData';
import {
  jungleLodgeOtterEs,
  jungleLodgeCaimanEs,
  jungleLodgeAnacondaEs,
  jungleLodgeEagleEs,
} from './JungleLodge/PackageData';
import { noiteFelizEs } from './NoiteFeliz/PackageData';
import { reveillonBonitoEs } from './ReveillonBonito/PackageData';
// Se tiver mais pacotes, adicione os imports aqui

// Agrega e exporta todos em um único objeto
export const packagesEs: Record<string, TourPackage> = {
  bonitoAmizade: bonitoAmizadeEs,
  familiaFeliz: familiaFelizEs,
  fazendaCoati: fazendaCoatiEs,
  fazendaArarinha: fazendaArarinhaEs,
  fazendaAnta: fazendaAntaEs,
  fazendaAguia: fazendaAguiaEs,
  jungleLodgeOtter: jungleLodgeOtterEs,
  jungleLodgeCaiman: jungleLodgeCaimanEs,
  jungleLodgeAnaconda: jungleLodgeAnacondaEs,
  jungleLodgeEagle: jungleLodgeEagleEs,
  noiteFeliz: noiteFelizEs,
  reveillonBonito: reveillonBonitoEs,
};