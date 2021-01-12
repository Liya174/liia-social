import s from "./MyPosts.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { Element } from "../../common/FormsControls/FormsControls";

const maxLengthText = maxLength(20);

const Textarea = Element("textarea");

const MyPostsForm = (props) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="textarea"
                className={s.textarea}
                placeholder="Write new post here"
                validate={[required, maxLengthText]}
            />
            <button className={s.addButton}>Add new post</button>
        </form>
    );
};

export default reduxForm({ form: "newPost" })(MyPostsForm);
