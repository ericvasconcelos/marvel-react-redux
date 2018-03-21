import { combineReducers } from 'redux'
import loginReducer from '../login/loginReducer'
import heroReducer from '../hero/heroReducer'
import charactersReducer from '../characters/charactersReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  hero: heroReducer,
  characters: charactersReducer
})

export default rootReducer