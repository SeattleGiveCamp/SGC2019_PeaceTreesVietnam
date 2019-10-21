import axios from "axios";

const baseURL = "http://159.89.146.24:3000/"

export default {
    
    login: (userObj) => {
        return axios.post(`${baseURL}/auth/login`, userObj)
    },
    logout: () => {
        return axios.post(`${baseURL}/auth/logout`)
    },
    getUser: () => {
        return axios.get(`${baseURL}/auth/user`)
    },
    getProject: () => {
        return axios.get(`${baseURL}/api/projects/`)
    },
    // registerUser: (userObj) => {
    //     return axios.post("https://crossbreed-backend.herokuapp.com/auth/signup", userObj)
    // },
    // saveProject: (petObj, userId) => {
    //     return axios.post(`${baseURL}/api/project/${userId}`, projectObj)
    // },
    // getUserPets: (userId) => {
    //     return axios.get(`${baseURL}/api/pet/${userId}`)
    // },
    // breedPets: (parentsObj) => {
    //     return axios.post(`${baseURL}/api/eggs/`, parentsObj)
    // },
    // deleteProject: (projectId) => {
    //     return axios.delete(`${baseURL}/api/projects/${projectId}`);
    // }, 
    // updateProjectName: (projectId, newName) => {
    //     return axios.put(`${baseURL}/api/projects/${projectId}`, {name: newName} )
    // },
    signUp: (userObj) => {
        return axios.post(`${baseURL}/auth/signup`, userObj);
    },
    updateUsername: (userId, newUsername) => {
        return axios.put(`${baseURL}/api/users/${userId}`, newUsername);
    },
    resetPassword2: (userPassword) => {
        return axios.post(`${baseURL}/forgot`, userPassword);
    },
    resetPassword: (userEmail) => {
        return axios.post(`${baseURL}/forgot`, userEmail);
    }
}