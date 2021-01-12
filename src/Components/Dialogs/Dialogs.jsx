import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageBlock from "./MessageBlock/MessageBlock";

import userPhoto from "../../img/account.svg";

const Dialogs = ({ dialogsPage, profilePage, onAddMessage, ...props }) => {
    const { usersData, messages } = dialogsPage;

    const usersDataElements = usersData.map((userData) => (
        <DialogItem usersDataElement={userData} key={userData.id.toString()} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{usersDataElements}</div>
            <div className={s.messages}>
                <MessageBlock
                    messages={messages}
                    userAvatar={
                        profilePage.userProfile
                            ? profilePage.userProfile.photos.small
                            : userPhoto
                    }
                    onAddMessage={onAddMessage}
                />
            </div>
        </div>
    );
};

export default Dialogs;
