import s from "./MessageBlock.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const MessagesBlock = (props) => {
    const { messages, newMessageText, dispatch } = props;
    return (
        <>
            {messages.map(({ text, id, author }) => (
                <Message
                    text={text}
                    id={id}
                    author={author}
                    key={id.toString()}
                />
            ))}
            <NewMessage newMessageText={newMessageText} dispatch={dispatch} />
        </>
    );
};

export default MessagesBlock;
