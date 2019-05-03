import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductIds } from '../selectors/productIds';
import { getOldProducts } from '../selectors/items';
import { fetchProductIds } from '../actions/productIds';
import { updateSearchTerm } from '../actions/searchTerm';
import { fetchOldProduct } from '../actions/items';
import UserInput from '../components/UserInput';
import ProductIdList from '../components/ProductIdList';

class ProductIds extends PureComponent {
  static propTypes = {
    productIds: PropTypes.array.isRequired,
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
  oldProducts: getOldProducts(state)
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
    console.log('hi')

    productIds.map(id => {
      return dispatch(fetchOldProduct(id))
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIds);
