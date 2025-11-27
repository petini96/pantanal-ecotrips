import { defineStore } from 'pinia';
import { Cookies, Dark } from 'quasar'; // <--- Importe o Dark aqui

type ThemeName = 'light' | 'dark';

export const useLayoutConfigStore = defineStore('layoutConfig', {
  state: () => ({
    theme: 'light' as ThemeName,
  }),
  actions: {
    setSsrTheme(themeName: ThemeName) {
      if (['light', 'dark'].includes(themeName)) {
        this.theme = themeName;
        // No lado do servidor (SSR), não usamos Dark.set, 
        // a classe é injetada via configuração do Quasar ou HTML template.
      }
    },

    setTheme(themeName: ThemeName) {
      this.theme = themeName;
      
      if (process.env.CLIENT) {
        // 1. Aplica a classe no Body via Quasar
        // Se for 'dark', Dark.set(true) adiciona "body--dark"
        // Se for 'light', Dark.set(false) remove "body--dark"
        Dark.set(themeName === 'dark');

        // 2. Salva persistência
        localStorage.setItem('pantanal-theme', themeName);
        Cookies.set('pantanal-theme', themeName, { path: '/' });
      }
    },

    hydrateTheme() {
      if (process.env.CLIENT) {
        const savedTheme = localStorage.getItem('pantanal-theme') as ThemeName;
        
        if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
          this.theme = savedTheme;
          // Sincroniza o Quasar com o que estava salvo
          Dark.set(savedTheme === 'dark');
        } else {
          // Opcional: Se não tiver nada salvo, verifica preferência do sistema
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          this.setTheme(systemDark ? 'dark' : 'light');
        }
      }
    }
  },
});