import { FOLLOW_USER, UNFOLLOW_USER } from "../User/ActionType";
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./ActionType";



const authReducer = (state = { authData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return { ...state, loading: true, error: false };
        case AUTH_SUCCESS:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            console.log(action.data, "this is authData")
            return { ...state, authData: action.data, loading: false, error: false };
        case AUTH_FAILURE:
            return { ...state, loading: true, error: true }
        case FOLLOW_USER:
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, following: [...state.authData.user.following, action.data] } } }
        case UNFOLLOW_USER:
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, following: [...state.authData.user.following.filter((personId) => personId !== action.data)] } } }
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, error: false, updoateLoading: false }
        default:
            return state;
    }
}
export default authReducer;