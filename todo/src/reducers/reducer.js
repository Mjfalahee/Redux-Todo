// import action creators

const initialState = {
    items: [
        {id: 0, todo: 'Clean the bathroom'},
        {id: 1, todo: 'Wash the dishes'}
        ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state, 
                items: [
                    ...state.items,
                    {todo: action.payload}
                ]
            };
        case TOGGLE_ITEM:
            return {

            };
        default:
            return state;
    }
}

export default reducer;