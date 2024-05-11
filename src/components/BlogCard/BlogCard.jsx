import PropTypes from 'prop-types';
import { IoEyeSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";



const BlogCard = ({ blog }) => {
    const { category, title, blogPhoto, shortDescription, date } = blog;
    const blogDate = new Date(date).toLocaleDateString()
    return (
        <div className='bg-white rounded-lg pb-5 flex flex-col border-2 border-transparent hover:border-blue-200 duration-300 cursor-pointer'>
            <div>
                <img className='h-[200px] w-full object-cover rounded-t-[6px]' src={blogPhoto} alt="Blog image" />
            </div>
            <div className='p-5 flex-grow'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className={`px-3 py-1 rounded-md ${ 
                        category === 'Technology' ? 'bg-red-200 border-2 border-red-300 text-red-500' : 
                        category === 'Sports' ? 'bg-green-200 border-2 border-green-300 text-green-500' : 
                        category === 'Education' ? 'bg-blue-200 border-2 border-blue-300 text-blue-500' :'' }`}>{category}</h1>
                    <p>{blogDate}</p>
                </div>
                <h1 className='mt-4 text-xl font-semibold mb-2'>{title}</h1>
                <p className='text-sm text-justify'>{shortDescription}</p>
            </div>
            <div className='px-5 flex gap-5 justify-between'>
                <button className='flex items-center gap-1 px-3 py-1 rounded-md font-semibold text-blue-500 bg-blue-200 hover:text-white duration-300 hover:bg-blue-400'><IoEyeSharp className='text-xl' />Details</button>
                <button className='flex items-center gap-1 px-3 py-1 rounded-md font-semibold text-pink-500 bg-pink-200 hover:text-white duration-300 hover:bg-pink-400'><IoMdHeart className='text-xl' />Wishlist</button>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object
};

export default BlogCard;