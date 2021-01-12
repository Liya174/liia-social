import s from "./MyPosts.module.css";
import Post from "./../Post/Post";
import React from "react";
import MyPostsForm from "./MyPostsForm";
import userPhoto from "../../../img/account.svg";

const MyPosts = ({ postsInfo, userProfile, addPost }) => {
    let postElements = postsInfo.map((postInfo) => (
        <Post
            postInfo={postInfo}
            userAvatar={userProfile ? userProfile.photos.small : userPhoto}
            key={postInfo.id}
        />
    ));

    const onAddPost = (formData) => {
        addPost(formData.textarea);
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
