import { connect } from "react-redux";
import React from "react";
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    unfollowUser,
    followUser,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../hoc/Redirect/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
    };

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            followUser,
            unfollowUser,
            currentPage,
            followingInProgress,
        } = this.props;

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={users}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    followingInProgress={followingInProgress}
                    currentPage={currentPage}
                    onPageChanged={this.onPageChanged}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    } = state.usersPage;
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    };
};

const dispatchObject = {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    unfollowUser,
    followUser,
};

export default compose(
    connect(mapStateToProps, dispatchObject),
    withAuthRedirect
)(UsersContainer);
