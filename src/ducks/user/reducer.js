const intiailState = '';

export default function (state = intiailState, action) {
    switch (action.type) {
        case 'SIGNIN':
            return state
        case 'REGISTER':
            return state
        default:
            return state
    }
}