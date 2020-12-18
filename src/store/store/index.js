import {createStore} from 'redux';
import rootReducer from '../MainReducer/index';
export default function ConfigStore() {
  return createStore(rootReducer);
}
