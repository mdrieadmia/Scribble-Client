import { FaBookOpen, FaUserShield } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { MdReviews } from "react-icons/md";

const HappyUsers = () => {
    return (
        <div className="bg-green-50">
            <div className="container mx-auto px-5 pb-16 pt-10">
                <div>
                    <h1 className="text-2xl font-semibold text-center mb-2">Our Contribution</h1>
                    <p className="text-center text-sm max-w-[560px] mx-auto text-[#474747]">Our contribution are the cornerstone of our success, driving our commitment to excellence and continuous improvement in all areas.</p>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row mt-16 gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-white p-6 space-y-3 text-green-500 text-center hover:bg-green-500 hover:text-white duration-300 rounded-md cursor-pointer">
                                <h1 className="flex justify-center"><FaBookOpen className="text-3xl " /></h1>
                                <h1 className="text-xl font-semibold">Total Blogs</h1>
                                <p className="text-4xl font-bold">13000+</p>
                            </div>
                            <div className="bg-white p-6 space-y-3 text-green-500 text-center hover:bg-green-500 hover:text-white duration-300 rounded-md cursor-pointer">
                                <h1 className="flex justify-center"><FaUserShield className="text-3xl " /></h1>
                                <h1 className="text-xl font-semibold">Verified Users</h1>
                                <p className="text-4xl font-bold">45000+</p>
                            </div>
                            <div className="bg-white p-6 space-y-3 text-green-500 text-center hover:bg-green-500 hover:text-white duration-300 rounded-md cursor-pointer">
                                <h1 className="flex justify-center"><MdReviews className="text-3xl " /></h1>
                                <h1 className="text-xl font-semibold">Positive Reviews</h1>
                                <p className="text-4xl font-bold">8300+</p>
                            </div>
                            <div className="bg-white p-6 space-y-3 text-green-500 text-center hover:bg-green-500 hover:text-white duration-300 rounded-md cursor-pointer">
                                <h1 className="flex justify-center"><HiPencilAlt className="text-3xl " /></h1>
                                <h1 className="text-xl font-semibold">Daily Post</h1>
                                <p className="text-4xl font-bold">200+</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="rounded-lg" src="https://i.postimg.cc/3xDLjYmW/1521651669993.jpg" alt="Contribution image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyUsers;