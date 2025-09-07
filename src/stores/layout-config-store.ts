import { defineStore } from 'pinia';

// Define the type for the theme
export type ThemeName = 'pantanal_verde' | 'bonito_azul';

export const useLayoutConfigStore = defineStore('layoutConfig', {
  state: () => ({
    // Initialize theme from localStorage or default to 'pantanal_verde'
    theme: (localStorage.getItem('pantanal-theme') as ThemeName) || 'pantanal_verde',
  }),
  actions: {
    /**
     * Sets the application theme and persists it in localStorage.
     * @param {ThemeName} themeName - The name of the theme to set.
     */
    setTheme(themeName: ThemeName) {
      this.theme = themeName;
      localStorage.setItem('pantanal-theme', themeName);
      this.applyTheme();
    },

    /**
     * Applies the current theme's CSS variables to the root element.
     */
    applyTheme() {
      const themeVariables: Record<ThemeName, Record<string, string>> = {
        pantanal_verde: {
          '--primary-color': '#2c5c3a',
          '--secondary-color': '#008fc3',
          '--accent-color': '#e67e22',
          '--page-bg-color': '#f4f2e9',
          '--card-bg-color': '#ffffff',
          '--text-primary-color': '#2c3e50',
          '--text-secondary-color': '#777777',
          '--border-color': '#e8e8e8',
          '--footer-bg-color': '#2c5c3a',
          '--scrollbar-thumb-color': '#2c5c3a',
          '--scrollbar-track-color': '#f4f2e9',
        },
        bonito_azul: {
          '--primary-color': '#008fc3',
          '--secondary-color': '#2c5c3a',
          '--accent-color': '#e67e22',
          '--page-bg-color': '#f0f4f8',
          '--card-bg-color': '#ffffff',
          '--text-primary-color': '#2c3e50',
          '--text-secondary-color': '#777777',
          '--border-color': '#dde4ea',
          '--footer-bg-color': '#1d2a35',
          '--scrollbar-thumb-color': '#008fc3',
          '--scrollbar-track-color': '#f0f4f8',
        }
      };

      const variables = themeVariables[this.theme];
      const root = document.documentElement;
      for (const key in variables) {
        root.style.setProperty(key, variables[key] ?? '');
      }
    },

    /**
     * Initializes the theme when the app starts.
     */
    initializeTheme() {
      this.applyTheme();
    }
  },
});

