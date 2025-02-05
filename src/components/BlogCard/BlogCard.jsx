import PropTypes from 'prop-types';
import { IoEyeSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Skeleton from '../Skeleton/Skeleton';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const BlogCard = ({ blog, isLoading }) => {

    const { ref, inView } = useInView({ threshold: 0 });

    const { userData, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, category, title, blogPhoto, shortDescription, date } = blog || {};
    const blogDate = new Date(date).toLocaleString('default', { day: '2-digit', month: 'long', year: 'numeric' })
    const blogId = _id;
    const { email } = userData || {};
    const handleWishlist = () => {
        const wishlistItem = { blogId, title, blogPhoto, shortDescription, category, email };
        axiosSecure.post('https://scribble-server.vercel.app/wishlist', wishlistItem)
            .then(() => {
                toast.success("Blog Added In Wishlist")
            })
            .error(() => {
                toast.error("Add Failed")
            })
    }
    return (
        <div>
            {
                isLoading || loading ?
                    <div>
                        <Skeleton />
                    </div>
                    :
                    <div ref={ref} className='h-full'>
                        <motion.div initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3 }} className='h-full flex flex-col bg-white rounded-lg pb-5 border-2 border-transparent hover:border-green-200 duration-300 cursor-pointer'>
                            
                                <div>
                                    <img className='h-[200px] w-full object-cover rounded-t-[6px]' src={blogPhoto} alt="Blog image" />
                                </div>
                                <div className='p-5 flex-grow'>
                                    <div className='flex justify-between w-full items-center'>
                                        <h1 className={`px-3 py-1 rounded-md ${category === 'Technology' ? 'bg-red-200 border-2 border-red-300 text-red-500' :
                                            category === 'Sports' ? 'bg-blue-200 border-2 border-blue-300 text-blue-600' :
                                                category === 'Education' ? 'bg-green-200 border-2 border-green-300 text-green-500' : ''}`}>{category}</h1>
                                        <p className='tracking-widest'>{blogDate}</p>
                                    </div>
                                    <h1 className='mt-4 text-xl font-semibold mb-2'>{title}</h1>
                                    <p className='text-sm text-justify'>{shortDescription}</p>
                                </div>
                                <div className='px-5 flex gap-3 justify-between'>
                                    <Link to={`/blog/details/${_id}`} className='w-1/2'>
                                        <button className='w-full flex items-center gap-1 rounded-[5px] px-3 py-1 justify-center font-semibold text-green-600 bg-green-200 hover:text-white duration-300 hover:bg-green-400'><IoEyeSharp className='text-xl' />Details</button>
                                    </Link>
                                    <button onClick={() => handleWishlist(_id)} className='w-1/2 rounded-[5px] flex items-center justify-center gap-1 px-3 py-1 font-semibold text-pink-500 bg-pink-200 hover:text-white duration-300 hover:bg-pink-500'><IoMdHeart className='text-xl' />Wishlist</button>
                                </div>
                        </motion.div>
                    </div>
            }
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
    isLoading: PropTypes.object
};

export default BlogCard;