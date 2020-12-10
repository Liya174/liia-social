import s from "./MyPosts.module.css";
import Post from "./../Post/Post";
import React from "react";

const MyPosts = (props) => {
    const { postsInfo, newPostText, dispatch } = props;
    let postElements = postsInfo.map(({ message, likeCount, id }) => (
        <Post message={message} likeCount={likeCount} key={id} />
    ));

    let newPostElement = React.createRef();

    return (
        <div className={s.myPosts}>
            <h2 className={s.subtitle}>My posts</h2>

            <div className={s.newPost}>
                <textarea
                    onChange={(event) =>
                        dispatch({
                            type: "UPDATE-NEW-POST-TEXT",
                            newPostText: event.target.value,
                        })
                    }
                    ref={newPostElement}
                    className={s.textarea}
                    placeholder="Write new post here"
                    required
                    value={newPostText}
                />
                <button
                    onClick={() => dispatch({ type: "ADD-POST" })}
                    className={s.addButton}
                >
                    Add new post
                </button>
            </div>

            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
