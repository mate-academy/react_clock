import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Unable to load goods');
    }

    return response.json() as Promise<Good[]>;
  });
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods =>
    [...goods].sort((goodA, goodB) => goodA.name.localeCompare(goodB.name)).slice(0, 5),
  );
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
