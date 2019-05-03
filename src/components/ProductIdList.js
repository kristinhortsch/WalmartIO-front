import React from 'react';
import PropTypes from 'prop-types';
import { fetchOldProduct } from '../services/walmartAPI';

function ProductIdList({ productIds }) {
  const products = productIds.map(id => {
    return <li>{id}</li>
  });
  return (
    <>
      <ul>
        {products}
      </ul>
    </>
  );
}

ProductIdList.propTypes = {
  productIds: PropTypes.array
}

export default ProductIdList;