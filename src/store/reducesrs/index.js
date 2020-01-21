import { combineReducers } from 'redux';

import navigation from './navigation';
import menu from './menu';

const reducer = combineReducers({
  navigation,
  menu,
});

export default reducer;