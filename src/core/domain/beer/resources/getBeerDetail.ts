import axios, { AxiosRequestConfig } from 'axios';
import { beerPayloadToModel } from '../mapper/index';
import { BeerModel, BeerPayload } from '../models/index';

const host = 'https://api.punkapi.com';

const getUrl = (host: string, id: string): string => `${host}/v2/beers/${id}`;

// default return 25 results
export const GetBeerDetail = async (beerId: string): Promise<BeerModel> => {
  try {
    const url = getUrl(host, beerId);
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      timeout: 10000,
    };

    const { data } = await axios(options);
    const beerResponse = data[0] as BeerPayload;
    return beerPayloadToModel(beerResponse);
  } catch (e) {
    throw e;
  }
};
