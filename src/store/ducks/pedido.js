export const Types = {
    ADD_MASSA: 'ADD_MASSA',
    ADD_TAMANHO: 'ADD_TAMANHO',
    ADD_RECHEIO: 'ADD_RECHEIO',
    ADD_ADICIONAL: 'ADD_ADICIONAL',
    CLEAN_ORDER: 'CLEAN_ORDER',
    READ_MODAL: 'READ_MODAL',
}

const initialState = {
    massa: {},
    tamanho: {},
    recheio: {},
    adicional: {}, 
    promocao: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_MASSA:
            return {
                ...state,
                massa: action.payload,
                promocao: action.payload.suggestion?true:false
            }
        case Types.ADD_TAMANHO:
            return {
                ...state,
                tamanho: action.payload,
                promocao: action.payload.suggestion?true:false
            }
        case Types.ADD_RECHEIO:
            return {
                ...state,
                recheio: action.payload,
                promocao: action.payload.suggestion?true:false
            }
        case Types.ADD_ADICIONAL:
            return {
                ...state,
                adicional: action.payload,
                promocao: action.payload.suggestion?true:false
            }
        case Types.CLEAN_ORDER:
            return {
                ...state,
                massa: {},
                tamanho: {},
                recheio: {},
                adicional: {},
                promocao: true
            }
        case Types.READ_MODAL:
            return {
                ...state,
                promocao: false
            }
        default:
            return state
    }
}


export function saveMassa(item) {
    return {
        type: Types.ADD_MASSA,
        payload: item
    }
}

export function saveTamanho(item) {
    return {
        type: Types.ADD_TAMANHO,
        payload: item
    }
}

export function saveRecheio(item) {
    return {
        type: Types.ADD_RECHEIO,
        payload: item
    }
}

export function saveAdicional(item) {
    return {
        type: Types.ADD_ADICIONAL,
        payload: item
    }
}

export function cleanOrder() {
    return {
        type: Types.CLEAN_ORDER
    }
}

export function readModal() {
    return {
        type: Types.READ_MODAL
    }
}