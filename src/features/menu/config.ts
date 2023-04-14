export const menuItems: IMenuItem[] = [
  { id: 'MainBanner', title: 'О компании' },
  { id: 'OurProjects', title: 'Наши проекты' },
  { id: 'Calculator', title: 'Рассчитать стоимость' },
];

export type IMenuItem = {
  id: string; // должен в точности соответствовать className соответствующей секции
  title: string;
};
