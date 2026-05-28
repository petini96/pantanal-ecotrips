<template>
  <div class="guide-highlight" :class="`theme-${currentTheme}`">
    <div class="guide-highlight__inner container">

      <!-- Photo side -->
      <div class="guide-highlight__photo-col">
        <div class="guide-highlight__photo-wrapper">
          <q-img
            :src="photoUrl"
            :alt="t('guide_name')"
            class="guide-highlight__photo"
            fit="cover"
            position="20% 50%"
            loading="lazy"
          >
            <template #loading>
              <div class="guide-highlight__photo-skeleton" />
            </template>
            <template #error>
              <div class="guide-highlight__photo-fallback flex flex-center">
                <q-icon name="mdi-account-tie" size="5rem" color="grey-5" />
              </div>
            </template>
          </q-img>

          <!-- Since badge -->
          <div class="guide-highlight__badge">
            <span class="guide-highlight__badge-number">+25</span>
            <span class="guide-highlight__badge-text">{{ t('guide_years_label') }}</span>
          </div>
        </div>
      </div>

      <!-- Content side -->
      <div class="guide-highlight__content-col">
        <p class="guide-highlight__eyebrow">
          <q-icon name="mdi-earth" size="xs" class="q-mr-xs" />
          {{ t('guide_highlight_eyebrow') }}
        </p>

        <h2 class="guide-highlight__title">
          {{ t('guide_highlight_title') }}
        </h2>

        <p class="guide-highlight__subtitle">
          {{ t('guide_highlight_subtitle') }}
        </p>

        <!-- Language badges -->
        <div class="guide-highlight__lang-row q-mb-lg">
          <span class="guide-lang-badge">🇧🇷 PT</span>
          <span class="guide-lang-badge">🇺🇸 EN</span>
          <span class="guide-lang-badge">🇪🇸 ES</span>
        </div>

        <!-- Differentiators -->
        <ul class="guide-highlight__diffs">
          <li v-for="(diff, i) in diffs" :key="i" class="guide-diff-item">
            <q-icon name="mdi-check-circle" color="positive" size="sm" class="q-mr-sm" />
            {{ diff }}
          </li>
        </ul>

        <!-- Name / title -->
        <div class="guide-highlight__identity q-mt-xl">
          <div class="guide-highlight__name">{{ t('guide_name') }}</div>
          <div class="guide-highlight__role">{{ t('guide_role') }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const { t } = useI18n();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const photoUrl = `${GENERAL_BUCKET_NAME}/ronaldo/img12.jpg`;

const diffs = computed(() => [
  t('guide_diff_1'),
  t('guide_diff_2'),
  t('guide_diff_3'),
]);
</script>

<style scoped lang="scss">
.guide-highlight {
  background: linear-gradient(135deg, #f0f7f0 0%, #e8f4e8 100%);
  padding: 80px 0;

  &.theme-dark {
    background: linear-gradient(135deg, #1a2e1a 0%, #1e3520 100%);

    .guide-highlight__title {
      color: #fff;
    }

    .guide-highlight__subtitle,
    .guide-diff-item {
      color: rgba(255, 255, 255, 0.82);
    }

    .guide-highlight__name {
      color: #fff;
    }

    .guide-highlight__role {
      color: rgba(255, 255, 255, 0.65);
    }

    .guide-lang-badge {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.guide-highlight__inner {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* Photo column */
.guide-highlight__photo-col {
  position: relative;
}

.guide-highlight__photo-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: visible;
}

.guide-highlight__photo {
  border-radius: 24px;
  height: 480px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);

  @media (max-width: 900px) {
    height: 320px;
  }
}

.guide-highlight__photo-skeleton,
.guide-highlight__photo-fallback {
  height: 480px;
  background: #ddd;
  border-radius: 24px;
}

.guide-highlight__badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--q-primary);
  color: #fff;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
    bottom: -16px;
    right: -8px;
  }
}

.guide-highlight__badge-number {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.guide-highlight__badge-text {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
  text-align: center;
  padding: 0 4px;
}

/* Content column */
.guide-highlight__content-col {
  padding-bottom: 8px;
}

.guide-highlight__eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--q-primary);
  margin: 0 0 12px;
}

.guide-highlight__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.2;
  color: #1a2e1a;
  margin: 0 0 16px;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
}

.guide-highlight__subtitle {
  font-size: 1rem;
  color: #4a5e4a;
  line-height: 1.7;
  margin: 0 0 24px;
  max-width: 520px;
}

/* Language badges */
.guide-highlight__lang-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.guide-lang-badge {
  background: rgba(255, 255, 255, 0.85);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #2d4a2d;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Differentiators */
.guide-highlight__diffs {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.guide-diff-item {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #3a4e3a;
  font-weight: 500;
}

/* Identity */
.guide-highlight__identity {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

.guide-highlight__name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a2e1a;
}

.guide-highlight__role {
  font-size: 0.85rem;
  color: #6a7e6a;
  margin-top: 2px;
}
</style>
