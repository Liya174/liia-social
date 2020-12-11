import avatar01 from "./../img/avatars/avatar_01.jpg";
import avatar02 from "./../img/avatars/avatar_02.jpg";
import avatar03 from "./../img/avatars/avatar_03.jpg";
import avatar04 from "./../img/avatars/avatar_04.jpg";
import avatar05 from "./../img/avatars/avatar_05.jpg";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [
        { id: 1, text: "hi", author: "user" },
        { id: 2, text: "hey you", author: "friend" },
        { id: 3, text: "how are you?", author: "user" },
        { id: 4, text: "ok, and you?", author: "friend" },
        { id: 5, text: "ok, bye", author: "user" },
        { id: 6, text: "gb", author: "friend" },
    ],
    newMessageText: "",
    usersData: [
        {
            id: 1,
            name: "Konstantino",
            avatarSrc: avatar01,
        },
        {
            id: 2,
            name: "Farida",
            avatarSrc: avatar02,
        },
        {
            id: 3,
            name: "Hellen",
            avatarSrc: avatar03,
        },
        {
            id: 4,
            name: "Dina",
            avatarSrc: avatar05,
        },
        {
            id: 5,
            name: "Nicola",
            avatarSrc: avatar04,
        },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText,
                author: "user",
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
});

export default dialogsReducer;
