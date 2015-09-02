import { TEST } from '../actions/example'
import _ from 'lodash'

const initialState = {foo: 'bar'}

export function testApp(state = initialState, action={}) {
  switch (action.type) {
  case TEST:
    return _.assign({}, state, {
      foo: action.text,
    })
  default:
    return state
  }
}
