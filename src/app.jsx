import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react'
import 'babel-core/polyfill'
import configureStore from './configureStore'
import AppContainer from './containers/AppContainer.jsx'

window.React = React
let store = configureStore()

render(
  <div>
    <Provider store={store}>
      <AppContainer />
    </Provider>
    {__DEVTOOLS__ &&
      <DebugPanel top right bottom visibleOnLoad={false} >
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      }
    </div>
  ,
document.querySelector('#root')
)
