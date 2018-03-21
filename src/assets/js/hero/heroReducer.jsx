const INITIAL_STATE = {
  hero: {},
  comics: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOAD_HERO':
      return { ...state, hero: action.payload }
    case 'LOAD_COMICS':
      return { ...state, comics: action.payload }
    default:
      return state
  }
}