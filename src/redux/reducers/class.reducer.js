const babyListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BABYLIST':
      return action.payload;
    case 'ADD_BABYLIST':
      return [...state, action.payload];
    case 'EDIT_BABYLIST':
      //goes through the total list of registry and only changes the one that matches
      return state.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
    case 'DELETE_BABYLIST':
      //goes through and keeps everything but the one that matches
      return state.filter((course) => course.id !== action.payload);
    case 'UNSET_BABYLIST':
      return [];
    default:
      return state;
  }
};

export default babyListReducer;
