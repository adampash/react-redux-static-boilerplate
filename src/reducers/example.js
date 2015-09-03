import { combineReducers } from 'redux'
import { TEST } from '../actions/example'
import _ from 'lodash'

function foo(state={foo: 'bar'}, action) {
  switch (action.type) {
  case TEST:
    return action.text
  default:
    return state
  }
}

const testApp = combineReducers({
  foo
})

export default testApp

// below is without combinereducers
// const initialState = {foo: 'bar'}

// export default function testApp(state = initialState, action={}) {
//   switch (action.type) {
//   case TEST:
//     return _.assign({}, state, {
//       foo: action.text,
//     })
//   default:
//     return state
//   }
// }
