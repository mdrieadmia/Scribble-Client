import PropTypes from 'prop-types';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const WishlistCard = ({ item, mutateAsync }) => {
    const { _id, blogId, blogPhoto, category, title, shortDescription } = item || {}
    const axiosSecure = useAxiosSecure()
    const { userData } = useAuth();

    const handleDelete = (_id) => {
        axiosSecure.delete(`/wishlist/delete?id=${_id}`)
            .then(() => {
                toast.success('Item removed succsfully')
                mutateAsync(userData.email)
            })
    }
    return (
        <>
            <div className='bg-white rounded-lg pb-5 flex flex-col border-2 border-transparent hover:border-green-200 duration-300 cursor-pointer'>
                <div>
                    <img className='h-[200px] w-full object-cover rounded-t-[6px]' src={blogPhoto} alt="Blog image" />
                </div>
                <div className='p-5 flex-grow'>
                    <div className='flex justify-between w-full items-center'>
                        <h1 className={`px-3 py-1 rounded-md ${category === 'Technology' ? 'bg-red-200 border-2 border-red-300 text-red-500' :
                            category === 'Sports' ? 'bg-blue-200 border-2 border-blue-300 text-blue-600' :
                                category === 'Education' ? 'bg-green-200 border-2 border-green-300 text-green-500' : ''}`}>{category}</h1>
                    </div>
                    <h1 className='mt-4 text-xl font-semibold mb-2'>{title}</h1>
                    <p className='text-sm text-justify'>{shortDescription}</p>
                </div>
                <div className='px-5 flex gap-5 justify-between'>
                    <Link to={`/blog/details/${blogId}`}>
                        <button className='flex items-center gap-1 px-3 py-1 rounded-md font-semibold text-green-500 bg-green-200 hover:text-white duration-300 hover:bg-green-400'><IoEyeSharp className='text-xl' />Details</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className='flex items-center gap-1 px-3 py-1 rounded-md font-semibold text-pink-500 bg-pink-200 hover:text-white duration-300 hover:bg-pink-400'><MdDelete className='text-xl' />Remove</button>
                </div>
            </div>

        </>
    );
};

WishlistCard.propTypes = {
    item: PropTypes.object,
    mutateAsync: PropTypes.func
};

export default WishlistCard;