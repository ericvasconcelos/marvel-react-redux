import axios from 'axios';
import { hashHistory } from 'react-router';
import { md5 } from '../utils/md5';

export const getPrivateKey = event => ({
  type: 'GET_PRIVATE_KEY',
  payload: event.target.value,
});

export const getPublicKey = event => ({
  type: 'GET_PUBLIC_KEY',
  payload: event.target.value,
});

export const generateHash = (e) => {
  e.preventDefault();

  return (dispatch, getState) => {
    const { privateKey, publicKey } = getState().login;
    const hash = md5(`1${privateKey}${publicKey}`);
    const accessHash = { publicKey, hash };

    const url = `http://gateway.marvel.com/v1/public/characters?limit=1&offset=1&ts=1&apikey=${publicKey}&hash=${hash}`;
    axios.get(url)
      .then(() => {
        localStorage.setItem('accessHash', JSON.stringify(accessHash));
        dispatch({
          type: 'GENERATE_HASH',
          payload: hash,
        });
        hashHistory.push('/characters');
      }).catch(() => {
        dispatch({
          type: 'GENERATE_HASH_ERROR',
          payload: 'Suas chaves estão incorretas',
        });
      });
  };
};

