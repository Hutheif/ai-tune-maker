export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  store: {
    name: string;
    logo: string;
  };
  features: string[];
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  buyUrl: string;
}

export interface ComparisonData {
  query: string;
  products: Product[];
  aiSummary: string;
}