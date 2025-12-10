export function useAnalytics() {
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    } else {
      if (process.env.DEV) {
        console.log(`[Analytics] Evento: ${eventName}`, params);
      }
    }
  };

  return {
    trackEvent
  };
}