import { defineStore } from 'pinia';
import { Cookies } from 'quasar';

type ThemeName = 'pantanal_verde' | 'bonito_azul';

export const useLayoutConfigStore = defineStore('layoutConfig', {
  state: () => ({
    theme: 'pantanal_verde' as ThemeName,
  }),
  actions: {
    setSsrTheme(themeName: ThemeName) {
      if (['pantanal_verde', 'bonito_azul'].includes(themeName)) {
        this.theme = themeName;
      }
    },

    setTheme(themeName: ThemeName) {
      this.theme = themeName;
      if (process.env.CLIENT) {
        localStorage.setItem('pantanal-theme', themeName);
        Cookies.set('pantanal-theme', themeName, { path: '/' });
      }
    },

    hydrateTheme() {
      if (process.env.CLIENT) {
        const savedTheme = localStorage.getItem('pantanal-theme') as ThemeName;
        if (savedTheme && ['pantanal_verde', 'bonito_azul'].includes(savedTheme)) {
          this.theme = savedTheme;
        }
      }
    }
  },
});