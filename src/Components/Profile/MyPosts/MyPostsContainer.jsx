import MyPosts from "./MyPosts";
import { addPost, updateNewPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    const { postsInfo, newPostText } = state.profilePage;
    return { postsInfo, newPostText };
};

const dispatchObject = {
    addPost,
    updateNewPost,
};

export default connect(mapStateToProps, dispatchObject)(MyPosts);
