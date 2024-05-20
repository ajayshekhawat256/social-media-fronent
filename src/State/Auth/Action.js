import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./ActionType"
import axios from 'axios';

export const logIn = (formData)=>async(dispatch)=>{
    dispatch({type:AUTH_REQUEST});
    try {
        const {data}=await axios.post('http://localhost:5000/auth/login',formData);
        dispatch({type:AUTH_SUCCESS,data:data})
    } catch (error) {
        dispatch({type:AUTH_FAILURE})
    }
}

export const signUp=(formData)=>async(dispatch)=>{
    dispatch({type:AUTH_REQUEST});
    try {
        const {data}=await axios.post('http://localhost:5000/auth/register',formData);
        dispatch({type:AUTH_SUCCESS,data:data})
    } catch (error) {
        dispatch({type:AUTH_FAILURE})
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:AUTH_SUCCESS})
}