import { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusHooks = ({ userStatus, updateStatus, ...props }) => {
    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(userStatus);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusText);
    };

    const onChangeStatus = (event) => {
        setStatusText(event.target.value);
    };

    return (
        <div className={s.statusBlock}>
            {!editMode && (
                <div className={s.statusText}>
                    <span onDoubleClick={activateEditMode}>
                        {userStatus ? userStatus : "No status"}
                    </span>
                </div>
            )}
            {editMode && (
                <div className={s.editStatus}>
                    <input
                        className={s.statusInput}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onChangeStatus}
                        value={statusText}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatusHooks;
