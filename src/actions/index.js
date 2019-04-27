import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL } from './types';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => handleLoginSuccess(dispatch, user))
      .catch(err => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => handleLoginSuccess(dispatch, user))
          .catch(error => handleLoginFailure(dispatch, err));
      });
  };
};


const handleLoginSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const handleLoginFailure = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL });
};
