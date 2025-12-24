import { type Region } from 'src/model/Region';
// Certifique-se que esses caminhos de importação existem
import { bonitoSerraBodoquenaPt } from './bonito/BonitoSerraBodoquenaPt';
import { bonitoSerraBodoquenaEn } from './bonito/BonitoSerraBodoquenaEn';
import { bonitoSerraBodoquenaEs } from './bonito/BonitoSerraBodoquenaEs';
import { pantanalNortePt } from './pantanal-norte/PantanalNortePt';
import { pantanalNorteEn } from './pantanal-norte/PantanalNorteEn';
import { pantanalNorteEs } from './pantanal-norte/PantanalNorteEs';
import { pantanalSulPt } from './pantanal-sul/PantanalSulPt';
import { pantanalSulEn } from './pantanal-sul/PantanalSulEn';
import { pantanalSulEs } from './pantanal-sul/PantanalSulEs';

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