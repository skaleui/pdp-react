import productApi from '../api/mockProductApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadProductsSuccess(products){
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProductSuccess(product){
  return {type: types.LOAD_PRODUCT_SUCCESS, product};
}

export function loadProduct(id){
  return function(dispatch){
    return productApi.getProduct(id).then(product => {
      dispatch(beginAjaxCall());
      dispatch(loadProductSuccess(product));
    }).catch(error => {
    throw(error);
    });
  };
}

export function loadProducts() {

  return function(dispatch) {
    return productApi.getAllProducts().then(products => {
      dispatch(beginAjaxCall());
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
