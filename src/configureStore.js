import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
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

  let store = finalCreateStore(rootReducer)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
