import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import exampleApp from './reducers/example'
import { devTools, persistState } from 'redux-devtools'


export default function configureStore(initialState) {
  // // Enables your middleware:
  let composers = [ applyMiddleware(thunk) ]

  // include devtools and persiststate if enabled
  if (__DEVTOOLS__) {
    composers.push(
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )
  }

  const finalCreateStore = compose(...composers)(createStore)

  let store = finalCreateStore(exampleApp)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/example', () => {
      const nextRootReducer = require('./reducers/example')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
