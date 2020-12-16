import s from "./NewMessage.module.css";
import React from "react";

const NewMessage = (props) => {
    const addMessage = () => {
        props.onAddMessage();
    };

    const updateNewMessageText = (event) => {
        props.onMessageChange(event.target.value);
    };

    return (
        <div className={s.newMessage}>
            <textarea
                onChange={(event) => updateNewMessageText(event)}
                className={s.textarea}
                placeholder="Write new message here"
                value={props.newMessageText}
            ></textarea>
            <button onClick={addMessage} className={s.addButton}>
                Send message
            </button>
        </div>
    );
};

export default NewMessage;
