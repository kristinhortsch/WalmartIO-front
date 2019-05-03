import { 
  FETCH_PRODUCT_IDS
} from '../actions/productIds';

import { 
  UPDATE_SEARCH_TERM
} from '../actions/searchTerm';

import { 
  FETCH_OLD_PRODUCT,
  ADD_FILTERED_PRODUCT
} from '../actions/items';


const initialState = {
  productIds: [],
  searchTerm: '',
  oldProducts: [],
  filteredProducts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCT_IDS:
      return {
        ...state,
        productIds: action.payload
      };
    
    case FETCH_OLD_PRODUCT:
      return {
        ...state,
        oldProducts: [...action.payload]
      };

    case ADD_FILTERED_PRODUCT:
      return {
        ...state,
        filteredProducts: [...action.payload]
      };
    
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };

    default:
      return state;
  }
}
