import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true
})
const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use(
        (res)=>{
            console.log("Got valid respons");
            return res;
        },
        (err)=>{
            if(err.response.status === 401 || err.response.status === 403){
                signOutUser();
                navigate('/login')
            }
            return Promise.reject(err);
        }
    )
    return axiosSecure
};

export default useAxiosSecure;
