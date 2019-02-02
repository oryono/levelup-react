import axios from "axios";
import {toast} from "react-toastify";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer  ${localStorage.getItem('token')}`
    }

});

instance.interceptors.response.use(null, error => {
    if (error.status >= 500) {
        toast('Some shit')
    }

    if (error.status === 401) {
        // toast('Some shit')
        return window.location.assign('login');
    }

    return Promise.reject(error)
})

export default instance;
