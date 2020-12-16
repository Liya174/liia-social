import s from "./MyPosts.module.css";
import Post from "./../Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postElements = props.postsInfo.map((postInfo) => (
        <Post postInfo={postInfo} key={postInfo.id} />
    ));

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (event) => {
        const text = event.target.value;
        props.updateNewPost(text);
    };

    return (
        <div className={s.myPosts}>
            <h2 className={s.subtitle}>My posts</h2>

            <div className={s.newPost}>
                <textarea
                    onChange={(event) => onPostChange(event)}
                    className={s.textarea}
                    placeholder="Write new post here"
                    required
                    value={props.newPostText}
                />
                <button onClick={onAddPost} className={s.addButton}>
                    Add new post
                </button>
            </div>

            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
