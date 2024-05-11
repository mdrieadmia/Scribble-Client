import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { Link } from "react-router-dom";

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
        console.log(data);
        return data;
    }

    const { mutateAsync } = useMutation({
        mutationFn: async (email) => {
            const { data } = await axiosSecure.get(`/wishlist?email=${email}`)
            return data
        },
        onSuccess: () => {
            refetch()
        }
    })


    return (
        <div className="bg-gray-100 border-b min-h-[calc(100vh-430px)]">
            <h1 className="text-2xl font-bold text-center pt-5">My Wishlist</h1>
            {
                (loading || isLoading) ?
                <h1>Loading...</h1>
                :
                <div>
                    {
                        wishlist.length === 0 ?
                            <div className="w-full h-full flex justify-center items-center pt-16 flex-col gap-5 pb-10">
                                <h1 className="text-center text-xl text-red-500">No item avaiable</h1>
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