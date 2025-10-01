<template>
  <div v-if="itinerary && itinerary.length > 0" class="itinerary-section">
    <h3 class="section-title text-center q-mb-xl">{{ tour_details_itinerary_title }}</h3>
    
    <q-timeline color="primary" layout="dense">
      <q-timeline-entry
        v-for="(item, index) in itinerary"
        :key="`day-${item.day}`"
        :title="item.title"
        :subtitle="`${t('day')} ${item.day}`"
        icon="mdi-calendar-check"
        side="left"
        class="animated-timeline-entry"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div>
          <ul class="q-pl-md q-mb-md description-list">
            <li v-for="(desc, descIndex) in item.descriptionItems" :key="`desc-${descIndex}`">
              {{ desc }}
            </li>
          </ul>

          <div v-if="item.mealsIncluded && item.mealsIncluded.length > 0" class="meals-included q-mb-md">
            <q-chip
              v-for="meal in item.mealsIncluded"
              :key="meal"
              :icon="getMealInfo(meal).icon"
              color="green-1"
              text-color="green-8"
              class="text-weight-medium"
            >
              {{ getMealInfo(meal).label }}
            </q-chip>
          </div>

          <div v-if="item.tours && item.tours.length > 0" class="tours-of-the-day">
            <div class="text-subtitle2 q-mb-sm text-primary text-weight-bold">{{ t('tours_for_the_day') }}</div>
            <div class="row q-col-gutter-sm">
              <div v-for="tour in item.tours" :key="tour.id" class="col-12">
                <q-card class="tour-item-card" flat bordered>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar rounded size="64px">
                        <img :src="tour.mainImage">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">{{ tour.name }}</q-item-label>
                      <q-item-label caption lines="2">{{ tour.description }}</q-item-label>
                      <q-item-label class="q-mt-sm">
                        <div class="tour-details-chips">
                          <q-chip dense outline :icon="getDifficultyInfo(tour.difficulty).icon" :color="getDifficultyInfo(tour.difficulty).color">
                            {{ getDifficultyInfo(tour.difficulty).label }}
                          </q-chip>
                          <q-chip dense outline icon="mdi-clock-outline" color="grey-7">
                            {{ tour.durationInHours }}h
                          </q-chip>
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// A correção principal é importar o tipo correto do seu modelo de dados
import { type ItineraryItem } from 'src/model/ItineraryItem';
import { DifficultyLevel } from 'src/model/Enums';

const { t } = useI18n();

// A prop `itinerary` agora espera o tipo correto de dados
defineProps<{
  tour_details_itinerary_title: string;
  itinerary: ItineraryItem[] | null;
}>();

// Funções auxiliares para exibir detalhes extras
type Meal = 'breakfast' | 'lunch' | 'dinner';

const getMealInfo = (meal: Meal) => {
  const mealMap = {
    breakfast: { icon: 'mdi-coffee-outline', label: t('breakfast') },
    lunch: { icon: 'mdi-food-turkey', label: t('lunch') },
    dinner: { icon: 'mdi-food-variant', label: t('dinner') },
  };
  return mealMap[meal] || { icon: 'mdi-food', label: meal };
};

const getDifficultyInfo = (level: DifficultyLevel) => {
  const difficultyMap = {
    [DifficultyLevel.EASY]: { label: t('difficulty_easy'), icon: 'mdi-emoticon-happy-outline', color: 'green-5' },
    [DifficultyLevel.MODERATE]: { label: t('difficulty_moderate'), icon: 'mdi-emoticon-neutral-outline', color: 'orange-5' },
    [DifficultyLevel.MEDIUM]: { label: t('difficulty_moderate'), icon: 'mdi-emoticon-neutral-outline', color: 'orange-5' },
    [DifficultyLevel.HARD]: { label: t('difficulty_hard'), icon: 'mdi-emoticon-dead-outline', color: 'red-5' },
  };
  return difficultyMap[level];
};
</script>

<style scoped lang="scss">
.itinerary-section {
  .section-title {
    font-weight: 700;
    font-size: 1.8rem;
    color: #2c3e50;
  }
}
.description-list {
  list-style-type: '✓  ';
  color: #555;
  li {
    padding-left: 8px;
    margin-bottom: 4px;
  }
}
.tours-of-the-day {
  margin-top: 16px;
}
.meals-included {
  display: flex;
  gap: 8px;
}
.tour-item-card {
  border-radius: 12px;
  background-color: #fdfdfd;
  border: 1px solid #eef2f1;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    border-color: var(--q-primary);
  }
}
.tour-details-chips {
  display: flex;
  gap: 8px;
  align-items: center;
}
.animated-timeline-entry {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>