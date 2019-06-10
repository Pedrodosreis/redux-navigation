export const REQUEST_TEXT = 'REQUEST_TEXT';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';
export const CHANGE_TEXT = 'CHANGE_TEXT';


export default function categories(state = "Simple Text", action) {
    switch (action.type) {
        case REQUEST_TEXT:
            console.log('request')
            return state
        case RECEIVE_TEXT:
            console.log('receive')
            return state
        default:
            return state
    }
}