import { combineReducers } from 'redux';
import first from './Reducer';

const rootReducer = combineReducers({
  first,
});
//
// const rootReducer = (state, action) => {
//   let newState = state;
//   if (action.type === LOGOUT) {
//     newState = undefined;
//   }
//
//   return appReducer(newState, action);
// };

export default rootReducer;
