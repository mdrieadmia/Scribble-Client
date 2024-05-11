import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { SlCalender } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineReply } from "react-icons/md";


const BlogDetails = () => {
    const { userData } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()

    // Get Blogs Data functionality
    const { data: blogDetails = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Details']
    })
    const getBlogs = async () => {
        const { data } = await axiosSecure.get(`/blog/details?id=${id}`)
        console.log(data);
        return data;
    }

    // Get comment data fuctionality
    const { data: comments = [], isLoading: isCommentLoading, refetch } = useQuery({
        queryFn: () => getComments(),
        queryKey: ['Comments']
    })
    const getComments = async () => {
        const { data } = await axiosSecure.get(`/comments?id=${id}`)
        return data;

    }

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.get(`/comments?id=${id}`)
            return data
        },
        onSuccess: () => {
            refetch()
        }
    })

    const { _id, title, photoURL, blogPhoto, displayName, email, date, shortDescription, longDescription } = blogDetails || {}
    const postedDate = new Date(date).toLocaleString()


    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const blogId = _id;
        const writerPhotoURL = userData.photoURL;
        console.log('comment on blog : ', _id, comment, writerPhotoURL, displayName);
        const commentData = { blogId, comment, writerPhotoURL, displayName }
        axios.post('http://localhost:5000/comments', commentData)
            .then(() => {
                toast.success("Comment posted successfully")
                mutateAsync(_id)
            })
            .catch(() => { })
    }
    console.log(comments);
    return (
        <div>
            {
                isLoading ?
                    <>
                    </>
                    :
                    <div>
                        <div className="w-full pt-10 pb-72 bg-gradient-to-t from-green-500 to-green-700">
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
                                    <img className="w-10 h-10 rounded-full border-[3px] border-green-400" src={photoURL} alt="" />
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
                                    <div className="flex justify-center items-center mb-10">
                                        <Link to={`/blog/update/${blogDetails._id}`} className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold">Update Post</Link>
                                    </div>
                                    :
                                    <></>
                            }

                            <div>
                                <h1 className="text-2xl font-bold text-center">Comments</h1>
                                <div>
                                    <div>
                                        {
                                            isCommentLoading ?
                                                <>
                                                </>
                                                :
                                                <div>
                                                    {
                                                        comments.map(comment => <div key={comment._id}>
                                                            <div className="flex items-start mt-5">
                                                                <div>
                                                                    <img className="w-10 h-10 rounded-full border-[2px] border-green-500 mr-2" src={comment.writerPhotoURL} alt="user photo" />
                                                                </div>
                                                                <div>
                                                                    <h1 className="font-semibold text-sm">{comment?.displayName}</h1>
                                                                    <h1 className="font-medium text-justify max-w-[450px] text-sm text-[#474747]">{comment?.comment}</h1>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-7 ml-12 mt-1">
                                                                <h1 className="text-sm font-semibold flex items-center gap-1"><IoMdHeart className="text-[18px]"/> like</h1>
                                                                <h1 className="text-sm font-semibold flex items-center gap-1"><MdOutlineReply className="text-xl"/> Replay</h1>
                                                            </div>
                                                        </div>)
                                                    }
                                                </div>
                                        }
                                    </div>
                                    {
                                        !(email === userData?.email) ?
                                            <div>
                                                <div>
                                                    <form onSubmit={handleComment} className="flex mt-5">
                                                        <div>
                                                            <img className="w-10 h-10 rounded-full border-[2px] border-green-500 mr-2" src={userData?.photoURL} alt="user photo" />
                                                        </div>
                                                        <textarea rows={1} name="comment"></textarea>
                                                        <input type="submit" value='Comment' className="px-5 py-2 bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-700 duration-200" />
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