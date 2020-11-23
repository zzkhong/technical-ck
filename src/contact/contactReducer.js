import { SET_CONTACTS } from './contactActions';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    default:
      return state;
  }
};

export default reducer;
