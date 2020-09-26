import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Store
import { buyProduct } from '../../../../store/products/products.actions';

const ComponentWithHooks = (props) => {
  const numberOfProducts = useSelector(state => state.numberOfProducts);
  const dispatch = useDispatch()
  return (
    <>
      <h2>Number of Products - {numberOfProducts}</h2>
      <button onClick={() => dispatch(buyProduct())}>Buy Cake</button>
    </>
  )
};

export default ComponentWithHooks;
