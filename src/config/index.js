import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "../../reducers";
import rootSaga from "../../sagas";

const persistConfig = {
  key: 'root',
  storage
};

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middleware.push(
    createLogger({
      predicate: (getState, action) => ![].includes(action.type),
      collapsed: true,
    }),
  )
}
const enhancers = [applyMiddleware(...middleware, thunk)]
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore() {
  const store = createStore(persistedReducer, composeWithDevTools(...enhancers))

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga)
  return {store, persistor}
}
