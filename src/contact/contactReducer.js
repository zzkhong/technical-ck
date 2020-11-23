import { SET_CONTACTS, SET_IS_LOADING } from './contactActions';

const initialState = {
  contacts: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default reducer;
