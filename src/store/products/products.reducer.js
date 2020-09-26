import { BUY_PRODUCT } from './products.types';

const initialState = {
  numberOfProducts: 10
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT: return {
      ...state,
      numberOfProducts: state.numberOfProducts - 1,
    }
    default: return state;
  }
};

export default productsReducer;