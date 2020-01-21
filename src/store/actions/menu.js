import * as actionTypes from './actionTypes';

export const storeMenu = (items) => {
  return {
    type: actionTypes.STORE_MENU,
    items: items,
  }
}

export const filterMenu = (category) => {
  return{
    type: actionTypes.FILTER_MENU,
    category: category,
  }
}