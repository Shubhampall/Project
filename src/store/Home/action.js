import {Home_Data} from '../Types/type';

export const HomePage = (data) => {
  return {
    type: Home_Data,
    data: data,
  };
};
