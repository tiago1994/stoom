import imageRecheio from '../../assets/images/recheio.jpg'

const initialState = {
    dados: [
        { "id": 1, "name": "Calabresa", "image": imageRecheio, "suggestion": false },
        { "id": 2, "name": "Portuguesa", "image": imageRecheio, "suggestion": false },
        { "id": 3, "name": "Marguerita", "image": imageRecheio, "suggestion": false },
        { "id": 4, "name": "Frango com catupiry", "image": imageRecheio, "suggestion": true },
        { "id": 5, "name": "Muçarela", "image": imageRecheio, "suggestion": false },
        { "id": 6, "name": "Napolitana", "image": imageRecheio, "suggestion": false },
        { "id": 7, "name": "Brigadeiro", "image": imageRecheio, "suggestion": false },
        { "id": 8, "name": "Romeu e Julieta", "image": imageRecheio, "suggestion": false },
        { "id": 9, "name": "Califórnia", "image": imageRecheio, "suggestion": false }
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}