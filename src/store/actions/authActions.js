export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({
        type: "LOGIN_SUCCESS"
      });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        err
      });
    });
  };
};

export const signInAnonymous = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInAnonymously()
    .then(() => {
      dispatch({
        type: "LOGIN_ANON_SUCCESS"
      });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        err
      });
    });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log(newUser);
    let partner = {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      phone: newUser.phone,
      company: {
        location: {
          address: newUser.company.location.address,
          city: newUser.company.location.city,
          state: newUser.company.location.state,
        },
        uid: newUser.company.uid,
        name: newUser.company.name,
      },
      verified: false,
      shop: {
        colors: {
          primary: "#ff8910",
          secondary: "#2e2e2e",
        },
        name: null
      }
    }

    console.log(partner);

    // Create new user to firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, process.env.REACT_APP_DEFAULT_STRING)
      .then(response => {
        // Create data for user we just created
        return firestore
          .collection("partners")
          .doc(response.user.uid)
          .set(partner);
      })
      .then(() => {
        firebase
        .auth()
        .signOut();
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          errCode: 1,
          err
        });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
