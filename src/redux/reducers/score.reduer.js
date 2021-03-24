const ScoreReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCORES':
      return Object.assign({}, state, action.payload);
    case 'ADD_SCORE':
      return [...state, action.payload];
    case 'EDIT_SCORE':
      //goes through the total list of registry and only changes the one that matches
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case 'DELETE_SCORE':
      //goes through and keeps everything but the one that matches
      return state.filter((item) => item.id !== action.payload);
    case 'CLEAR_SCORES':
      return [];
    default:
      return state;
  }
};

export default ScoreReducer;
