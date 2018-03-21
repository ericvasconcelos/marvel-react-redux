const INITIAL_STATE = {
  characters: [],
  limit: 30,
  offset: 0,
  total: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOAD_CHARACTERS':
      return {
        ...state,
        characters: action.payload.results,
        limit: action.payload.limit,
        offset: action.payload.offset,
        total: action.payload.total,
      }
    default:
      return state
  }
}