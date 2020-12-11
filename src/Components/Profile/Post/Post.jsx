import s from "./Post.module.css";

const Post = (props) => {
    const { message, likeCount } = props.postInfo;
    return (
        <div className={s.postBlock}>
            <div className={s.post}>
                <img
                    className={s.avatar}
                    src="https://images.unsplash.com/photo-1586710743198-3619668ad789?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    alt="avatar"
                />
                <p className={s.text}>{message}</p>
            </div>
            <div className={s.likes}>
                <button className={s.button}></button>
                {likeCount}
            </div>
        </div>
    );
};

export default Post;
