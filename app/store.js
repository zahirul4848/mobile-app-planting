import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { userSigninReducer } from './reducers/userReducers';
import { productCategoryListReducer, productListReducer } from './reducers/productReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userInfo'],
};

const reducers = combineReducers({
  userSignin: persistReducer(persistConfig, userSigninReducer),
  productList: productListReducer,
  productCategoryList: productCategoryListReducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);