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
        <div className="">
            {
                isLoading ?
                    <div>
                        <h1>Loading...</h1>
                    </div>
                    :
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-center pt-10">Featured</h1>
                            <div className="container mx-auto px-5">
                                <FeaturedTable featured={featuredBlogs}/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Featured;