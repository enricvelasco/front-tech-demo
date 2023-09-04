import { useEffect, useState } from 'react';
import { BeerModel } from '../../../core/domain/beer/models/index';
import { GetBeerDetail } from '../../../core/domain/beer/resources/getBeerDetail';
import { useParams } from 'react-router-dom';

export const useDetail = () => {
  const params = useParams();
  const { beerId } = params;
  const [beer, setBeer] = useState<BeerModel>();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const beerResponse = await GetBeerDetail(beerId);
      console.log('RES', beerResponse);
      setBeer(beerResponse);
    } catch (e) {
      console.warn('ERROR_ON_GET_DETAIL');
    }
  };

  return {
    beer,
  }
}
