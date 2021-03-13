const priceListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRICELIST':
      return action.payload;
    case 'ADD_PRICELIST':
      return [...state, action.payload];
    case 'EDIT_PRICELIST':
      //goes through the total list of registry and only changes the one that matches
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case 'DELETE_PRICELIST':
      //goes through and keeps everything but the one that matches
      return state.filter((item) => item.id !== action.payload);
    case 'UNSET_PRICELIST':
      return [];
    default:
      return state;
  }
};

export default priceListReducer;
