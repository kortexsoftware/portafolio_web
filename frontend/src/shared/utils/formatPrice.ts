export const formatPrice = (usd: number) =>
  new Intl.NumberFormat('es', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usd);
