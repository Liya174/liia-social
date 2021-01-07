import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validators";
import { Element } from "../common/FormsControls/FormsControls";
import s from "./Login.module.css";

const Input = Element("input");

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <Field
                component={Input}
                className={s.input}
                placeholder="email"
                type="text"
                name={"email"}
                validate={[required]}
            />
            <Field
                component={Input}
                className={s.input}
                placeholder="password"
                type="password"
                name={"password"}
                validate={[required]}
            />
            <div className={s.checkboxLine}>
                <Field
                    component={Input}
                    className={s.checkbox}
                    type="checkbox"
                    name={"rememberMe"}
                />
                <label>Remember me</label>
            </div>
            <div className={`${s.errorField} ${error ? s.active : ""}`}>
                {error}
            </div>
            <button className={s.submit}>Login</button>
        </form>
    );
};

export default reduxForm({ form: "login" })(LoginForm);
