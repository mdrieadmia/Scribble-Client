import { useQuery } from "@tanstack/react-query";
import FeaturedTable from "../../components/FeaturedTable/FeaturedTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Featured = () => {

    const axiosSecure = useAxiosSecure()
    const {userData} = useAuth()
    const { data: featuredBlogs = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Blogs']
    })
    const getBlogs = async () => {
        const { data } = await axiosSecure.get(`/featured?email=${userData.email}`)
        const featuredData = data.sort((a, b) => b.longDescription.length - a.longDescription.length)
        return featuredData;
    }



    return (
        <div className="mb-20">
            <h1 className="text-2xl font-bold text-center pt-10">Featured Blogs</h1>
            {
                isLoading ?
                    <div className="flex justify-center items-center">
                        <h1></h1>
                    </div>
                    :
                    <div>
                        <div>
                            <div className="container mx-auto border mt-10">
                                <FeaturedTable featured={featuredBlogs.slice(0, 10)}/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Featured;