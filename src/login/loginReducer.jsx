const INITIAL_STATE = {
  private_key: null,
  public_key: null,
  hash: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_PRIVATE_KEY':
      return { ...state, private_key: action.payload }
    case 'GET_PUBLIC_KEY':
      return { ...state, public_key: action.payload }
    case 'GENERATE_HASH':
      return { ...state, hash: action.payload, error: null }
    case 'GENERATE_HASH_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}