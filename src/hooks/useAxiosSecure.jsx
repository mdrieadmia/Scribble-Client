import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : 'https://scribble-server.vercel.app',
    withCredentials : true
})
const useAxiosSecure = () => {
    const {handleLogOut} = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use(
        (res)=>{
            return res;
        },
        (err)=>{
            if(err.response.status === 401 || err.response.status === 403){
                handleLogOut();
                navigate('/login')
                console.log("Unauthorized Access");
            }
            return Promise.reject(err);
        }
    )
    return axiosSecure
};

export default useAxiosSecure;
