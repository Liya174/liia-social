const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsInfo: [
        { id: 1, message: "Hi. How are you?", likeCount: 1 },
        { id: 2, message: "It is my post", likeCount: 10 },
        { id: 3, message: "Two", likeCount: 30 },
        { id: 4, message: "One", likeCount: 6 },
    ],
    newPostText: "",
    userProfile: null,
};

// const myProfile = {
//     aboutMe: "Pugs like hugs",
//     contacts: {
//         facebook: null,
//         website: null,
//         vk: null,
//         twitter: null,
//         instagram: null,
//         youtube: null,
//         github: null,
//         mainLink: null,
//     },
//     lookingForAJob: true,
//     lookingForAJobDescription: "of course",
//     fullName: "Little sweetie pug",
//     userId: 100,
//     photos: {
//         small: "",
//         large: "",
//     },
// };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsInfo.length + 1,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                newPostText: "",
                postsInfo: [...state.postsInfo, newPost],
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };

        default:
            return state;
    }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    userProfile: profile,
});

export default profileReducer;
