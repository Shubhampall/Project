import {combineReducers} from 'redux';

import {RegistrationReducer} from '../Registration/reducer';

const rootReducer = combineReducers({
  Login: RegistrationReducer,
  Registration: RegistrationReducer,
});
export default rootReducer;
