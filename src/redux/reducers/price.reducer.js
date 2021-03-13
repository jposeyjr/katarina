const priceListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRICE_LIST':
      return action.payload;
    case 'ADD_PRICE_LIST':
      return [...state, action.payload];
    case 'EDIT_PRICE_LIST':
      //goes through the total list of registry and only changes the one that matches
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case 'DELETE_PRICE_LIST':
      //goes through and keeps everything but the one that matches
      return state.filter((item) => item.id !== action.payload);
    case 'UNSET_PRICE_LIST':
      return [];
    default:
      return state;
  }
};

export default priceListReducer;
