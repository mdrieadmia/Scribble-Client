import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";

const RecentBlog = () => {

    const { data: recentBlogs = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Blogs']
    })
    const getBlogs = async () => {
        const { data } = await axios.get('http://localhost:5000/recent')
        console.log(data);
        return data;
    }

    return (
        <div className="bg-green-50 mb-16">
            <div className="container mx-auto px-5 py-16">
            <div className="mb-10">
                <h1 className="text-2xl font-semibold text-center mb-2">Recent Blog Post</h1>
                <p className="text-center text-sm max-w-[560px] mx-auto text-[#474747]">Exploring the role in sustainable agriculture from precision farming to resource optimization and ecological balance</p>
            </div>
            {
                isLoading ?
                    <div>
                        <h1>Loading...</h1>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {
                            recentBlogs.slice(0,8).map(blog => <BlogCard key={blog._id} blog={blog} />)
                        }
                    </div>
            }
        </div>
        </div>
    );
};

export default RecentBlog;