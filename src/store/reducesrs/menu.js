import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  filtered: [],
  categories: [],
}

const storeMenu = (state, action) => {

  let categories = action.items.map( (item) => {
    return item.node.category;
  });
  categories = ['all', ...categories];

  return{
    ...state,
    items: action.items,
    filtered: action.items,
    categories: [...(new Set(categories))],
  }
};

const filterMenu = (state, action) => {
  const items = [...state.items];
  return {
    ...state,
    filtered: action.category === 'all' ? items : items.filter( ({node}) => node.category === action.category),
  }
};

const reducer = (state=initialState, action) => {

  switch (action.type){
    case actionTypes.STORE_MENU: return storeMenu(state, action);
    case actionTypes.FILTER_MENU: return filterMenu(state, action);
    default: return state;
  }

}

export default reducer;