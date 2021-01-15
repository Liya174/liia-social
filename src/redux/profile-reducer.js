import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

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

        case DELETE_POST:
            return {
                ...state,
                postsInfo: state.postsInfo.filter(
                    (post) => post.id !== action.postId
                ),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos },
            };

        default:
            return state;
    }
};

export const addPost = (post) => ({ type: ADD_POST, post });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    userProfile: profile,
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    userStatus: status,
});
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos: photos,
});
export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const saveUploadedPhoto = (uploadedPhoto) => async (dispatch) => {
    const data = await profileAPI.updatePhoto(uploadedPhoto);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = (profileInfo) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.updateProfileInfo(profileInfo);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const message =
            data.messages.length > 0 ? data.messages[0] : "Some error";
        const messageTextArray = message.split(" ");
        const errorBlock = messageTextArray.pop().match(/([A-Za-z]+)\)$/)[1];
        const errorBlockSmallFirstLetter =
            errorBlock.charAt(0).toLowerCase() + errorBlock.slice(1);
        const errorMessage = messageTextArray.join(" ");
        if (message.includes("Contact")) {
            dispatch(
                stopSubmit("profileInfo", {
                    contacts: {
                        [errorBlockSmallFirstLetter]: errorMessage,
                    },
                })
            );
            return Promise.reject(message);
        } else {
            dispatch(stopSubmit("profileInfo", { _error: message }));
            return Promise.reject(message);
        }
    }
};

export default profileReducer;
