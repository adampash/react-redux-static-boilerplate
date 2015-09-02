import { TEST } from '../actions/foo_actions.js'
import _ from 'lodash'

const initialState = {foo: 'bar'}

export function testApp(state = initialState, action={}) {
  switch (action.type) {
  case TEST:
    return _.assign({}, state, {
      foo: `${action.text} neat`,
    })
  default:
    return state
  }
}

// initilizing initial state for store
// testApp()
