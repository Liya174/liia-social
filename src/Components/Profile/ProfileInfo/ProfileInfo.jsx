import { useState } from "react";

import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../img/account.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
    isOwner,
    userProfile,
    userStatus,
    updateStatus,
    saveUploadedPhoto,
}) => {
    const [editMode, setEditMode] = useState(false);

    if (!userProfile) {
        return <Preloader />;
    }

    const onMainImageSelected = (e) => {
        if (e.target.files.length) {
            saveUploadedPhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.informationBlock}>
                <div className={s.avatar}>
                    <img
                        className={s.avatarImage}
                        src={userProfile.photos.large || userPhoto}
                        alt="avatar"
                    />
                    {isOwner && (
                        <label className={s.avatarChange}>
                            Change the avatar
                            <input
                                className={s.avatarInputHidden}
                                type="file"
                                onChange={onMainImageSelected}
                            />
                        </label>
                    )}
                </div>
                {editMode ? (
                    <ProfileDataForm
                        profile={userProfile}
                        quitEditMode={() => setEditMode(false)}
                    />
                ) : (
                    <ProfileData
                        profile={userProfile}
                        isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
                )}
            </div>
            <ProfileStatusHooks
                userStatus={userStatus}
                updateStatus={updateStatus}
            />
        </div>
    );
};

export default ProfileInfo;
