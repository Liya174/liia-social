import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id, avatarSrc }) => {
    return (
        <div className={s.dialog} key={id.toString()}>
            <NavLink
                to={`/dialogs/${id}`}
                className={s.dialogName}
                activeClassName={s.active}
            >
                <img src={avatarSrc} className={s.avatar} alt="avatar" />
                {name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
