import { type TranslatableTag } from 'src/model/Tags';

const commonData = {
  id: 'seniors',
  icon: 'mdi-human-cane'
};

export const seniorsPt: TranslatableTag = {
    ...commonData,
    name: 'Terceira Idade'
};

export const seniorsEn: TranslatableTag = {
    ...commonData,
    name: 'Seniors'
};

export const seniorsEs: TranslatableTag = {
    ...commonData,
    name: 'Tercera Edad'
};
