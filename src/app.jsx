import React from 'react'
import AppContainer from './containers/AppContainer.jsx'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { testApp } from './reducers/example'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

window.React = React

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

let store = finalCreateStore(testApp)
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/example', () => {
    const nextRootReducer = require('./reducers/example').testApp
    store.replaceReducer(nextRootReducer)
  })
}

React.render(
  <div>
    <Provider store={store}>
      {() => <AppContainer />}
    </Provider>
    {__DEVTOOLS__ &&
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      }
    </div>
  ,
document.querySelector('#root')
)
