<template>
  <div class="page-controls">
    
    <div class="control-wrapper">
      <q-btn-dropdown 
        flat 
        dense
        no-caps
        dropdown-icon="expand_more"
        class="lang-btn"
      >
        <template v-slot:label>
           <div class="row items-center no-wrap q-gutter-x-xs">
             <q-icon name="translate" size="18px" />
             <span class="text-weight-bold">{{ currentLanguageLabel }}</span>
           </div>
        </template>

        <q-list dense style="min-width: 120px">
          <q-item v-for="lang in languages" :key="lang.code" clickable v-close-popup @click="changeLanguage(lang.code)">
            <q-item-section avatar style="min-width: 30px;">
               <span class="text-caption text-grey">{{ lang.code.toUpperCase() }}</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ lang.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="theme-pill shadow-2">
      <q-btn
        flat
        dense
        no-caps
        size="sm"
        class="theme-btn"
        :class="{ 'active-light': currentTheme === 'light' }"
        @click="layoutConfigStore.setTheme('light')"
      >
        <div class="row items-center no-wrap q-gutter-x-xs">
          <q-icon name="light_mode" size="16px" /> <span>Dia</span>
        </div>
      </q-btn>

      <q-btn
        flat
        dense
        no-caps
        size="sm"
        class="theme-btn"
        :class="{ 'active-dark': currentTheme === 'dark' }"
        @click="layoutConfigStore.setTheme('dark')"
      >
        <div class="row items-center no-wrap q-gutter-x-xs">
          <q-icon name="dark_mode" size="16px" /> <span>Noite</span>
        </div>
      </q-btn>
    </div>

  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const languages = ref([
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]);

const currentLanguageLabel = computed(() => (route.params.lang as string || 'pt').toUpperCase());

const changeLanguage = (langCode: string) => {
  void router.push({ name: route.name || 'home', params: { ...route.params, lang: langCode } });
};
</script>

<style scoped lang="scss">
.page-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* --- Estilo do Seletor de Idioma --- */
.control-wrapper {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 2px 8px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
}

.lang-btn {
  color: white;
  font-size: 0.9rem;
}

/* --- Estilo do Seletor de Tema (Pill Shape) --- */
.theme-pill {
  display: flex;
  border-radius: 20px;
  padding: 3px;
  gap: 2px;
  transition: all 0.3s ease;

  /* Estilo Padrão (assumindo que está sobre uma imagem, fundo claro translúcido) */
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.5);

  /* Adaptação para quando o site global está em Dark Mode */
  /* O uso de :global() é necessário porque estamos em style scoped */
  :global(body.body--dark) & {
    background: rgba(30, 30, 30, 0.8); /* Fundo escuro translúcido */
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.theme-btn {
  border-radius: 16px;
  padding: 4px 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 600;
  letter-spacing: 0.5px;

  /* Cor do texto inativo no modo claro global */
  color: #666;

  /* Cor do texto inativo no modo escuro global */
  :global(body.body--dark) & {
    color: #ccc;
  }

  /* Efeito Hover suave nos inativos */
  &:hover:not(.active-light):not(.active-dark) {
    background-color: rgba(0,0,0,0.05);
    :global(body.body--dark) & {
        background-color: rgba(255,255,255,0.1);
    }
  }
}

/* --- Cores Ativas --- */

/* Quando DIA está ativo: tom alaranjado/âmbar e texto branco */
.active-light {
  background-color: #7CB61E !important; /* Orange-8 approx (cor de sol/dia) */
  color: white !important;
}

/* Quando NOITE está ativo: Azul índigo profundo e texto branco */
.active-dark {
  background-color: #283593 !important; /* Indigo-9 approx (cor de noite) */
  color: white !important;
}
</style>