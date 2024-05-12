import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const {handleRegister, setUser, setLoading, handleUpdateUserData} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();


    const handleEmailRegister = (data) => {
        const {name, photo, email, password} = data;

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

        handleRegister(email, password)
        .then((res)=>{
            toast.success('Registerd succesfully')
            setUser({ ...res?.user, photoURL: photo, displayName: name })
            handleUpdateUserData(name, photo)
            .then(()=>{})
            .catch(()=>{})
            navigate('/')
        })
        .catch(()=>{
            toast.error("Register Failed")
            setLoading(false)
        })
    }
    return (
        <div className="">
            <div className="container mx-auto px-5">
                <div className="w-full py-10">
                    <div className="w-full bg-white mt-5 rounded-md">
                        <h1 className="text-3xl font-semibold text-center">Register Now</h1>
                        <form onSubmit={handleSubmit(handleEmailRegister)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <input className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Full Name" name="name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Photo URL" name="photo" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 rounded-md border-gray-200" type="email" placeholder="Email" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 rounded-md border-gray-200" type="password" placeholder="Password" name="password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div className="flex justify-center items-center mt-5">
                                <input className="bg-green-600 py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-green-600 border-2 border-transparent hover:border-green-600 duration-300 text-white text-sm cursor-pointer" type="submit" value={'Register'} />
                            </div>
                        </form>
                        <h1 className="text-center mt-3 font-medium">Already have an account? <Link to={'/login'} className="font-bold hover:text-green-600 duration-200">Login</Link> Now.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;