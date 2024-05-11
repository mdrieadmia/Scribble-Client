import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const AddBlog = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const {userData} = useAuth();
    const handlePost = (data) =>{
        const {displayName, photoURL, email} = userData;
        const date = new Date().toString();
        const blog = {...data, displayName, photoURL, email, date};
        console.log(blog);

        axios.post('http://localhost:5000/post', {...blog})
        .then((res)=>{
            console.log(res)
            toast.success("Blog posted successfully")
            reset();
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10 text-[#474747]">Add A New Blog</h1>
            <div>
                <form onSubmit={handleSubmit(handlePost)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto mb-10">
                    <select className="block w-full my-3 rounded-md border-gray-200" name="category" {...register("category", { required: true })}>
                        <option className="text-[#474747]" value="">Select Category</option>
                        <option className="text-[#474747]" value="Technology">Technology</option>
                        <option className="text-[#474747]" value="Education">Education</option>
                        <option className="text-[#474747]" value="Sports">Sports</option>
                    </select>
                    {errors.category && <span className="text-red-500">This field is required</span>}

                    <input className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Blog Title" name="title" {...register("title", { required: true })} />
                    {errors.title && <span className="text-red-500">This field is required</span>}

                    <input className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Blog Photo URL" name="blogPhoto" {...register("blogPhoto", { required: true })} />
                    {errors.blogPhoto && <span className="text-red-500">This field is required</span>}

                    <input className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span className="text-red-500">This field is required</span>}

                    <textarea rows={5} className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Long Description" name="longDescription" {...register("longDescription", { required: true })} />
                    {errors.longDescription && <span className="text-red-500">This field is required</span>}

                    <div className="flex justify-center items-center mt-5">
                        <input className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm cursor-pointer" type="submit" value={'Post'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;