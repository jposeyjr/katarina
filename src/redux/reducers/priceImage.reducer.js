const priceImageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRICE_IMAGE':
      return action.payload;
    case 'CLEAR_PRICE_IMAGE':
      return {};
    default:
      return state;
  }
};

export default priceImageReducer;
