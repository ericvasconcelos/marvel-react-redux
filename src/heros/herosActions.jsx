import axios from 'axios'
import verifyStorage from '../utils/verify-storage'

export const loadHeros = (ind) => {
  const { public_key, hash } = verifyStorage()

  return (dispatch, getState) => {
    const storeLimit = getState().heros.limit
    const storeOffset = getState().heros.offset
    const storeTotal = getState().heros.total
    var offset;

    if (ind === 'prev') {
      offset = storeOffset >= storeLimit ? (storeOffset - storeLimit) : 0;
    } else if (ind === 'next') {
      offset = storeOffset < (storeTotal - storeLimit) ? (storeOffset + storeLimit) : storeOffset;
    } else {
      offset = 0;
    }

    const url = `http://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=1&apikey=${public_key}&hash=${hash}`
    const request = axios.get(url)
      .then(res => {
          dispatch({ type: 'LOAD_HEROS', payload: res.data.data })
        }
      )
  }
}

