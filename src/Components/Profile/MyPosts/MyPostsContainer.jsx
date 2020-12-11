import Post from "../Post/Post";
import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    const { postsInfo, newPostText } = props.store.getState().profilePage;
    const { dispatch } = props.store;

    const addPost = () => {
        dispatch(addPostActionCreator());
    };

    const updateNewPost = (event) => {
        dispatch(updateNewPostTextActionCreator(event.target.value));
    };

    return (
        <MyPosts
            postsInfo={postsInfo}
            newPostText={newPostText}
            addPost={addPost}
            updateNewPost={updateNewPost}
        />
    );
};

export default MyPostsContainer;
