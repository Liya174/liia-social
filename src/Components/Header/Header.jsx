import s from "./Header.module.css";
import logo from "./../../logo.svg";
import { NavLink } from "react-router-dom";
import nonAvatar from "../../img/account.svg";

const Header = (props) => {
    const onLogoutClick = () => {
        return props.logout();
    };

    return (
        <header className={s.header}>
            <a href="#s">
                <img className={s.logo} src={logo} alt="logo" />
            </a>
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <>
                        <img
                            className={s.userAvatar}
                            src={props.avatar ? props.avatar : nonAvatar}
                            alt="avatar"
                        />
                        <p className={s.userName}>{props.login}</p>
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
