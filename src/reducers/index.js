import { combineReducers } from 'redux'

import user from './user'
import visitor from './visitor'

export default combineReducers({
  user,
  visitor
})
