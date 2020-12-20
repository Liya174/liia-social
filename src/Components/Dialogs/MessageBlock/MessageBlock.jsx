import s from "./MessageBlock.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const MessagesBlock = (props) => {
    const addMessage = (formData) => {
        props.onAddMessage(formData.textarea);
    };

    return (
        <>
            {props.messages.map(({ text, id, author }) => (
                <Message
                    text={text}
                    id={id}
                    author={author}
                    key={id.toString()}
                />
            ))}
            <NewMessage onSubmit={addMessage} />
        </>
    );
};

export default MessagesBlock;
