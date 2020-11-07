import imageTamanho from "../../assets/images/tamanho.png"

const initialState = {
    dados: [
        { "id": 1, "name": "Pequena", "image": imageTamanho, "suggestion": false },
        { "id": 2, "name": "Média", "image": imageTamanho, "suggestion": true },
        { "id": 3, "name": "Grande", "image": imageTamanho, "suggestion": false }
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}