import avatar01 from "./../img/avatars/avatar_01.jpg";
import avatar03 from "./../img/avatars/avatar_03.jpg";
import avatar05 from "./../img/avatars/avatar_05.jpg";

let initialState = {
    friendsList: [
        { id: 1, name: "Konstantino", avatarSrc: avatar01 },
        { id: 2, name: "Hellen", avatarSrc: avatar03 },
        { id: 3, name: "Dina", avatarSrc: avatar05 },
    ],
    navItems: [
        { name: "Profile", href: "/profile", id: 0 },
        { name: "Messages", href: "/dialogs", id: 1 },
        { name: "News", href: "/news", id: 2 },
        { name: "Music", href: "/music", id: 3 },
        { name: "Users", href: "/users", id: 4 },
        { name: "Settings", href: "/settings", id: 5 },
    ],
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;
