import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const Login = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {googleLogin, githubLogin, setLoading, handleLogin} = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location?.state || '/';

    // Email Password Login Handeler 
    const handleEmailLogin = (data) =>{
        const {email, password} = data;
        if(password.length < 6){
            toast.error("6 Charecter Needed")
            return;
           }
           else if(!/[A-Z]/.test(password)){
            toast.error("Don't have a capital letter")
            return;
           }
           else if(!/[0-9]/.test(password)){
            toast.error("Don't have a numeric character")
            return;
           }
           else if(!/[!@#$%^&*]/.test(password)){
            toast.error("Don't have a special character")
            return;
           }
        handleLogin(email, password)
        .then((res)=> {
            toast.success('Logged in successfully')
            if(res){
                const user = {email : res?.user?.email};
                axiosSecure.post('/jwt', user)
                .then(()=>{})
                .catch(()=>{})
            }
            navigate(previousLocation)
        })
        .catch(()=> {
            toast.error("Login failed")
            setLoading(false)
        })
    }

    // Google Login Handeler
    const handleGoogleLogin = () => {
        googleLogin()
        .then((res)=> {
            toast.success('Logged in successfully')
            navigate(previousLocation)
            if(res){
                const user = {email : res?.user?.email};
                axiosSecure.post('/jwt', user)
                .then(()=>{})
                .catch(()=>{})
            }
        })
        .catch(()=> {
            toast.error("Login failed")
            setLoading(false)
        })
    }

    // Github Login Handeler
    const handleGithubLogin = () => {
        githubLogin()
        .then((res)=> {
            toast.success('Login with google successfully')
            if(res){
                const user = {email : res?.user?.email};
                axiosSecure.post('/jwt', user)
                .then(()=>{})
                .catch(()=>{})
            }
            navigate(previousLocation)
        })
        .catch(()=>{
            toast.error("Login failed")
            setLoading(false)
        })
    }

    return (
        <div className="">
            <div className="container mx-auto px-5">
                <div className="w-full py-10">
                    <div className="w-full bg-white mt-5 rounded-md">
                        <h1 className="text-3xl font-semibold text-center">Login Now</h1>
                        <form onSubmit={handleSubmit(handleEmailLogin)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <input className="block w-full my-3 rounded-md border-gray-200" type="email" placeholder="Email" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 rounded-md border-gray-200" type="password" placeholder="Password" name="password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div className="flex justify-center items-center mt-5">
                                <input className="bg-green-600 py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-green-600 border-2 border-transparent hover:border-green-600 duration-300 text-white text-sm cursor-pointer" type="submit" value={'Login'} />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 className="font-medium text-center mt-3">OR</h1>
                        <h1 className="font-medium text-center">Continue with</h1>
                        <div className="flex justify-center items-center mt-2 gap-2">
                            <button onClick={handleGoogleLogin} className="flex border px-3 py-2 border-transparent hover:border-green-600 duration-200 items-center gap-1 font-semibold"><FcGoogle className="text-2xl -mt-1"/> Google</button>
                            <button onClick={handleGithubLogin} className="flex border px-3 py-2 border-transparent hover:border-green-600 duration-200 items-center gap-1 font-semibold"><AiFillGithub className="text-2xl -mt-1"/> Github</button>
                        </div>
                        <h1 className="text-center mt-3 font-medium">Don&apos;t have any account? <Link to={'/register'} className="font-bold hover:text-green-600 duration-200">Register</Link> Now.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;