const initState = {
  time: 0,
};

const timeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return action.payload;
    case 'RESET_TIMER':
      return {
        ...state,
        time: 0,
      };
    default:
      return state;
  }
};

export default timeReducer;
