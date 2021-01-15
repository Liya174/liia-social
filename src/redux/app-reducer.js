import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
const ADD_GLOBAL_ERROR = "api/ADD_GLOBAL_ERROR";
const DELETE_GLOBAL_ERROR = "api/DELETE_GLOBAL_ERROR";

let initialState = {
    initialized: false,
    globalError: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        case ADD_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.globalError,
            };
        case DELETE_GLOBAL_ERROR:
            return {
                ...state,
                globalError: null,
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
});

export const addGlobalError = (globalError) => ({
    type: ADD_GLOBAL_ERROR,
    globalError,
});

export const deleteGlobalError = () => ({
    type: DELETE_GLOBAL_ERROR,
});

export const initializeApp = () => async (dispatch) => {
    await dispatch(authMe());
    dispatch(initializedSuccess());
};
export const gotGlobalError = (error) => async (dispatch) => {
    dispatch(addGlobalError(error.message));
    setTimeout(() => dispatch(deleteGlobalError()), 3000);
};

export default appReducer;
