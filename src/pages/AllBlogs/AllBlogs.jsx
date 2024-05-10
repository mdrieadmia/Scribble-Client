
const AllBlogs = () => {
    return (
        <div className="container mx-auto px-5 mb-48">
            <div className="bg-[url('https://i.postimg.cc/gkLJHHV2/hd-office-background-wwmb5ymdbjbjv689.jpg')] h-48 w-full bg-cover bg-no-repeat bg-center rounded-lg">
                <div className="bg-blue-900 w-full h-full opacity-90 rounded-lg">
                    <h1 className="text-2xl font-bold text-white text-center pt-6">Dive into Our Blog Library</h1>
                    <div className="flex justify-center items-center mt-8 gap-10">
                        <div className="flex justify-center items-center gap-3">
                            <p className="font-semibold text-white">Category : </p>
                            <select name="categories" className="rounded-full px-5 py-[10px] text-sm">
                                <option value="technology">Technology</option>
                                <option value="education">Education</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="text" className="border-none bg-[#eeeeee] rounded-s-full px-5 active:outline-none placeholder:text-sm" placeholder="Type here" />
                            <button className="bg-[#03A5FA] py-[10px] px-5 rounded-e-full text-sm font-semibold hover:bg-[#5276ec] duration-300 text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4 bg-blue-300">
                    <h1>card container</h1>
                </div>
                <div className="bg-red-200">
                    <h1>sidebar</h1>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;