import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import {
    getUserProfile,
    getUserStatus,
    updateStatus,
} from "../../redux/profile-reducer";
import withAuthRedirect from "../hoc/Redirect/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId =
            this.props.match.params.userId || this.props.authorizedUserId;

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.id,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
