import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({
    isOwner,
    userProfile,
    userStatus,
    updateStatus,
    saveUploadedPhoto,
}) => {
    return (
        <>
            <ProfileInfo
                isOwner={isOwner}
                userProfile={userProfile}
                userStatus={userStatus}
                updateStatus={updateStatus}
                saveUploadedPhoto={saveUploadedPhoto}
            />
            <MyPostsContainer />
        </>
    );
};

export default Profile;
