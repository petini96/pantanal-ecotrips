import { pantanalSulPt, pantanalSulEn, pantanalSulEs } from './pantanal-sul';
import { pantanalNortePt, pantanalNorteEn, pantanalNorteEs } from './pantanal-norte';
import { bonitoSerraBodoquenaPt, bonitoSerraBodoquenaEn, bonitoSerraBodoquenaEs } from './bonito';
import { type Region } from 'src/model/Region';
// Certifique-se que esses caminhos de importação existem










export const allRegionsPt: Region[] = [
  bonitoSerraBodoquenaPt,
  pantanalNortePt,
  pantanalSulPt
];

export const allRegionsEn: Region[] = [
  bonitoSerraBodoquenaEn,
  pantanalNorteEn,
  pantanalSulEn
];

export const allRegionsEs: Region[] = [
  bonitoSerraBodoquenaEs,
  pantanalNorteEs,
  pantanalSulEs
];