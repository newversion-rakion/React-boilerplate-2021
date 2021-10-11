/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = {
  loginData: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_PENDING:
        return { ...state, loginErrorText: '', loading: true };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginData: action.respond,
          loading: false,
        };
      case LOGIN_ERROR:
        return {
          ...state,
          loading: false,
        };
    }
  });

export default loginReducer;
