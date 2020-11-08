import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import storeMassas from './massas'
import storeTamanhos from './tamanhos'
import storeRecheios from './recheios'
import storeAdicionais from './adicionais'
import storePedido from './pedido'

const reducers = combineReducers({
    storeMassas,
    storeTamanhos,
    storeRecheios,
    storeAdicionais,
    storePedido,
})

const store = createStore(reducers, applyMiddleware(thunk))
export { store }