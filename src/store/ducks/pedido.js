export const Types = {
    ADD_MASSA: 'ADD_MASSA',
    ADD_TAMANHO: 'ADD_TAMANHO',
    ADD_RECHEIO: 'ADD_RECHEIO',
    ADD_ADICIONAL: 'ADD_ADICIONAL',
    CLEAN_ORDER: 'CLEAN_ORDER',
    READ_MODAL: 'READ_MODAL',
    ADD_INGREDIENTE: 'ADD_INGREDIENTE',
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
        case Types.ADD_INGREDIENTE:
            return {
                ...state,
                [action.payload.type]: action.payload.data,
                promocao: action.payload.data.suggestion ? true : false
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


export function saveIngrediente(type, item) {
    return {
        type: Types.ADD_INGREDIENTE,
        payload: {
            type: type,
            data: item
        }
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