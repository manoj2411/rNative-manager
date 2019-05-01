import firebase from 'firebase';

import { EMPLOYEE_PROP_CHANGE, EMPLOYEE_CREATE } from './types';

export const employeePropChange = ({ prop, value }) => {
  return {
    type: EMPLOYEE_PROP_CHANGE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  return (dipatch) => {
    const { currentUser } = firebase.auth();
    console.log(currentUser);

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(obj => console.log(obj))
    .catch(err => console.log(err));
  };
};
