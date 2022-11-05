import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";
import Axios from 'axios';
import { baseUrl } from "../utils";

const errorMessage = (error)=> {
  const message = error.response && error.response.data.message ? error.response.data.message : error.message;
  return message;
}

export const signin = (email, password)=> async(dispatch)=> {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
  try {
    const {data} = await Axios.post(baseUrl + '/api/users/signin', {email, password});
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: USER_SIGNIN_FAIL, payload: errorMessage(error)})
  }
}