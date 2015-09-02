export const TEST = 'TEST'

//
// action creators
//

export function test(text) {
  return { type: TEST, text }
}
