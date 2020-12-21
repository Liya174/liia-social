import { connect } from "react-redux";
import React from "react";
import {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    unfollowUser,
    followUser,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize, pageNumber);
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
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

const dispatchObject = {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    unfollowUser,
    followUser,
};

export default compose(connect(mapStateToProps, dispatchObject))(
    UsersContainer
);
