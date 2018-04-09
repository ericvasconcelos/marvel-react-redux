import axios from 'axios';
import verifyStorage from '../utils/verify-storage';

export const loadCharacters = (ind) => {
  const { public_key, hash } = verifyStorage();

  return (dispatch, getState) => {
    const storeLimit = getState().characters.limit;
    const storeOffset = getState().characters.offset;
    const storeTotal = getState().characters.total;
    let offset;

    if (ind === 'prev') {
      offset = storeOffset >= storeLimit ? (storeOffset - storeLimit) : 0;
    } else if (ind === 'next') {
      offset = storeOffset < (storeTotal - storeLimit) ? (storeOffset + storeLimit) : storeOffset;
    } else {
      offset = 0;
    }

    const url = `http://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=1&apikey=${public_key}&hash=${hash}`;
    const request = axios.get(url)
      .then((res) => {
        dispatch({ type: 'LOAD_CHARACTERS', payload: res.data.data });
      });
  };
};

