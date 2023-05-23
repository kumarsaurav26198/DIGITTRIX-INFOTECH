import { ActionTypes } from "../constants/actiontypes";

const initialState = {
  data: null,
  error: null,
  cartItems: [],
};

const userReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type)
  {
    case ActionTypes.FETCH_ALL_DATA:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        cartItems: null
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
