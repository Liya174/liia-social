import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            follow,
            unfollow,
            currentPage,
        } = this.props;

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={users}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    follow={follow}
                    unfollow={unfollow}
                    currentPage={currentPage}
                    onPageChanged={this.onPageChanged}
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
    } = state.usersPage;
    return { users, pageSize, totalUsersCount, currentPage, isFetching };
};

const dispatchObject = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
};

export default connect(mapStateToProps, dispatchObject)(UsersContainer);
