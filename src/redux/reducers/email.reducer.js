const emailReducer = (emailGuest = [], action) => {
  switch (action.type) {
    case 'SET_EMAIL_GUEST':
      return action.payload;
    default:
      return emailGuest;
  }
};

export default emailReducer;
