import s from "./Navbar.module.css";

import NavigationBlock from "./NavigationBlock/NavigationBlock";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const navItems = [
    { name: "Profile", href: "/profile", id: 0 },
    { name: "Messages", href: "/dialogs", id: 1 },
    { name: "News", href: "/news", id: 2 },
    { name: "Music", href: "/music", id: 3 },
    { name: "Settings", href: "/settings", id: 4 },
];

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavigationBlock navItems={navItems} />
            <FriendsBlock friendsList={props.navbarPage.friendsList} />
        </nav>
    );
};

export default Navbar;
