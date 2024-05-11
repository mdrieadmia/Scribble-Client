import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../../components/BlogCard/BlogCard";

const AllBlogs = () => {
    const { data: blogs = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Blogs']
    })
    const getBlogs = async () => {
        const { data } = await axios.get('http://localhost:5000/blogs')
        console.log(data);
        return data;
    }

    return (
        <div className="bg-gray-100 border-b">
            {
                isLoading ?
                <div>
                    <h1>Loading...</h1>
                </div>
                :
            <div className="container mx-auto px-5 pb-20">
                <div className="bg-[url('https://i.postimg.cc/gkLJHHV2/hd-office-background-wwmb5ymdbjbjv689.jpg')] h-auto w-full bg-cover bg-no-repeat bg-center rounded-lg">
                    <div className="bg-blue-900 w-full h-full opacity-90 rounded-lg py-10">
                        <h1 className="text-2xl font-bold text-white text-center">Dive into Our Blog Library</h1>
                        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-5">
                            <div className="flex justify-center items-center gap-3">
                                <p className="font-semibold text-white">Category : </p>
                                <select name="categories" className="rounded-full px-5 py-[10px] text-sm">
                                    <option value="technology">Technology</option>
                                    <option value="education">Education</option>
                                    <option value="sports">Sports</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center px-5">
                                <input type="text" className="w-[90%] border-none bg-[#eeeeee] rounded-s-full px-5 active:outline-none placeholder:text-sm" placeholder="Type here" />
                                <button className="bg-[#03A5FA] py-[10px] px-5 rounded-e-full text-sm font-semibold hover:bg-[#5276ec] duration-300 text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div >
                        {
                            isLoading ?
                                <><h1>Loading...</h1></>
                                :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {
                                        blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default AllBlogs;