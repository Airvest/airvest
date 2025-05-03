import { NavItem, PropertyCard } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: {
      en: 'How It Works',
      bg: 'Как работи',
    },
    href: '#how-it-works',
  },
  {
    label: {
      en: 'Track Record',
      bg: 'Постижения',
    },
    href: '#track-record',
  },
  {
    label: {
      en: 'Properties',
      bg: 'Имоти',
    },
    href: '#properties',
  },
  {
    label: {
      en: 'About',
      bg: 'За нас',
    },
    href: '#about',
  },
];

export const FEATURED_PROPERTIES: PropertyCard[] = [
  {
    id: '1',
    title: {
      en: 'Modern Sofia Apartment',
      bg: 'Модерен апартамент в София',
    },
    location: {
      en: 'Sofia City Center',
      bg: 'Център на София',
    },
    price: 120000,
    minInvestment: 10000,
    roi: 8.5,
    occupancyRate: 87,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: {
      en: 'Luxury Bansko Chalet',
      bg: 'Луксозно шале в Банско',
    },
    location: {
      en: 'Bansko Ski Resort',
      bg: 'Ски курорт Банско',
    },
    price: 180000,
    minInvestment: 15000,
    roi: 9.2,
    occupancyRate: 92,
    image: 'https://images.pexels.com/photos/11902058/pexels-photo-11902058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: {
      en: 'Seaside Burgas Villa',
      bg: 'Крайбрежна вила в Бургас',
    },
    location: {
      en: 'Burgas, Black Sea',
      bg: 'Бургас, Черно море',
    },
    price: 210000,
    minInvestment: 20000,
    roi: 7.8,
    occupancyRate: 85,
    image: 'https://images.pexels.com/photos/3938961/pexels-photo-3938961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: {
      en: 'Browse',
      bg: 'Разгледайте',
    },
    description: {
      en: 'Explore our curated selection of high-performing Airbnb properties in Bulgaria\'s hottest locations.',
      bg: 'Разгледайте нашата селекция от високоефективни Airbnb имоти в най-атрактивните локации в България.',
    },
  },
  {
    title: {
      en: 'Match',
      bg: 'Съвпаднете',
    },
    description: {
      en: 'Connect with co-owners or purchase 100% of the property based on your investment capacity.',
      bg: 'Свържете се със съсобственици или закупете 100% от имота въз основа на вашия инвестиционен капацитет.',
    },
  },
  {
    title: {
      en: 'Invest',
      bg: 'Инвестирайте',
    },
    description: {
      en: 'Make your investment secure through our platform with transparency and legal protection.',
      bg: 'Направете вашата инвестиция сигурна чрез нашата платформа с прозрачност и правна защита.',
    },
  },
  {
    title: {
      en: 'Earn',
      bg: 'Печелете',
    },
    description: {
      en: 'Receive regular passive income from your property, managed by our experienced team.',
      bg: 'Получавайте редовен пасивен доход от вашия имот, управляван от нашия опитен екип.',
    },
  },
];