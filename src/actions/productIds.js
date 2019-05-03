import { getWalmartProductIds } from '../services/walmartAPI.js';

export const FETCH_PRODUCT_IDS = 'FETCH_PRODUCT_IDS';
export const fetchProductIds = () => ({
  type: FETCH_PRODUCT_IDS,
  payload: getWalmartProductIds()
});
