import s from "./NewMessage.module.css";
import React from "react";

const NewMessage = (props) => {
    let messageBox = React.createRef();
    const { newMessageText, dispatch } = props;

    return (
        <div className={s.newMessage}>
            <textarea
                onChange={(event) =>
                    dispatch({
                        type: "UPDATE-NEW-MESSAGE-TEXT",
                        newMessageText: event.target.value,
                    })
                }
                ref={messageBox}
                className={s.textarea}
                placeholder="Write new message here"
                value={newMessageText}
            ></textarea>
            <button
                onClick={() => dispatch({ type: "ADD-MESSAGE" })}
                className={s.addButton}
            >
                Send message
            </button>
        </div>
    );
};

export default NewMessage;
