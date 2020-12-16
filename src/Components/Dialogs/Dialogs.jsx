import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageBlock from "./MessageBlock/MessageBlock";

const Dialogs = (props) => {
    const { usersData, messages, newMessageText } = props.dialogsPage;

    const usersDataElements = usersData.map((userData) => (
        <DialogItem usersDataElement={userData} key={userData.id.toString()} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{usersDataElements}</div>
            <div className={s.messages}>
                <MessageBlock
                    messages={messages}
                    newMessageText={newMessageText}
                    onMessageChange={props.onMessageChange}
                    onAddMessage={props.onAddMessage}
                />
            </div>
        </div>
    );
};

export default Dialogs;
