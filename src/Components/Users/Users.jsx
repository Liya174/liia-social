import s from "./Users.module.css";
import React from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    users,
    followingInProgress,
    followUser,
    unfollowUser,
    setCurrentPage,
    ...props
}) => {
    return (
        <div className={s.userPage}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                setCurrentPage={setCurrentPage}
            />
            <div className={s.users}>
                {users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        followUser={followUser}
                        unfollowUser={unfollowUser}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
