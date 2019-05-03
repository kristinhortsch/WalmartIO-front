import { 
  FETCH_PRODUCT_IDS
} from '../actions/productIds';

const initialState = {
  productIds: [],
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCT_IDS:
      return {
        ...state,
        productIds: action.payload
      };
    default:
      return state;
  }
}
