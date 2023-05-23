import { ActionTypes } from '../constants/actiontypes';

export const cartReducers = (state = [], action) => {
    switch (action.type)
    {
        case ActionTypes.ADD_TO_CART:


            return [ ...state, action.payload ];


        case ActionTypes.REMOVE_FROM_CART:
            console.log('action.payload', action.payload);
            return [
                ...state.filter((item, i) => item.id !== action.payload)
            ];
        // });

        default:
            return state;
    }
};