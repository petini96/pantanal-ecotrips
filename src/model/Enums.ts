export enum DifficultyLevel {
  EASY = 'easy',
  MODERATE = 'moderate',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum EnvironmentType {
  RIVER = 'river',
  FOREST = 'forest',
  CAVE = 'cave',
  WATERFALL = 'waterfall',
  MOUNTAIN = 'mountain',
  BEACH = 'beach',
  FIELDS = 'fields',
  WATER = 'water',
  FARM = 'farm'
}

export const environmentIcons: Record<EnvironmentType, string> = {
  [EnvironmentType.RIVER]: 'mdi-waves',
  [EnvironmentType.FOREST]: 'mdi-forest',
  [EnvironmentType.CAVE]: 'mdi-cave',
  [EnvironmentType.WATERFALL]: 'mdi-waterfall',
  [EnvironmentType.MOUNTAIN]: 'mdi-terrain',
  [EnvironmentType.BEACH]: 'mdi-beach',
  [EnvironmentType.FIELDS]: 'mdi-barley',
  [EnvironmentType.WATER]: 'mdi-water',
  [EnvironmentType.FARM]: 'mdi-barn',
};

export const defaultIcon = 'mdi-checkbox-marked-circle-outline';
