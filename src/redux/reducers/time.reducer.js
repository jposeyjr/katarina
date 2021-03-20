const initState = {
  time: null,
};

const timeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return Object.assign({}, state, { time: action.payload });
    case 'RESET_TIMER':
      return {
        ...state,
        time: null,
      };
    default:
      return state;
  }
};

export default timeReducer;
