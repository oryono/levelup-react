import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`
    }
});

instance.interceptors.response.use(null, error => {
    if (
        !(
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
        )
    ) {
        toast.error("Unexpected error occured", {
            position: "bottom-left",
            hideProgressBar: true,
            autoClose: 1500
        });
    }

    return Promise.reject(error);
});

export default instance;
