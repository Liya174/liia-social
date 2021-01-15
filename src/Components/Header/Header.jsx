import s from "./Header.module.css";
import logo from "./../../logo.svg";
import { NavLink } from "react-router-dom";
import nonAvatar from "../../img/account.svg";

const Header = ({ login, isAuth, logout, ...props }) => {
    const onLogoutClick = () => {
        return logout();
    };

    return (
        <header className={s.header}>
            <a href="/">
                <img className={s.logo} src={logo} alt="logo" />
            </a>
            <div className={s.loginBlock}>
                {isAuth ? (
                    <>
                        <img
                            className={s.userAvatar}
                            src={props.avatar ? props.avatar : nonAvatar}
                            alt="avatar"
                        />
                        <p className={s.userName}>{login}</p>
                        <button onClick={onLogoutClick} className={s.logout}>
                            LogOut
                        </button>
                    </>
                ) : (
                    <NavLink to={"./login"} className={s.loginLink}>
                        LogIn
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
