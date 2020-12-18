import {Registration_Data, Authentication} from '../Types/type';
const initialState = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
  authentication: false,
};

export const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Registration_Data:
      return {
        ...state,
        userData: action.data,
      };
    case Authentication: {
      return {
        ...state,
        authentication: !state.authentication,
      };
    }
    default:
      return {...state};
  }
};
