import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductIds } from '../selectors/productIds';
import { fetchProductIds } from '../actions/productIds';
import ProductIdList from '../components/ProductIdList';

class ProductIds extends PureComponent {
  static propTypes = {
    productIds: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
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
      <ProductIdList
        productIds={this.props.productIds} 
      />
      <h1>TEST</h1>
      </>
    );
  }
}

const mapStateToProps = state => ({
  productIds: getProductIds(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchProductIds());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIds);
