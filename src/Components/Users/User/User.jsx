import s from "./User.module.css";
import userPhoto from "../../../img/account.svg";
import { NavLink } from "react-router-dom";

const User = (props) => {
    const { users, follow, unfollow } = props;

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
                                onClick={() => unfollow(user.id)}
                                className={s.button}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => follow(user.id)}
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
