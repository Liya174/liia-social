import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={"/login"} />;
        return <Component {...props} />;
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export default withAuthRedirect;
