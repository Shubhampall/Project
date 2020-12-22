import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../MainReducer/index';
// export default function ConfigStore() {
//   return createStore(rootReducer, applyMiddleware(thunk));
// }
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
