import s from "./Message.module.css";
import userPhoto from "../../../../img/account.svg";

const Message = ({ text, id, author, userAvatar }) => {
    return (
        <>
            <div
                key={id.toString()}
                className={`${s.message} ${
                    author === "user" ? s.userAuthor : s.friendAuthor
                }`}
            >
                <img
                    className={`${s.avatar} ${
                        author === "user" ? "" : s.friendAvatar
                    }`}
                    src={author === "user" ? userAvatar : userPhoto}
                    alt="avatar"
                />
                {text}
            </div>
        </>
    );
};

export default Message;
