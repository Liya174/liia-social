import Dialogs from "./Dialogs";
import { onAddMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import withAuthRedirect from "../hoc/Redirect/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage };
};

const dispatchObject = {
    onAddMessage,
};

export default compose(
    connect(mapStateToProps, dispatchObject),
    withAuthRedirect
)(Dialogs);
