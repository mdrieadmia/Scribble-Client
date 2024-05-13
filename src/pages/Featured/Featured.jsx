import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FeaturedTable from "../../components/FeaturedTable/FeaturedTable";

const Featured = () => {

    const { data: featuredBlogs = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Blogs']
    })
    const getBlogs = async () => {
        const { data } = await axios.get(`http://localhost:5000/blogs`)
        const featuredData = data.sort((a, b) => b.longDescription.length - a.longDescription.length)
        return featuredData;
    }



    return (
        <div className="mb-20">
            {
                isLoading ?
                    <div>
                        <h1>Loading...</h1>
                    </div>
                    :
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-center pt-10">Featured Blogs</h1>
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