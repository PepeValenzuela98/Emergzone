import functions from '../helpers/dispatchFunctions';
const {
  userLogin,
  userLoginSuccess,
  userLoginError,
  userRegister,
  userRegisterSuccess,
  userRegisterError,
  getUser,
  getUserSuccess,
  getUserError,
  logout,
} = functions;

export const userLoginAction = user => {
  return async dispatch => {};
};

export const userRegisterAction = user => {
  return async dispatch => {};
};

export const getUserAction = user => {
  return async dispatch => {};
};

export const logoutAction = () => {
  return dispatch => {};
};
