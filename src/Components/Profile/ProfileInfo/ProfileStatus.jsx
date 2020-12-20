import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusText: "",
            editMode: false,
        };
    }

    componentDidMount() {
        this.setState({ statusText: this.props.userStatus });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.userStatus !== prevProps.userStatus) {
            this.setState({ statusText: this.props.userStatus });
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.statusText);
    };

    onChangeStatus = (event) => {
        let newStatusText = event.target.value;
        this.setState({ statusText: newStatusText });
    };

    render() {
        return (
            <div className={s.statusBlock}>
                {!this.state.editMode && (
                    <div className={s.statusText}>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.userStatus
                                ? this.props.userStatus
                                : "No status"}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div className={s.editStatus}>
                        <input
                            className={s.statusInput}
                            autoFocus={true}
                            maxLength={300}
                            value={this.state.statusText}
                            onChange={this.onChangeStatus}
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
