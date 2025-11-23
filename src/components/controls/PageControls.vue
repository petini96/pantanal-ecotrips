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
        :class="{ 'active-pantanal': currentTheme === 'pantanal_verde' }"
        @click="layoutConfigStore.setTheme('pantanal_verde')"
      >
        <div class="row items-center no-wrap q-gutter-x-xs">
          <q-icon name="forest" size="14px" /> <span>Pantanal</span>
        </div>
      </q-btn>

      <q-btn
        flat
        dense
        no-caps
        size="sm"
        class="theme-btn"
        :class="{ 'active-bonito': currentTheme === 'bonito_azul' }"
        @click="layoutConfigStore.setTheme('bonito_azul')"
      >
        <div class="row items-center no-wrap q-gutter-x-xs">
          <q-icon name="water_drop" size="14px" /> <span>Bonito</span>
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

// Lógica para mostrar apenas o código (PT, EN) no botão
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
  background: rgba(0, 0, 0, 0.3); /* Fundo escuro translúcido */
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
  background: rgba(255, 255, 255, 0.9); /* Fundo branco quase sólido para contraste */
  border-radius: 20px; /* Borda bem arredondada */
  padding: 3px;
  gap: 2px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.theme-btn {
  border-radius: 16px; /* Acompanha o pai */
  padding: 4px 12px;
  color: #555; /* Cor padrão inativa (cinza escuro) */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 600;
  letter-spacing: 0.5px;

  /* Efeito Hover suave */
  &:hover:not(.active-pantanal):not(.active-bonito) {
    background-color: rgba(0,0,0,0.05);
  }
}

/* --- Cores Ativas --- */

/* Quando Pantanal está ativo: Verde Escuro e Texto Branco */
.active-pantanal {
  background-color: #2E7D32 !important; /* Green-9 approx */
  color: white !important;
  box-shadow: 0 2px 4px rgba(46, 125, 50, 0.4);
}

/* Quando Bonito está ativo: Azul Vibrante e Texto Branco */
.active-bonito {
  background-color: #027BE3 !important; /* Blue-7 approx */
  color: white !important;
  box-shadow: 0 2px 4px rgba(2, 123, 227, 0.4);
}
</style>