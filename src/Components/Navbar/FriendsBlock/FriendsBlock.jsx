import s from "./FriendsBlock.module.css";

const FriendsBlock = (props) => {
    return (
        <div>
            <h2 className={s.subtitle}>Friends</h2>
            <div className={s.friends}>
                {props.friendsList.map(({ id, name, avatarSrc }) => (
                    <div className={s.friend} key={id}>
                        <img
                            className={s.friendAvatar}
                            src={avatarSrc}
                            alt="avatar"
                        />
                        <p className={s.friendName}>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsBlock;
