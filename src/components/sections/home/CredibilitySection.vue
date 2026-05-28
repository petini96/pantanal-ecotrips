<template>
  <section class="cred" v-intersection.once="onIntersect" :class="{ 'is-visible': visible }">
    <div class="cred__inner">
      <div class="cred__head animated-el" style="--d:0.1s">
        <span class="cred__label">
          <span class="cred__label-line" />
          {{ t('credibility_title') }}
        </span>
        <p class="cred__sub">{{ t('credibility_subtitle') }}</p>
      </div>

      <div class="cred__logos animated-el" style="--d:0.28s">
        <div class="cred__logo-wrap">
          <q-img
            src="~assets/images/logo_cadastur.png"
            alt="Logo Cadastur"
            class="cred__logo"
            fit="contain"
          />
        </div>

        <span class="cred__sep" />

        <div class="cred__logo-wrap">
          <q-img
            src="~assets/images/logo_petitfute.png"
            alt="Logo Petit Futé"
            class="cred__logo cred__logo--wide"
            fit="contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const visible = ref(false);
const onIntersect = (e: IntersectionObserverEntry) => {
  if (e.isIntersecting) visible.value = true;
};
</script>

<style scoped lang="scss">
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.cred {
  background: #ffffff;
  padding: 72px 0 80px;

  :global(body.body--dark) & {
    background: #0e1c13;
  }
}

.cred__inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
}

/* Label */
.cred__label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #2e8b57;
  margin-bottom: 14px;

  :global(body.body--dark) & { color: #6fcf97; }
}

.cred__label-line {
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: currentColor;
  border-radius: 1px;
}

.cred__sub {
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(0,0,0,0.42);
  margin: 0 0 48px;

  :global(body.body--dark) & { color: rgba(255,255,255,0.42); }
}

/* Logos row */
.cred__logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  row-gap: 32px;
}

.cred__logo-wrap {
  padding: 0 48px;
  opacity: 0.45;
  filter: grayscale(100%);
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.06);
  }

  :global(body.body--dark) & { opacity: 0.5; }
  :global(body.body--dark) &:hover { opacity: 1; }
}

.cred__logo {
  width: 160px;
  height: 80px;
}

.cred__logo--wide {
  width: 200px;
}

.cred__sep {
  width: 1px;
  height: 56px;
  background: rgba(0,0,0,0.1);

  :global(body.body--dark) & { background: rgba(255,255,255,0.1); }
}

/* Animations */
.animated-el { opacity: 0; }
.cred.is-visible .animated-el {
  animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: var(--d, 0s);
}

@media (max-width: 600px) {
  .cred { padding: 56px 0 64px; }
  .cred__inner { padding: 0 24px; }
  .cred__sep { display: none; }
  .cred__logo-wrap { padding: 0 32px; }
}
</style>
