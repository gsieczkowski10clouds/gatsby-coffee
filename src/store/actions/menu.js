import * as actionTypes from './actionTypes';

export const storeMenu = (items) => {
  return {
    type: actionTypes.STORE_MENU,
    items: items,
  }
}