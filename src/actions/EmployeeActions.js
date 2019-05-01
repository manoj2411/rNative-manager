import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_PROP_CHANGE, EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeePropChange = ({ prop, value }) => {
  return {
    type: EMPLOYEE_PROP_CHANGE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      Actions.employeesList({ type: 'reset' });
      dispatch({ type: EMPLOYEE_CREATED });
    })
    .catch(err => console.log(err));
  };
};

export const employeesFetch = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
