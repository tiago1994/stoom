import imageMassa from '../../assets/images/massa.png'

const initialState = {
    dados: [
        { "id": 1, "name": "Tradicional", "image": imageMassa, "suggestion": true },
        { "id": 2, "name": "Integral", "image": imageMassa, "suggestion": false },
        { "id": 3, "name": "Grãos", "image": imageMassa, "suggestion": false },
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}