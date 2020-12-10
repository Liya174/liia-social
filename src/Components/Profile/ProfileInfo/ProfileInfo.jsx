import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={s.profileInfo}>
            <div className={s.background}></div>

            <div className={s.informationBlock}>
                <img 
                className={s.avatar}
                src="https://images.unsplash.com/photo-1586710743198-3619668ad789?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" 
                alt="avatar"/>
                decription
            </div>
        </div>
    )
}

export default ProfileInfo;