import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ userProfile, userStatus, updateStatus }) => {
    return (
        <>
            <ProfileInfo
                userProfile={userProfile}
                userStatus={userStatus}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </>
    );
};

export default Profile;
