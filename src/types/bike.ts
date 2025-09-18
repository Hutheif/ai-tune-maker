export interface Bike {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: 'electric' | 'mountain' | 'road' | 'hybrid' | 'bmx';
  brand: string;
  inStock: boolean;
  features: string[];
  specs: {
    frame: string;
    wheels: string;
    brakes: string;
    gears: string;
    weight: string;
    maxSpeed?: string;
    range?: string; // For electric bikes
    battery?: string; // For electric bikes
  };
  colors: string[];
  description: string;
}

export interface BikeCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}