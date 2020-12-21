import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    avatar: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                avatar: action.avatar,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setUserProfile = (avatar) => ({
    type: SET_USER_PROFILE,
    avatar,
});

export const authMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(toggleIsFetching(false));
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(authMe());
        } else {
            let message =
                data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
