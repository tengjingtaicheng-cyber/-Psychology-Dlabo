export type NavItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export const brand = {
  name: 'Maison Neko',
  tagline: '静けさと猫に満たされる、上質なひととき。',
  address: '東京都港区白金 4-8-12',
  phone: '03-0000-1122',
  hours: '11:00-21:00',
};

export const navigation: NavItem[] = [
  { label: 'トップ', href: '/' },
  { label: '猫たち', href: '/cats' },
  { label: '空間', href: '/space' },
  { label: 'メニュー', href: '/menu' },
  { label: '初めての方へ', href: '/first-visit' },
  { label: 'ご予約', href: '/reservation' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Maison Neko',
    links: [
      { label: '猫たち', href: '/cats' },
      { label: '空間', href: '/space' },
      { label: 'メニュー', href: '/menu' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: '初めての方へ', href: '/first-visit' },
      { label: 'ご予約', href: '/reservation' },
    ],
  },
];

export const iconMap = {
  cat: new URL('../assets/icons/cat.svg', import.meta.url).href,
  cup: new URL('../assets/icons/cup.svg', import.meta.url).href,
  lounge: new URL('../assets/icons/lounge.svg', import.meta.url).href,
  calendar: new URL('../assets/icons/calendar.svg', import.meta.url).href,
  paw: new URL('../assets/icons/paw.svg', import.meta.url).href,
} as const;
