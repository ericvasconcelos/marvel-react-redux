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
    const private_key = getState().login.private_key;
    const public_key = getState().login.public_key;
    const hash = md5(`1${private_key}${public_key}`);
    const access_hash = { public_key, hash };


    const url = `http://gateway.marvel.com/v1/public/characters?limit=1&offset=1&ts=1&apikey=${public_key}&hash=${hash}`;
    const request = axios.get(url)
      .then((res) => {
        localStorage.setItem('access_hash', JSON.stringify(access_hash));
        dispatch({
          type: 'GENERATE_HASH',
          payload: hash,
        });
        hashHistory.push('/characters');
      }).catch((error) => {
        dispatch({
          type: 'GENERATE_HASH_ERROR',
          payload: 'Suas chaves estão incorretas',
        });
      });
  };
};

