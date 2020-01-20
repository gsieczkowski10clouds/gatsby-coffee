import * as actionTypes from '../actions/actionTypes';

const initialState = {
  navbarOpen: false,
}

const toggleMenu = (state, action) => {
  return{
    ...state,
    navbarOpen: !state.navbarOpen,
  }
}

const reducer = (state=initialState, action) => {

  switch (action.type){
    case actionTypes.TOGGLE_MENU: return toggleMenu(state, action);
    default: return state;
  }

}

export default reducer;