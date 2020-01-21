import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  filtered: [],
}

const storeMenu = (state, action) => {
  return{
    ...state,
    items: action.items,
    filtered: action.items,
  }
}

const reducer = (state=initialState, action) => {

  switch (action.type){
    case actionTypes.STORE_MENU: return storeMenu(state, action);
    default: return state;
  }

}

export default reducer;