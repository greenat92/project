import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import { reducer } from './../reducers'

export const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(),
    autoRehydrate(),
  )
)

// begin periodically persisting the store
persistStore(store)
