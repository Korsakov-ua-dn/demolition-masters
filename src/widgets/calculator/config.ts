export const services: Services[] = [
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
    title: 'Демонтаж зданий свыше 15м',
    bid: 500,
  },
  {
    id: 5,
    title: 'Демонтаж ангаров и сооружений из металического каркаса',
    bid: 50,
  },
  {
    id: 6,
    title: 'Демонтаж фундамента',
    bid: 400,
  },
];

export interface Services {
  id: number;
  title: string;
  bid: number;
}
