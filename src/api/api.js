import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b7c85ce9-490e-4a6c-ad65-e884e00fc7ab",
    },
});

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response) => response.data);
    },
};

export const followAPI = {
    unfollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },

    followUser(userId) {
        return instance
            .post(`follow/${userId}`, {})
            .then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((response) => response.data);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, { status })
            .then((response) => response.data);
    },
    updatePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
    updateProfileInfo(profileInfo) {
        return instance
            .put(`profile`, profileInfo)
            .then((response) => response.data);
    },
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    login(email, password, rememberMe = false, captcha) {
        return instance
            .post(`auth/login`, { email, password, rememberMe, captcha })
            .then((response) => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then((response) => response.data);
    },
};

export const securityAPI = {
    getCaptcha() {
        return instance
            .get(`/security/get-captcha-url`)
            .then((response) => response.data);
    },
};
