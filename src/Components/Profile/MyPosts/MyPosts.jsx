import s from "./MyPosts.module.css";
import Post from "./../Post/Post";
import React from "react";
import MyPostsForm from "./MyPostsForm";

const MyPosts = (props) => {
    let postElements = props.postsInfo.map((postInfo) => (
        <Post postInfo={postInfo} key={postInfo.id} />
    ));

    const onAddPost = (formData) => {
        props.addPost(formData.textarea);
    };

    return (
        <div className={s.myPosts}>
            <h2 className={s.subtitle}>My posts</h2>
            <MyPostsForm onSubmit={onAddPost} />
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
