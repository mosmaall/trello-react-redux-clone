import { combineReducers } from 'redux'
import deskReducer from './deskReducer'
import boardReducer from './boardReducer'

export default combineReducers({
  desks: deskReducer,
  boards: boardReducer,
})
