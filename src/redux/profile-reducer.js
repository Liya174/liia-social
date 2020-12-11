const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    postsInfo: [
        { id: 1, message: "Hi. How are you?", likeCount: 1 },
        { id: 2, message: "It is my post", likeCount: 10 },
        { id: 3, message: "Two", likeCount: 30 },
        { id: 4, message: "One", likeCount: 6 },
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsInfo.length + 1,
                message: state.newPostText,
                likeCount: 0,
            };
            state.postsInfo.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
});

export default profileReducer;
