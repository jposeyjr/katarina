const socketReducer = (socketGuest = {}, action) => {
  switch (action.type) {
    case 'SET_SOCKET_GUEST':
      return action.payload;
    default:
      return socketGuest;
  }
};

export default socketReducer;
