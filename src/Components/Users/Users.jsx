import s from "./Users.module.css";
import React from "react";
import User from "./User/User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let currentPage = props.currentPage;

    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }

    const pageNumberButtons = pageNumbers.map((p) => (
        <button
            className={`${s.pageNumber} ${p === currentPage && s.selected}`}
            onClick={() => props.onPageChanged(p)}
            key={p}
        >
            {p}
        </button>
    ));

    return (
        <div className={s.userPage}>
            <h2 className={s.subtitle}>Users</h2>
            <div className={s.pageNumbers}>
                {pageNumberButtons}
                <div>...</div>
                <button
                    className={`${s.pageNumber} ${
                        pagesCount === currentPage && s.selected
                    }`}
                    onClick={() => props.onPageChanged(pagesCount)}
                    key={pagesCount}
                >
                    {pagesCount}
                </button>
            </div>
            <div>
                <User
                    users={props.users}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            </div>
        </div>
    );
};

export default Users;
