import { useEffect, useState } from 'react';
import { BeerModel } from '../../../core/domain/beer/models/index';
import { GetBeersList } from '../../../core/domain/beer/resources/getBeersList';

export const useHome = () => {
  const [beerList, setBeerList] = useState<BeerModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const list = await GetBeersList();
      setBeerList(list);
    } catch (e) {
      console.warn('ERROR_ON_GET_BEERS_LIST');
    }
  };

  return {
    beerList,
    getData,
  };
};
