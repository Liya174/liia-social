import s from "./Message.module.css";
import userPhoto from "../../../../img/account.svg";

const Message = ({ text, id, author }) => {
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
                    src={
                        author === "user"
                            ? "https://images.unsplash.com/photo-1586710743198-3619668ad789?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            : userPhoto
                    }
                    alt="avatar"
                />
                {text}
            </div>
        </>
    );
};

export default Message;
