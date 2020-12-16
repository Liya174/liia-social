import Dialogs from "./Dialogs";
import { onAddMessage, onMessageChange } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    const { dialogsPage } = state;
    return { dialogsPage };
};

const dispatchObject = {
    onAddMessage,
    onMessageChange,
};

export default connect(mapStateToProps, dispatchObject)(Dialogs);
