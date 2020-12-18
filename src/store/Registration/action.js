import {Authentication, Registration_Data} from '../Types/type';
export const setUserDetails = (data) => ({
  type: Registration_Data,
  data,
});
export const setAuthentication = () => {
  return {
    type: Authentication,
  };
};
