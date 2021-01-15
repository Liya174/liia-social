import React from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    const { id, isAuth, login } = state.auth;
    return { id, isAuth, login };
};

const dispatchObject = {
    logout,
};

export default connect(mapStateToProps, dispatchObject)(HeaderContainer);
