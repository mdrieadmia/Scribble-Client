import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { SlCalender } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";


const BlogDetails = () => {
    const { userData } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const { data: blogDetails = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Details']
    })
    const getBlogs = async () => {
        const { data } = await axiosSecure.get(`/blog/details?id=${id}`)
        console.log(data);
        return data;
    }
    const { _id, title, photoURL, blogPhoto, displayName, email, date, shortDescription, longDescription } = blogDetails || {}
    const postedDate = new Date(date).toLocaleString()


    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const blogId = _id;
        console.log('comment on blog : ', _id, comment, photoURL, displayName);
        const commentData = {blogId, comment, photoURL, displayName}
        axios.post('http://localhost:5000/comments', commentData)
        .then(()=>{
            toast.success("Comment posted successfully")
        })
        .catch(()=>{})
    }
    return (
        <div>
            {
                isLoading ?
                    <>
                    </>
                    :
                    <div>
                        <div className="w-full pt-10 pb-72 bg-[#03A5FAe6]">
                            <div className="container mx-auto px-5 relative">
                                <div>
                                    <h2 className="text-lg font-medium mb-3 text-white">Blog details of</h2>
                                    <h1 className="text-5xl font-semibold text-white">{title}</h1>

                                </div>
                                <div className="absolute bottom-100 mt-10 w-full pe-10 h-[600px]">
                                    <img className="w-full rounded-lg h-full object-cover" src={blogPhoto} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-5 mt-96 mb-16">
                            <div>
                                <h1 className="text-2xl font-semibold">{shortDescription}</h1>
                                <h1 className="text-[#474747] font-medium text-justify mt-5">{longDescription}</h1>
                            </div>
                            <div>
                                <div className="font-semibold text-[#474747] flex gap-3 mt-5 items-center">
                                    <img className="w-10 h-10 rounded-full border-4 border-blue-400" src={photoURL} alt="" />
                                    <div>
                                        <h1>{displayName}</h1>
                                        <h1>{email}</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="ml-[52px] font-semibold text-[#474747] flex gap-3 items-center tracking-wider mt-3"> <SlCalender /> Date : {postedDate}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mb-20 container mx-auto px-5">
                            {
                                email === userData?.email ?
                                    <div>
                                        <h1>Update</h1>
                                    </div>
                                    :
                                    <></>
                            }

                            <div>
                                <h1 className="text-2xl font-bold text-center">Comments</h1>
                                <div>
                                    <div>
                                        <h1>Comment 1</h1>
                                        <h1>Comment 2</h1>
                                        <h1>Comment 3</h1>
                                        <h1>Comment 4</h1>
                                    </div>
                                    {
                                        !(email === userData?.email) ?
                                            <div>
                                                <div>
                                                    <form onSubmit={handleComment} className="flex">
                                                        <div>
                                                            <img className="w-10 h-10 rounded-full border-4 border-blue-400 mr-2" src={userData?.photoURL} alt="user photo" />
                                                        </div>
                                                        <textarea rows={1} name="comment"></textarea>
                                                        <input type="submit" value='Comment' className="px-5 py-2 bg-blue-400 text-white font-semibold cursor-pointer hover:bg-blue-500 duration-200" />
                                                    </form>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BlogDetails;