import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                userProfile={props.userProfile}
                userStatus={props.userStatus}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </>
    );
};

export default Profile;
