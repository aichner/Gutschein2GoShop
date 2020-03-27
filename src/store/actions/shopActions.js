export const checkName = (name) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(name);
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.collection('partners').get()
    .then((querySnapshot) => {
        let result = undefined;
        let found = false;
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          result = doc.data();
          if(result){
            if(result.shop.name === name.toLowerCase()){
              found = true;
            }
          }
        });
        if(found){
          dispatch({
            type: 'SHOP_FOUND'
          });
        } else {
          dispatch({
            type: 'SHOP_NOTFOUND'
          });
        }
    });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
