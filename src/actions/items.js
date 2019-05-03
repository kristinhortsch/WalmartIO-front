import { getOldProduct } from '../services/walmartAPI.js';

export const FETCH_OLD_PRODUCT = 'FETCH_OLD_PRODUCT';
export const fetchOldProduct = id => ({
  type: FETCH_OLD_PRODUCT,
  payload: getOldProduct(id)
});
