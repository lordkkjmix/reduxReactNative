import reducers from '../reducers';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'config'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);

module.exports = {store, persistor};
