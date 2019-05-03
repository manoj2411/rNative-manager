import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_PROP_CHANGE, EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_PROPS_RESET
} from './types';

export const employeePropChange = ({ prop, value }) => {
  return {
    type: EMPLOYEE_PROP_CHANGE,
    payload: { prop, value }
  };
};

export const employeeFormReset = () => {
  return {
    type: EMPLOYEE_PROPS_RESET
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

export const employeeUpdate = ({ name, phone, shift, uid }) => {
  return () => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        Actions.employeesList({ type: 'reset' });
        // dispatch({ type: EMPLOYEE_CREATED });
      });
  };
};
