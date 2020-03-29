// Have initial state for when state is not ready to be passed
const initState = {
  shopError: null,
  shop: null,
  local: null,
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
        shopError: undefined
      };
    case "LOCAL_FOUND":
      console.log("Local found");
      return {
        ...state,
        local: action.local
      };
    case "SHOP_FOUND_VERIFIED":
      console.log("Verified shop found", action);
      return {
        ...state,
        shopError: false,
        shop: action.shop
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
