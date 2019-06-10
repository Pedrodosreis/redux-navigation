
export const REQUEST_TEXT = 'REQUEST_TEXT';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const requestText = () => {
    return {
        type: REQUEST_TEXT,
    }
}

export const receiveText = () => {
    return {
        type: RECEIVE_TEXT,
    }
}

export const changeTextDispatch = (text) => {
    return {
        type: CHANGE_TEXT,
        text
    }
}

export const getText = () => {
    return dispatch => {
        dispatch(receiveText());
    }
}

export const changeText = (text) => {
    return dispatch => {
        dispatch(requestText());
        return changeTextDispatch(text);
    }
}