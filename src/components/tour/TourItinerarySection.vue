<template>
    <div v-if="itinerary" class="itinerary-section">
        <div class="text-h4 text-center q-mb-lg">{{ tour_details_itinerary_title }}</div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="intineraryItem in itinerary"
            :key="intineraryItem.day"
            :title="`Dia ${intineraryItem.day}: ${t(intineraryItem.title)}`"
            :subtitle="t(intineraryItem.subtitle)"
            :icon="intineraryItem.icon"
            class="animated-timeline-entry"
          >
            <div class="text-body1">{{ t(intineraryItem.description) }}</div>
          </q-timeline-entry>
        </q-timeline>
      </div>
</template>

<script setup lang="ts">
import { type ItineraryItem } from 'src/stores/useTourStore';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface TourItinerarySectionProps {
    tour_details_itinerary_title: string
    itinerary: ItineraryItem[] | null
}

withDefaults(defineProps<TourItinerarySectionProps>(),{})

</script>

<style scoped lang="scss">
.itinerary-section .text-h4 {
  font-weight: 700;
  color: var(--primary-color);
}

.q-timeline__title {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>