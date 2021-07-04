import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  LOGOUT,
} from '../../types';

const userLogin = () => ({type: USER_LOGIN});

const userLoginSuccess = token => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

const userLoginError = error => ({
  type: USER_LOGIN_ERROR,
  payload: error,
});

const userRegister = () => ({type: USER_REGISTER});

const userRegisterSuccess = token => ({
  type: USER_REGISTER_SUCCESS,
  payload: token,
});

const userRegisterError = error => ({
  type: USER_REGISTER_ERROR,
  payload: error,
});

const getUser = () => ({type: GET_USER});

const getUserSuccess = user => ({type: GET_USER_SUCCESS, payload: user});

const getUserError = error => ({type: GET_USER_ERROR, payload: error});

const logout = () => ({type: LOGOUT});

export default {
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
};
