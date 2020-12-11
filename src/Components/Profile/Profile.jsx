import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // const { postsInfo, newPostText } = props.store.state.profilePage;
    return (
        <>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </>
    );
};

export default Profile;
