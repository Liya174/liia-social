import { usersAPI, followAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET-USERS";
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "user/SET-TOTAL-USER-PAGE";
const TOGGLE_IS_FETCHING = "user/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "user/TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

//REDUCER -------------------------------------------------------------------------------------------------

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {
                    followed: true,
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {
                    followed: false,
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: +action.totalUsersCount,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };

        default:
            return state;
    }
};

//ACTIONS -------------------------------------------------------------------------------------------------

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleFollowingProgress = (followingProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingProgress,
    userId,
});

//THUNKS -------------------------------------------------------------------------------------------------
export const requestUsers = (pageSize, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(pageSize, page);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
    dispatch,
    userId,
    apiMethod,
    actionCreator
) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const unfollowUser = (userId) => async (dispatch) => {
    followUnfollowFlow(
        dispatch,
        userId,
        followAPI.unfollowUser.bind(userId),
        unfollowSuccess
    );
};

export const followUser = (userId) => async (dispatch) => {
    followUnfollowFlow(
        dispatch,
        userId,
        followAPI.followUser.bind(userId),
        followSuccess
    );
};

export default usersReducer;
