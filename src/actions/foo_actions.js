export const TEST = 'TEST'

//
// action creators
//

export function test(text) {
  return { type: TEST, text }
}

export function testAsync(text) {
  return dispatch => {
    setTimeout(() => {
      dispatch(test(text))
    }, 1000)
  }
}
