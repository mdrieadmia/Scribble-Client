import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Wishlist = () => {
    const { userData, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    // Get Wishlist Data From DB
    const { data: wishlist = [], isLoading, refetch } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Wishlist']
    })
    const getBlogs = async () => {
        const { data } = await axiosSecure.get(`/wishlist?email=${userData.email}`)
        return data;
    }

    const { mutateAsync } = useMutation({
        mutationFn: async (email) => {
            const { data } = await axiosSecure.get(`/wishlist?email=${email}`)
            return data
        },
        onSuccess: () => {
            refetch()
            toast.success('Item removed succsfully')
        }
    })


    return (
        <div className="bg-gray-100 border-b min-h-[calc(100vh-430px)]">
            <h1 className="text-2xl font-bold text-center pt-5">My Wishlist</h1>
            {
                (loading || isLoading) ?
                <div className="flex justify-center items-center mt-20">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                        </div>
                :
                <div>
                    {
                        wishlist.length === 0 ?
                            <div className="w-full h-full flex justify-center items-center pt-16 flex-col gap-5 pb-10">
                                <h1 className="text-center text-xl text-red-500">No Item Added Yet</h1>
                                <Link to={'/blogs'} className="px-5 py-2 bg-green-600 text-white font-semibold">See All Blogs</Link>
                            </div>
                            :
                            <div>
                                <div className="container mx-auto px-5 mt-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
                                        {
                                            wishlist.map(item => <WishlistCard key={item._id} item={item} mutateAsync={mutateAsync} />)
                                        }
                                    </div>
                                </div>
        
                            </div>
                    }
                </div>
            }

        </div>
    );
};

export default Wishlist;