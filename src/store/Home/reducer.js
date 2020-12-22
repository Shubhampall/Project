import {Home_Data} from '../Types/type';

const initialstate = {
  json: {
    homeData: [],
  },
};

export const HomeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Home_Data:
      return {...state, json: {...state.json, homeData: action.data}};
    default:
      return {...state};
  }
};
