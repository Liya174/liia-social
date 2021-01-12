import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const MessagesBlock = ({ messages, userAvatar, onAddMessage }) => {
    const addMessage = (formData) => {
        onAddMessage(formData.textarea);
    };

    return (
        <>
            {messages.map(({ text, id, author }) => (
                <Message
                    text={text}
                    id={id}
                    author={author}
                    userAvatar={userAvatar}
                    key={id.toString()}
                />
            ))}
            <NewMessage onSubmit={addMessage} />
        </>
    );
};

export default MessagesBlock;
