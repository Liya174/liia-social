import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "auth/SET_USER_PROFILE";
const SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS";
const DELETE_CAPTCHA_URL = "auth/DELETE_CAPTCHA_URL";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null, //if null, captcha is not required
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

        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };

        case DELETE_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: null,
            };

        default:
            return state;
    }
};

//actions

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
export const setCaptchaUrlSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    captchaUrl,
});
export const deleteCaptchaUrl = () => ({
    type: DELETE_CAPTCHA_URL,
});

//thunks
export const authMe = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(toggleIsFetching(false));
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (
    dispatch
) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(authMe());
        dispatch(deleteCaptchaUrl());
    } else if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    } else {
        let message =
            data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha();
    const captcha = data.url;
    dispatch(setCaptchaUrlSuccess(captcha));
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
