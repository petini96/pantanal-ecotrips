import { type TranslatableTag } from 'src/model/Tags';

const commonData = {
  id: 'scuba-diving',
  icon: 'mdi-diving-scuba'
};

export const scubaDivingPt: TranslatableTag = {
    ...commonData,
    name: 'Mergulhos'
};

export const scubaDivingEn: TranslatableTag = {
    ...commonData,
    name: 'Scuba Diving'
};

export const scubaDivingEs: TranslatableTag = {
    ...commonData,
    name: 'Buceo'
};
