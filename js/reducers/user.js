const initialState = {
  isLoggedIn: false,
};
function user(state = initialState, action) {
  if (action.type === 'USER_LOGGED') {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return {
      isLoggedIn: initialState.isLoggedIn,
    };
  }

  return state;
}

module.exports = user;
