export type ServiceCategory = 'WEB' | 'SOFTWARE' | 'ECOMMERCE' | 'MOBILE';

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  priceFrom: number;
  features: string[];
  createdAt: Date;
}
