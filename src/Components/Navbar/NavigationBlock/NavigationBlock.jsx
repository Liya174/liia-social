import s from "./NavigationBlock.module.css";
import { NavLink } from "react-router-dom";

const NavigationBlock = (props) => {
    return (
        <div className={s.navigationBlock}>
            {props.navItems.map(({ name, href, id }) => (
                <div className={s.item} key={id}>
                    <NavLink
                        className={`${s.link}`}
                        activeClassName={s.active}
                        to={href}
                    >
                        {name}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default NavigationBlock;
