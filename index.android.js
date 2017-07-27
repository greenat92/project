import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './js/store'
import App from './js/containers/App'


// Pass the store into the app container
const AppWithStore = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

AppRegistry.registerComponent('project', () => AppWithStore)
