import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog} key={props.usersDataElement.id.toString()}>
            <NavLink
                to={`/dialogs/${props.usersDataElement.id}`}
                className={s.dialogName}
                activeClassName={s.active}
            >
                <img
                    src={props.usersDataElement.avatarSrc}
                    className={s.avatar}
                    alt="avatar"
                />
                {props.usersDataElement.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
