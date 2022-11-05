import { PRODUCT_CATEGORY_LIST_FAIL, PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state={products: []}, action)=> {
  switch(action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export const productCategoryListReducer = (state={categories: []}, action)=> {
  switch(action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return {loading: false, categories: action.payload};
    case PRODUCT_CATEGORY_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}