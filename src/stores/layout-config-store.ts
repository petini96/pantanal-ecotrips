import { defineStore } from 'pinia';
import { Cookies } from 'quasar';
import { themeVariables, type ThemeName } from 'src/utils/theme-utils';

export const useLayoutConfigStore = defineStore('layoutConfig', {
  state: () => ({
    theme: 'pantanal_verde' as ThemeName,
  }),
  actions: {
    /**
     * Action to be called from the server-side (preFetch) to set the initial theme.
     * @param {ThemeName} themeName - The name of the theme to set.
     */
    setSsrTheme(themeName: ThemeName) {
      // Just update the state. No client-side logic.
      if (['pantanal_verde', 'bonito_azul'].includes(themeName)) {
        this.theme = themeName;
      }
    },

    /**
     * Sets the application theme and persists it in localStorage and cookies (client-side only).
     * @param {ThemeName} themeName - The name of the theme to set.
     */
    setTheme(themeName: ThemeName) {
      this.theme = themeName;
      if (process.env.CLIENT) {
        localStorage.setItem('pantanal-theme', themeName);
        Cookies.set('pantanal-theme', themeName, { path: '/' });
      }
      this.applyTheme();
    },

    /**
     * Applies the current theme's CSS variables to the root element (client-side only).
     */
    applyTheme() {
      if (!process.env.CLIENT) {
        return;
      }
      // Now uses the imported themeVariables
      const variables = themeVariables[this.theme];
      const root = document.documentElement;
      for (const key in variables) {
        root.style.setProperty(key, variables[key] ?? '');
      }
    },

    /**
     * Initializes the theme from localStorage on the client-side and syncs the cookie.
     */
    hydrateTheme() {
      if (process.env.CLIENT) {
        const savedTheme = localStorage.getItem('pantanal-theme') as ThemeName;
        if (savedTheme && ['pantanal_verde', 'bonito_azul'].includes(savedTheme)) {
          this.theme = savedTheme;
          Cookies.set('pantanal-theme', savedTheme, { path: '/' });
        }
        this.applyTheme();
      }
    }
  },
});

