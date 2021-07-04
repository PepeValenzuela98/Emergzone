import AsyncStorage from '@react-native-async-storage/async-storage';
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
  return async dispatch => {
    dispatch(userLogin());
    try {
      const response = {
        data: {
          token: 'dsadsadnasjkdnakdjnajdkas',
        },
      }; //TODO: Remplazar con peticion con http
      dispatch(userLoginSuccess(response.data.token));
      dispatch(getUserAction());
    } catch (error) {
      const msg = error?.response?.data?.msg;
      if (msg) {
        return dispatch(userLoginError(msg));
      }
      dispatch(userLoginError('Ocurrio un error en el servidor'));
    }
  };
};

export const userRegisterAction = user => {
  return async dispatch => {
    dispatch(userRegister());
    try {
      const response = {
        data: {
          token: 'dsadsadnasjkdnakdjnajdkas',
        },
      }; //TODO: Remplazar con peticion con http
      dispatch(userRegisterSuccess(response.data.token));
      dispatch(getUserAction());
    } catch (error) {
      const msg = error?.response?.data?.msg;
      if (msg) {
        return dispatch(userRegisterError(msg));
      }
      dispatch(userRegisterError('Ocurrio un error en el servidor'));
    }
  };
};

export const getUserAction = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      //* AGREGAR TOKEN A HEADER
    }
    dispatch(getUser());
    try {
      const response = {
        data: {
          user: {
            name: 'Pepe Valenzuela',
            email: 'pepevalenzuela98@hotmail.com',
          },
        },
      }; //TODO: Remplazar con peticion con http
      dispatch(getUserSuccess(response.data.user));
    } catch (error) {
      const msg = error?.response?.data?.msg;
      if (msg) {
        return dispatch(getUserError(msg));
      }
      dispatch(getUserError('Ocurrio un error en el servidor'));
    }
  };
};

export const logoutAction = () => {
  return dispatch => {
    dispatch(logout());
  };
};
