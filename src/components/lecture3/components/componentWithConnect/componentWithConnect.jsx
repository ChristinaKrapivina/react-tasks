import React from 'react';
import { connect } from 'react-redux';
// Store
import { buyProduct } from '../../../../store/products/products.actions';

const ComponentWithHooks = (props) => {
  return (
    <>
      <h2>Number of Products - {props.numberOfProducts}</h2>
      <button onClick={props.buyProduct}>Buy Cake</button>
    </>
  )
};

const mapStateToProps = state => {
  return {
    numberOfProducts: state.numberOfProducts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    buyProduct: () => dispatch(buyProduct())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithHooks);
