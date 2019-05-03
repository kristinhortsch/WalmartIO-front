import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductIds } from '../selectors/productIds';
import { getOldProducts, getFilteredProducts } from '../selectors/items';
import { fetchProductIds } from '../actions/productIds';
import { updateSearchTerm } from '../actions/searchTerm';
import { fetchOldProduct, addFilteredProduct } from '../actions/items';
import UserInput from '../components/UserInput';
import ProductIdList from '../components/ProductIdList';

class ProductIds extends PureComponent {
  static propTypes = {
    productIds: PropTypes.array.isRequired,
    filteredProducts: PropTypes.array,
    fetch: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    oldProducts: PropTypes.array,
    onClick: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  
  // componentDidUpdate(prevProps) {
  //   if(prevProps.offset !== this.props.offset) {
  //     return this.props.fetch(this.props.offset);
  //   }
  // }

  render() {
    return (
      <>
        <UserInput 
          searchTerm={this.props.searchTerm} 
          onChange={this.props.onChange}
          onClick={this.props.onClick.bind(null, this.props.productIds)}
        />
        <ProductIdList
          productIds={this.props.productIds} 
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  productIds: getProductIds(state),
  oldProducts: getOldProducts(state),
  filteredProducts: getFilteredProducts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchProductIds());
  },
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value))
  },
  onClick(productIds, event) {
    event.preventDefault();
    productIds.map(async(id) => {
        const result = await dispatch(fetchOldProduct(id))
        if(result.shortDescription.includes(searchTerm)) {
          dispatch(addFilteredProduct(result))
        }
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIds);
