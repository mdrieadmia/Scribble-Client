import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";



const Login = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = () =>{

    }

    return (
        <div className="">
            <div className="container mx-auto px-5">
                <div className="w-full py-10">
                    <div className="w-full bg-white mt-5 rounded-md">
                        <h1 className="text-3xl font-semibold text-center">Login Now</h1>
                        <form onSubmit={handleSubmit(handleLogin)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <input className="block w-full my-3 rounded-md border-gray-200" type="email" placeholder="Email" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 rounded-md border-gray-200" type="password" placeholder="Password" name="password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div className="flex justify-center items-center mt-5">
                                <input className="bg-[#009444] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#009444] border-2 border-transparent hover:border-[#009444] duration-300 text-white text-sm cursor-pointer" type="submit" value={'Login'} />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 className="font-medium text-center mt-3">OR</h1>
                        <h1 className="font-medium text-center">Continue with</h1>
                        <div className="flex justify-center items-center mt-2 gap-2">
                            <button className="flex border px-3 py-2 border-transparent hover:border-[#009444] duration-200 items-center gap-1 font-semibold"><FcGoogle className="text-2xl -mt-1"/> Google</button>
                            <button className="flex border px-3 py-2 border-transparent hover:border-[#009444] duration-200 items-center gap-1 font-semibold"><AiFillGithub className="text-2xl -mt-1"/> Github</button>
                        </div>
                        <h1 className="text-center mt-3 font-medium">Don&apos;t have any account? <Link to={'/register'} className="font-bold hover:text-[#009444] duration-200">Register</Link> Now.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;