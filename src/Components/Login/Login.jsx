import { login, logout } from "../../redux/auth-reducer";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import s from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = ({ isAuth, login, captchaUrl, ...props }) => {
    if (isAuth) {
        return <Redirect to={"/profile"} />;
    }

    const onSubmit = (formData) => {
        let { email, password, rememberMe, captcha } = formData;
        login(email, password, rememberMe, captcha);
    };

    return (
        <div className={s.loginPage}>
            <h1 className={s.subtitle}>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, logout })(Login);
