import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from 'react-hot-toast';



const Login = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {googleLogin, githubLogin, handleLogin} = useAuth()
    // Email Password Login Handeler 
    const handleEmailLogin = (data) =>{
        const {email, password} = data;
        handleLogin(email, password)
        .then(()=> toast.success('Logged in successfully'))
        .catch(()=> toast.error("Login failed"))
    }

    // Google Login Handeler
    const handleGoogleLogin = () => {
        googleLogin()
        .then(()=> toast.success('Logged in successfully'))
        .catch(()=> toast.error("Login failed"))
    }

    // Github Login Handeler
    const handleGithubLogin = () => {
        githubLogin()
        .then(()=> console.log('Login with google successfully'))
        .catch(()=> console.log("Login failed"))
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
                                <input className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm cursor-pointer" type="submit" value={'Login'} />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 className="font-medium text-center mt-3">OR</h1>
                        <h1 className="font-medium text-center">Continue with</h1>
                        <div className="flex justify-center items-center mt-2 gap-2">
                            <button onClick={handleGoogleLogin} className="flex border px-3 py-2 border-transparent hover:border-[#03A5FA] duration-200 items-center gap-1 font-semibold"><FcGoogle className="text-2xl -mt-1"/> Google</button>
                            <button onClick={handleGithubLogin} className="flex border px-3 py-2 border-transparent hover:border-[#03A5FA] duration-200 items-center gap-1 font-semibold"><AiFillGithub className="text-2xl -mt-1"/> Github</button>
                        </div>
                        <h1 className="text-center mt-3 font-medium">Don&apos;t have any account? <Link to={'/register'} className="font-bold hover:text-[#03A5FA] duration-200">Register</Link> Now.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;