import profileReducer, {
    addPost,
    deletePost,
    setUserProfile,
} from "./profile-reducer";

let state = {
    postsInfo: [
        { id: 1, message: "Hi. How are you?", likeCount: 1 },
        { id: 2, message: "It is my post", likeCount: 10 },
        { id: 3, message: "Two", likeCount: 30 },
        { id: 4, message: "One", likeCount: 6 },
    ],
    userProfile: null,
};

test("length of posts should be incremented", () => {
    // test data
    let action = addPost("lololo");
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsInfo.length).toBe(5);
});

test("message of new posts should be correct", () => {
    // test data
    let action = addPost("lololo");
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsInfo[4].message).toBe("lololo");
});

test("after deleting length of posts should be decremented", () => {
    // test data
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsInfo.length).toBe(3);
});

test("after deleting length of posts shouldn't be changed if id is incorrect", () => {
    // test data
    let action = deletePost(10000);
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsInfo.length).toBe(4);
});

test("user profile should be added to state", () => {
    // test data
    let newInto = { name: "Name", surname: "Surname", age: 100 };
    let action = setUserProfile(newInto);
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.userProfile).toBe(newInto);
});
