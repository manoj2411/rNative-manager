import { EMPLOYEE_PROP_CHANGE, EMPLOYEE_CREATED } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_PROP_CHANGE:
      // [action.payload.prop] -> Its called key interpolation.
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATED:
      return { ...state, ...INITIAL_STATE };
    default:
     return state;
  }
};
