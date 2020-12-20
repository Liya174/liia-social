import userPhoto from "../../../img/account.svg";
import { NavLink } from "react-router-dom";

import s from "./User.module.css";

const User = (props) => {
    const { users, followingInProgress, followUser, unfollowUser } = props;

    return (
        <>
            {users.map((user) => (
                <div key={user.id} className={s.user}>
                    <div className={s.userAvatar}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                src={user.photos.small || userPhoto}
                                alt="avatar"
                                className={s.avatar}
                            />
                        </NavLink>
                        {user.followed ? (
                            <button
                                disabled={followingInProgress.some(
                                    (id) => id === user.id
                                )}
                                onClick={() => {
                                    unfollowUser(user.id);
                                }}
                                className={s.button}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some(
                                    (id) => id === user.id
                                )}
                                onClick={() => {
                                    followUser(user.id);
                                }}
                                className={s.button}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.general}>
                            <div className={s.name}>{user.name}</div>
                            <div className={s.status}>
                                {user.status || "There is no status"}
                            </div>
                        </div>
                        <div className={s.living}>
                            <div>{"here would be country"}</div>
                            <div>{"here would be city"}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default User;
