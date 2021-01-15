import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import {
    getUserProfile,
    getUserStatus,
    updateStatus,
    saveUploadedPhoto,
    saveProfile,
} from "../../redux/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                userId = this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.id,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateStatus,
        saveUploadedPhoto,
        saveProfile,
    }),
    withRouter
)(ProfileContainer);
