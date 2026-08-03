import React, { useState } from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

type GoodsLoader = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = async (loader: GoodsLoader): Promise<void> => {
    try {
      setError('');

      const loadedGoods = await loader();

      setGoods(loadedGoods);
    } catch {
      setGoods([]);
      setError('Something went wrong while loading goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p role="alert">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
