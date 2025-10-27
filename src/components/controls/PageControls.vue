<template>
    <div class="page-controls">
        <div class="language-selector">
            <q-btn-dropdown flat :label="currentLanguageLabel" icon="mdi-translate" class="control-button">
                <q-list dense class="selector-list">
                    <q-item v-for="lang in languages" :key="lang.code" clickable v-close-popup
                        @click="changeLanguage(lang.code)">
                        <q-item-section>
                            <q-item-label>{{ lang.label }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
        <div class="theme-selector">
            <q-btn-group flat class="control-button-group">
                <q-btn v-for="theme in themes" :key="theme.name" :label="theme.label"
                    @click="layoutConfigStore.setTheme(theme.name as ThemeName)"
                    :class="{ 'active-theme': currentTheme === theme.name }" size="sm" />
            </q-btn-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Definimos o tipo aqui para não depender de arquivos externos
type ThemeName = 'pantanal_verde' | 'bonito_azul';

const route = useRoute();
const router = useRouter();

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const themes = ref([
    { name: 'pantanal_verde', label: 'Pantanal' },
    { name: 'bonito_azul', label: 'Bonito' },
]);

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
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1000;
    display: flex;
    gap: 8px;
}


.control-button-group .q-btn {
    color: var(--text-primary-color);
    background-color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease;

    &.active-theme {
        background-color: var(--primary-color);
        color: var(--text-secondary-color);
    }
}

.control-button {
    color: white; // Ajuste conforme necessário ou use variável
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    &.q-btn--dropdown {
        padding-right: 8px;
    }
}

.control-button-group {
    background-color: var(--card-bg-color);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.selector-list {
    background-color: var(--card-bg-color);
    color: var(--text-primary-color);
}
</style>