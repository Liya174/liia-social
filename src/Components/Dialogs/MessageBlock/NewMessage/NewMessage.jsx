import s from "./NewMessage.module.css";
import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../../redux/dialogs-reducer";

const NewMessage = (props) => {
    const { newMessageText, dispatch } = props;

    const addMessage = () => {
        dispatch(addMessageActionCreator());
    };

    const updateNewMessageText = (event) => {
        const text = event.target.value;
        dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={s.newMessage}>
            <textarea
                onChange={(event) => updateNewMessageText(event)}
                className={s.textarea}
                placeholder="Write new message here"
                value={newMessageText}
            ></textarea>
            <button onClick={addMessage} className={s.addButton}>
                Send message
            </button>
        </div>
    );
};

export default NewMessage;
