import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const { postsInfo, newPostText } = props.profilePage;
    return (
        <>
            <ProfileInfo />
            <MyPosts
                postsInfo={postsInfo}
                newPostText={newPostText}
                dispatch={props.dispatch}
            />
        </>
    );
};

export default Profile;
