import {combineReducers} from 'redux';
import {HomeReducer} from '../Home/reducer';

import {RegistrationReducer} from '../Registration/reducer';

const rootReducer = combineReducers({
  Login: RegistrationReducer,
  Registration: RegistrationReducer,
  Home: HomeReducer,
});
export default rootReducer;
