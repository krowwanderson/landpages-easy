import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Função para capturar e preservar parâmetros UTM
export function getUtmParams(): URLSearchParams {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  
  // Parâmetros UTM que queremos preservar
  const utmKeys = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams.set(key, value);
    }
  });
  
  return utmParams;
}

// Função para criar URL com parâmetros UTM preservados
export function createUrlWithUtm(baseUrl: string): string {
  const utmParams = getUtmParams();
  
  if (utmParams.toString()) {
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${utmParams.toString()}`;
  }
  
  return baseUrl;
}

// Função para redirecionar preservando UTMs
export function redirectWithUtm(url: string): void {
  const finalUrl = createUrlWithUtm(url);
  window.location.href = finalUrl;
}

// Hook para usar em componentes React
export function useUtmPreservation() {
  return {
    getUtmParams,
    createUrlWithUtm,
    redirectWithUtm
  };
}
