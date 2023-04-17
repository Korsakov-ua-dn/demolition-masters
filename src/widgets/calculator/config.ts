export const services: Service[] = [
  {
    id: 1,
    title: 'Демонтаж монолитного здания',
    bid: 350,
  },
  {
    id: 2,
    title: 'Демонтаж кирпичного здания',
    bid: 200,
  },
  {
    id: 3,
    title: 'Демонтаж панельного здания',
    bid: 300,
  },
  {
    id: 4,
    title: 'Демонтаж ангаров и сооружений из металического каркаса',
    bid: 50,
  },
  {
    id: 5,
    title: 'Демонтаж фундамента',
    bid: 400,
  },
];

export interface Service {
  id: number;
  title: string;
  bid: number;
}
