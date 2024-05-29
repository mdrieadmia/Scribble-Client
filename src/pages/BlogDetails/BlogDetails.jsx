import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { SlCalender } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineReply } from "react-icons/md";
import ShareSocial from "../../components/ShareSocial/ShareSocial";



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
            toast.success("Comment posted successfully")
        }
    })

    const { _id, title, photoURL, blogPhoto, displayName, email, date, shortDescription, longDescription } = blogDetails || {}
    const postedDate = new Date(date).toLocaleString()


    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const blogId = _id;
        const writerPhotoURL = userData.photoURL;
        const userDisplayName = userData.displayName
        const commentData = { blogId, comment, writerPhotoURL, userDisplayName }
        axios.post('https://scribble-server.vercel.app/comments', commentData)
            .then(() => {
                mutateAsync(_id)
                e.target.reset()
            })
            .catch(() => { })
    }
    return (
        <div>
            {
                isLoading ?
                    <div>
                        <div className="flex justify-center items-center mt-20">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                        </div>
                    </div>
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
                            <div className="flex justify-between">
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
                                <div>
                                    <ShareSocial id={id} blogPhoto={blogPhoto} title={title}/>
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
                                                                    <h1 className="font-semibold text-sm">{comment?.userDisplayName}</h1>
                                                                    <h1 className="font-medium text-justify max-w-[450px] text-sm text-[#474747]">{comment?.comment}</h1>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-7 ml-12 mt-1">
                                                                <h1 className="text-sm font-semibold flex items-center gap-1"><IoMdHeart className="text-[18px]" /> like</h1>
                                                                <h1 className="text-sm font-semibold flex items-center gap-1"><MdOutlineReply className="text-xl" /> Replay</h1>
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
                                            <div>
                                                <h1 className="text-center text-red-600 font-semibold text-lg mt-5">You can&quot;t comment in your own blog.</h1>
                                            </div>
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