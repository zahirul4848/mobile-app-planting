import { PRODUCT_CATEGORY_LIST_FAIL, PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import Axios from 'axios';
import { baseUrl } from "../utils";

const errorMessage = (error)=> {
  const message = error.response && error.response.data.message ? error.response.data.message : error.message;
  return message;
}

export const listProduct = ({})=> async(dispatch)=> {
  dispatch({type: PRODUCT_LIST_REQUEST});
  try {
    const {data} = await Axios.get(baseUrl + '/api/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data.products});
  } catch (error) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: errorMessage(error)})
  }
}

export const listProductCategory = ()=> async(dispatch)=> {
  dispatch({type: PRODUCT_CATEGORY_LIST_REQUEST});
  try {
    const {data} = await Axios.get(`${baseUrl}/api/products/categories`);
    dispatch({type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: PRODUCT_CATEGORY_LIST_FAIL, payload: errorMessage(error)});
  }
}