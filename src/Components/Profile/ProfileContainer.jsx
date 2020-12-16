import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${"2"}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile} />;
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
});

// const dispatchObject = { setUserProfile };

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
