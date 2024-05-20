import axios from "axios"
import { FOLLOW_USER, UNFOLLOW_USER } from "./ActionType"


export const updateUser=(id,formdata)=>async(dispatch)=>{

}

export const followUser=(id,data)=>async(dispatch)=>{
    try {
        const response = await axios.put(`http://localhost:5000/user/follow/${id}`,data)
        dispatch({type:FOLLOW_USER})
    } catch (error) {
        
    }
}

export const unfollowUser=(id,data)=>async(dispatch)=>{
    try {
        const response = await axios.put(`http://localhost:5000/user/unFollow/${id}`,data)
        dispatch({type:UNFOLLOW_USER,data:id})
    } catch (error) {
        
    }
}