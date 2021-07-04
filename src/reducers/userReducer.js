import AsyncStorage from '@react-native-async-storage/async-storage';
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
} from '../types';

const initialState = {
  authenticated: null,
  user: null,
  loading: null,
  error: null,
  token: null,
};

AsyncStorage.getItem('token').then(value => {
  initialState.token = value;
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
    case GET_USER:
    case USER_REGISTER:
      return {...state, loading: true};

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      AsyncStorage.setItem('token', action.payload);
      return {...state, error: null, token: action.payload};

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        error: null,
        loading: false,
      };

    case USER_LOGIN_ERROR:
    case USER_REGISTER_ERROR:
    case GET_USER_ERROR:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        error: action.payload,
        authenticated: false,
        token: null,
        user: null,
      };

    case LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
