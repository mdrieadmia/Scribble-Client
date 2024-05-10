"use client";
import { Navbar, Tooltip } from "flowbite-react";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import 'react-loading-skeleton/dist/skeleton.css'




const MainMenu = () => {

  const { user, loading, handleLogOut } = useAuth();

  const handleLogout = () => {
    handleLogOut()
      .then(() => console.log("Log out successfull"))
      .catch(() => console.log("Log out failed"))
  }


  return (
    <div className="border-b">
      <div className="h-9 w-full bg-[#03A5FA]">
        <div className="container mx-auto px-5 h-full">
          <div className="flex justify-between items-center h-full gap-5">
            <div className="flex gap-2 md:ml-3 items-center text-white">
              <FaEnvelope />
              <p className="text-[10px] md:text-base font-medium">support@scribble.com</p>
            </div>
            <div className="flex gap-2 items-center text-white">
              <IoCall />
              <p className="text-[10px] md:text-base font-medium">+8801863-931220</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Navbar rounded>
          <Navbar>
            <img src="https://i.postimg.cc/Znwr2bW5/logo.png" className="h-6 sm:h-9" alt="Flowbite React Logo" />
          </Navbar>
          <div className="flex md:order-2 gap-2">
            {
              loading ?
                <>
                  <div role="status" className="mr-[114px]">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>

                </>
                :
                !user ?
                  <div className="flex gap-2">
                    <Link to={'/login'} className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm">Login</Link>
                    <Link to={'register'} className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm">Register</Link>
                  </div>
                  :
                  <div className="flex items-center gap-2">
                    <Tooltip content={user?.displayName} placement="left" style="light">
                      <img className="h-10 w-10 rounded-full p-1 border" src={user?.photoURL} alt="User Photo" />
                    </Tooltip>
                    <div>
                      <button onClick={handleLogout} className="bg-[#03A5FA] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#03A5FA] border-2 border-transparent hover:border-[#03A5FA] duration-300 text-white text-sm"> Log out</button>
                    </div>
                  </div>
            }
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link><NavLink to={'/'} className="flex items-center gap-[5px] font-semibold hover:text-[#03A5FA] duration-300"> <RiHome4Line /> Home</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/blogs'} className="flex items-center gap-[5px] font-semibold hover:text-[#03A5FA] duration-300"> <CgFileDocument /> All Blogs</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/add'} className="flex items-center gap-[5px] font-semibold hover:text-[#03A5FA] duration-300"> <HiOutlineDocumentAdd /> Add Blog</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/featured'} className="flex items-center gap-[5px] font-semibold hover:text-[#03A5FA] duration-300"> <MdOutlineFeaturedVideo /> Featured</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/wishlist'} className="flex items-center gap-[5px] font-semibold hover:text-[#03A5FA] duration-300"> <FaRegHeart /> Whishlist</NavLink></Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainMenu;