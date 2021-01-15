import s from "./NewMessage.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Element } from "../../../common/FormsControls/FormsControls";
import { maxLength, required } from "../../../../utils/validators/validators";

const maxLengthText = maxLength(100);

const Textarea = Element("textarea");

const NewMessage = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                className={s.textarea}
                name={"textarea"}
                placeholder="Write new message here"
                validate={[required, maxLengthText]}
            />
            <button className={s.addButton}>Send message</button>
        </form>
    );
};

export default reduxForm({ form: "addMessage" })(NewMessage);
