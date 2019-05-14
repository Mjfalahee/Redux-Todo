import { ADD_ITEM, TOGGLE_ITEM } from '../actions'

const initialState = {
    items: [
        {value: 'Clean the bathroom', completed: true, id: 812038095},
        {value: 'Wash the dishes', completed: false, id: 8123123}
        ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state, 
                items: [
                    ...state.items,
                    {value: action.payload.value, completed: false, id: action.payload.id}
                ]
            };
        case TOGGLE_ITEM:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };
            
        default:
            return state;
    }
}

export default reducer;