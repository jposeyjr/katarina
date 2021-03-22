const guessReducer = (guess = {}, action) => {
  switch (action.type) {
    case 'SET_USER_GUESS':
      return action.payload;
    default:
      return guess;
  }
};

export default guessReducer;
