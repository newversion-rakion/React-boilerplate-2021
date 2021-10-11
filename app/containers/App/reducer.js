import produce from 'immer';
import {
  DEFAULT_ACTION,
} from './constants';

export const initialState = {
  loading: false
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
