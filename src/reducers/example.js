import { TEST } from '../actions/example'
import _ from 'lodash'

export function foo(state='bar', action) {
  switch (action.type) {
  case TEST:
    return action.text
  default:
    return state
  }
}

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
