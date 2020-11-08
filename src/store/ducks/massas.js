import * as massasApi from "../../services/massas";

export const Types = {
    GET_LIST: 'GET_LIST',
    GET_LOADING: 'GET_LOADING',
    GET_ERROR: 'GET_ERROR'
}

const initialState = {
    dados: [],
    loading: false,
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_LOADING:
            return {
                ...state,
                loading: true
            }
        case Types.GET_LIST:
            return {
                ...state,
                dados: action.payload,
                loading: false,
                error: false
            }
        case Types.GET_ERROR:
            return {
                ...state,
                dados: [],
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export const buscaMassas = payload => async dispatch => {
    dispatch({ type: Types.GET_LOADING });
    try {
        const response = await massasApi.getList();
        dispatch({ type: Types.GET_LIST, payload: response.data });
    } catch (e) {
        dispatch({ type: Types.GET_ERROR });
    }
};