import { EMPLOYEE_PROP_CHANGE, EMPLOYEE_CREATE } from './types';

export const employeePropChange = ({ prop, value }) => {
  return {
    type: EMPLOYEE_PROP_CHANGE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  return {
    type: EMPLOYEE_CREATE
  }
};
