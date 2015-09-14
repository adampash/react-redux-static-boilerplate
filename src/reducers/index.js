import { combineReducers } from 'redux'
import * as exampleReducer from './example'

const rootReducer = combineReducers({
  ...exampleReducer
})

export default rootReducer
