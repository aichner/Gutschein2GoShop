// Have initial state for when state is not ready to be passed
const initState = {
  shopError: null
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOP_NOTFOUND":
      console.log("Shop not found", action.err);
      return {
        ...state,
        shopError: true
      };
    case "SHOP_FOUND":
      console.log("Shop found");
      return {
        ...state,
        shopError: false
      };
    default:
      return state;
  }
};

export default shopReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
