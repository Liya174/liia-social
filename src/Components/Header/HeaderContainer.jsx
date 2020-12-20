import React from "react";
import { connect } from "react-redux";

import { authMe, logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    const { isAuth, login, avatar } = state.auth;
    return { isAuth, login, avatar };
};

const dispatchObject = {
    authMe,
    logout,
};

export default connect(mapStateToProps, dispatchObject)(HeaderContainer);
