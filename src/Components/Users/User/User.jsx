import userPhoto from "../../../img/account.svg";
import { NavLink } from "react-router-dom";

import s from "./User.module.css";

const User = ({ user, followingInProgress, followUser, unfollowUser }) => {
    return (
        <div key={user.id} className={s.user}>
            <div className={s.userMain}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        src={user.photos.small || userPhoto}
                        alt="avatar"
                        className={s.avatar}
                    />
                </NavLink>

                <div className={s.userInfo}>
                    <div className={s.name}>{user.name}</div>
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            user.followed
                                ? unfollowUser(user.id)
                                : followUser(user.id);
                        }}
                        className={s.button}
                    >
                        {user.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
            </div>
            <div className={s.status}>
                {user.status || "There is no status"}
            </div>
        </div>
    );
};

export default User;
