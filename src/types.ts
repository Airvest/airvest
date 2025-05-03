export type Language = 'en' | 'bg';

export interface NavItem {
  label: {
    en: string;
    bg: string;
  };
  href: string;
}

export interface PropertyCard {
  id: string;
  title: {
    en: string;
    bg: string;
  };
  location: {
    en: string;
    bg: string;
  };
  price: number;
  minInvestment: number;
  roi: number;
  occupancyRate: number;
  image: string;
}