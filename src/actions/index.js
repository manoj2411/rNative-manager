import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_START } from './types';


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
    dispatch({ type: LOGIN_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => handleLoginSuccess(dispatch, user))
      .catch(err => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => handleLoginSuccess(dispatch, user))
          .catch(() => handleLoginFailure(dispatch, err));
      });
  };
};


const handleLoginSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const handleLoginFailure = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOGIN_FAIL });
};
