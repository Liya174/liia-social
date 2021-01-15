import s from "./ProfileInfo.module.css";
import cn from "classnames";

import save from "../../../img/save.svg";
import { Field, reduxForm } from "redux-form";
import { Element } from "../../common/FormsControls/FormsControls";
import { maxLength } from "../../../utils/validators/validators";

const Input = Element("input");
const Textarea = Element("textarea");

const maxLengthText = maxLength(150);

const ProfileDataForm = ({ contacts, handleSubmit, error }) => {
    return (
        <form className={s.userInfo} onSubmit={handleSubmit}>
            <div className={s.nameBlock}>
                <h3 className={s.name}>Full name: </h3>
                <Field
                    component={Input}
                    name="fullName"
                    className={`${s.nameInput} ${s.input}`}
                />
                <button className={s.editButton}>
                    <img className={s.editImage} src={save} alt="save" />
                </button>
            </div>
            <div className={s.jobStatus}>
                <p className={s.question}>Looking for a job:</p>
                <div className={s.checkboxLine}>
                    <Field
                        component={Input}
                        type="checkbox"
                        name={"lookingForAJob"}
                        className={s.checkbox}
                        validate={maxLengthText}
                    />
                    <label>Yes/No</label>
                </div>
            </div>
            <Field
                component={Textarea}
                placeholder={"My professional skills"}
                className={s.textarea}
                name={"lookingForAJobDescription"}
                validate={maxLengthText}
            ></Field>
            <div className={s.aboutMe}>
                <p className={s.question}>About me:</p>
            </div>
            <Field
                component={Textarea}
                placeholder={"About me"}
                className={s.textarea}
                name={"aboutMe"}
            ></Field>
            <p className={s.question}>Contacts:</p>
            <div className={`${s.userContacts} ${s.userContactsEdit}`}>
                {Object.keys(contacts).map((key) => (
                    <div className={s.userContactEdit} key={key}>
                        <span>{key}:</span>
                        <Field
                            component={Input}
                            placeholder={key}
                            name={"contacts." + key}
                            className={s.input}
                        />
                    </div>
                ))}
            </div>
            {/* <div className={`${s.errorField} ${error ? s.active : ""}`}>
                {error}
            </div> */}
            <div className={cn(s.errorField, { [s.active]: error })}>
                {error}
            </div>
        </form>
    );
};

export default reduxForm({ form: "profileInfo" })(ProfileDataForm);
