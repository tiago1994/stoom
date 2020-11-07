import { combineReducers, createStore } from 'redux'
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

const store = createStore(reducers)
export { store }