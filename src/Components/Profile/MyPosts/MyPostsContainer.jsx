import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    const { postsInfo, newPostText, userProfile } = state.profilePage;
    return { postsInfo, newPostText, userProfile };
};

const dispatchObject = { addPost };

export default connect(mapStateToProps, dispatchObject)(MyPosts);
