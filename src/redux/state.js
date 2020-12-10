import avatar01 from "./../img/avatars/avatar_01.jpg";
import avatar02 from "./../img/avatars/avatar_02.jpg";
import avatar03 from "./../img/avatars/avatar_03.jpg";
import avatar04 from "./../img/avatars/avatar_04.jpg";
import avatar05 from "./../img/avatars/avatar_05.jpg";

let store = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            postsInfo: [
                { id: 1, message: "Hi. How are you?", likeCount: 1 },
                { id: 2, message: "It is my post", likeCount: 10 },
                { id: 3, message: "Two", likeCount: 30 },
                { id: 4, message: "One", likeCount: 6 },
            ],
            newPostText: "",
        },

        navbarPage: {
            friendsList: [
                { id: 1, name: "Konstantino", avatarSrc: avatar01 },
                { id: 2, name: "Hellen", avatarSrc: avatar03 },
                { id: 3, name: "Dina", avatarSrc: avatar05 },
            ],
        },
    },
    _callSubscriber() {
        console.log("it is empty function yet");
    },

    getState() {
        let state = this._state;
        return state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель (паттерн)
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: this._state.profilePage.postsInfo.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.postsInfo.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this);
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                text: this._state.dialogsPage.newMessageText,
                author: "user",
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this);
        }
    },
};

export default store;
