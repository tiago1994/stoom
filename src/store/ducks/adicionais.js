import imageAdicionais from '../../assets/images/adicionais.png'

const initialState = {
    dados: [
        {"id": 1, "name": "Bacon", "image": imageAdicionais, "suggestion": false},
        {"id": 2, "name": "Catupiry", "image": imageAdicionais, "suggestion": true},
        {"id": 3, "name": "Cheddar", "image": imageAdicionais, "suggestion": false}
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}