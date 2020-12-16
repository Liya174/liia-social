import s from "./Navbar.module.css";

import NavigationBlock from "./NavigationBlock/NavigationBlock";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <NavigationBlock navItems={props.navbarPage.navItems} />
            <FriendsBlock friendsList={props.navbarPage.friendsList} />
        </div>
    );
};

export default Navbar;
