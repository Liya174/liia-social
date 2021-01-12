import s from "./Post.module.css";

const Post = ({ postInfo, userAvatar }) => {
    const { message, likeCount } = postInfo;
    return (
        <div className={s.postBlock}>
            <div className={s.post}>
                <img className={s.avatar} src={userAvatar} alt="avatar" />
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
