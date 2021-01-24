'use strict';
const initialState = {};
function config(state = initialState, action) {
  if (action.type === 'LOADED_CONFIG_SUCCESS') {
    return {
      ...state,
    };
  }
  return state;
}

module.exports = config;
