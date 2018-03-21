import { combineReducers } from 'redux'
import loginReducer from '../login/loginReducer'
import herosReducer from '../heros/herosReducer'
import charactersReducer from '../characters/charactersReducer'

const rootReducer = combineReducers({
  heros: herosReducer,
  login: loginReducer,
  characters: charactersReducer
})

export default rootReducer