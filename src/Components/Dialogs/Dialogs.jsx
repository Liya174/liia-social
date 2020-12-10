import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageBlock from "./MessageBlock/MessageBlock";

const Dialogs = (props) => {
    const { usersData, messages, newMessageText } = props.dialogsPage;

    const usersDataElements = usersData.map(({ name, id, avatarSrc }) => (
        <DialogItem
            name={name}
            id={id}
            avatarSrc={avatarSrc}
            key={id.toString()}
        />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{usersDataElements}</div>
            <div className={s.messages}>
                <MessageBlock
                    messages={messages}
                    newMessageText={newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
};

export default Dialogs;
