import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AllBlogs = () => {
    const {userData} = useAuth();
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')


    const { data: blogs = [], isLoading } = useQuery({
        queryFn: () => getBlogs(),
        queryKey: ['Blogs', filter, search]
    })
    const getBlogs = async () => {
        const { data } = await axios.get(`https://scribble-server.vercel.app/blogs?filter=${filter}&search=${search}&email=${userData?.email}`)
        return data;
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }
    return (
        <div className="bg-gray-100 border-b">
            {
                <div className="container mx-auto px-5 pb-20">
                    <div className="bg-[url('https://i.postimg.cc/gkLJHHV2/hd-office-background-wwmb5ymdbjbjv689.jpg')] h-auto w-full bg-cover bg-no-repeat bg-center rounded-lg">
                        <div className="bg-green-900 w-full h-full opacity-90 rounded-lg py-10">
                            <h1 className="text-2xl font-bold text-white text-center">Dive into Our Blog Library</h1>
                            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-5">
                                <div className="flex justify-center items-center gap-3">
                                    <select defaultValue={filter} onChange={(e) => setFilter(e.target.value)} name="categories" className="rounded-full px-5 py-[10px] text-sm">
                                        <option value="">Select Category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Education">Education</option>
                                        <option value="Sports">Sports</option>
                                    </select>
                                </div>
                                <div>
                                    <form onSubmit={handleSearch} className="flex justify-center items-center px-5">
                                        <input type="text" className="w-[90%] border-none bg-[#eeeeee] rounded-s-full px-5 active:outline-none placeholder:text-sm" defaultValue={search} name="search" placeholder="Type here" />
                                        <button type="submit" className="bg-green-600 py-[10px] px-5 rounded-e-full text-sm font-semibold hover:bg-green-700 duration-300 text-white">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 min-h-[400px]">
                        <div >
                            {
                                isLoading ?
                                    <div className="min-h-screen">
                                        
                                    </div>
                                    : 
                                    blogs.length===0?
                                    <div>
                                        <h1 className="text-red-500 text-center font-semibold pt-20"> No Blog Found </h1>
                                    </div>
                                    :
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                        {
                                            blogs.length===0?
                                            <div>
                                                <h1 className="text-red-500 text-center font-semibold pt-20"> No Blog Found </h1>
                                            </div>
                                            :
                                            blogs.map(blog => <> <BlogCard key={blog._id} blog={blog} isLoading={isLoading} /></> )
                                            
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