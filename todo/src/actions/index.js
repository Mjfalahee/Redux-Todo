export const ADD_ITEM = 'ADD_ITEM';

export const addItem = newItem => {
    console.log(newItem);
    return {
        type: ADD_ITEM,
        payload: newItem
    };
};

export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const toggleItem = id => {
    return {
        type: TOGGLE_ITEM,
        payload: id
    };
};

export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};