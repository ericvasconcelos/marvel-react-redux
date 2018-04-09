import axios from 'axios';
import verifyStorage from '../utils/verify-storage';

export const loadHero = (id) => {
  const { public_key, hash } = verifyStorage();

  return (dispatch) => {
    const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${public_key}&hash=${hash}`;
    const request = axios.get(url)
      .then(res => dispatch({ type: 'LOAD_HERO', payload: res.data.data.results[0] }));
  };
};

export const loadComics = (id) => {
  const { public_key, hash } = verifyStorage();

  return (dispatch) => {
    const url = `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${public_key}&hash=${hash}`;
    const request = axios.get(url)
      .then(res => dispatch({ type: 'LOAD_COMICS', payload: res.data.data.results }));
  };
};

