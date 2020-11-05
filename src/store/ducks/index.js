import { combineReducers, createStore } from 'redux'
import storeMassas from './massas';

const reducers = combineReducers({
    storeMassas
});

const store = createStore(reducers)
export { store }