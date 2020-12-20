import { login, logout } from "../../redux/auth-reducer";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import s from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <div className={s.loginPage}>
            <h1 className={s.subtitle}>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
