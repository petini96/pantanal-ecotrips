// src/composables/useAnalytics.ts
export function useAnalytics() {
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    // Verifica se está no browser e se o gtag foi carregado
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    } else {
      // Log em desenvolvimento para você saber que funcionou sem sujar o analytics real
      if (process.env.DEV) {
        console.log(`[Analytics] Evento: ${eventName}`, params);
      }
    }
  };

  return {
    trackEvent
  };
}