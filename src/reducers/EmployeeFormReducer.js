import { EMPLOYEE_UPDATE } from '../actions/EmployeeActions';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // [action.payload.prop] -> Its called key interpolation.
      return { ...state, [action.payload.prop]: action.prop.value };
    default:
     return state;
  }
};
