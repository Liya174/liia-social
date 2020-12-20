import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postsInfo: [
        { id: 1, message: "Hi. How are you?", likeCount: 1 },
        { id: 2, message: "It is my post", likeCount: 10 },
        { id: 3, message: "Two", likeCount: 30 },
        { id: 4, message: "One", likeCount: 6 },
    ],
    userProfile: null,
    userStatus: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsInfo.length + 1,
                message: action.post,
                likeCount: 0,
            };
            return {
                ...state,
                newPostText: "",
                postsInfo: [...state.postsInfo, newPost],
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus,
            };

        default:
            return state;
    }
};

export const addPost = (post) => ({ type: ADD_POST, post });

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    userProfile: profile,
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    userStatus: status,
});

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(setUserStatus(data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export default profileReducer;
