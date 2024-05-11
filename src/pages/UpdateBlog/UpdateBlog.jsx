import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBlog = () => {

    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm()


    // Get Blogs Data functionality
    const { data: blogDetails = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Details']
    })
    const getBlogs = async () => {
        const { data } = await useAxiosSecure.get(`/blog/details?id=${id}`)
        console.log(data);
        return data;
    }

    // Blog update functionality
    const handleUpdate = (data) =>{
        const newBlog = {...data}
        axios.put(`http://localhost:5000/blog/update?id=${id}`, newBlog)
        .then(()=>{
            toast.success("Updated Successfully")
        })
        .catch(()=>{
            toast.error("Update Failed")
        })
    }



    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10 text-[#474747]">Update Your Blog</h1>
            {
                isLoading ?
                    <> </>
                    :
                    <div>
                        <form onSubmit={handleSubmit(handleUpdate)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto mb-10">
                            <select defaultValue={blogDetails.category} className="block w-full my-3 rounded-md border-gray-200" name="category" {...register("category", { required: true })}>
                                <option className="text-[#474747]" value="">Select Category</option>
                                <option className="text-[#474747]" value="Technology">Technology</option>
                                <option className="text-[#474747]" value="Education">Education</option>
                                <option className="text-[#474747]" value="Sports">Sports</option>
                            </select>
                            {errors.category && <span className="text-red-500">This field is required</span>}

                            <input defaultValue={blogDetails.title} className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Blog Title" name="title" {...register("title", { required: true })} />
                            {errors.title && <span className="text-red-500">This field is required</span>}

                            <input defaultValue={blogDetails.blogPhoto} className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Blog Photo URL" name="blogPhoto" {...register("blogPhoto", { required: true })} />
                            {errors.blogPhoto && <span className="text-red-500">This field is required</span>}

                            <input defaultValue={blogDetails.shortDescription} className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                            {errors.shortDescription && <span className="text-red-500">This field is required</span>}

                            <textarea rows={5} defaultValue={blogDetails.longDescription} className="block w-full my-3 rounded-md border-gray-200" type="text" placeholder="Long Description" name="longDescription" {...register("longDescription", { required: true })} />
                            {errors.longDescription && <span className="text-red-500">This field is required</span>}

                            <div className="flex justify-center items-center mt-5">
                                <input className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm cursor-pointer" type="submit" value={'Update'} />
                            </div>
                        </form>
                    </div>
            }
        </div>
    );
};

export default UpdateBlog;