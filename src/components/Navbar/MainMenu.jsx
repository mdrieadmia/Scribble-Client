"use client";
import { Navbar } from "flowbite-react";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";





const MainMenu = () => {
  return (
    <div className="border-b">
      <div className="h-9 w-full bg-[#009444]">
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
            <div className="flex gap-2">
              <Link to={'/login'} className="bg-[#009444] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#009444] border-2 border-transparent hover:border-[#009444] duration-300 text-white text-sm">Login</Link>
              <Link to={'register'} className="bg-[#009444] py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-[#009444] border-2 border-transparent hover:border-[#009444] duration-300 text-white text-sm">Register</Link>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link><NavLink to={'/'} className="flex items-center gap-[5px] font-semibold hover:text-[#009444] duration-300"> <RiHome4Line /> Home</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/blogs'} className="flex items-center gap-[5px] font-semibold hover:text-[#009444] duration-300"> <CgFileDocument /> All Blogs</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/add'} className="flex items-center gap-[5px] font-semibold hover:text-[#009444] duration-300"> <HiOutlineDocumentAdd /> Add Blog</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/featured'} className="flex items-center gap-[5px] font-semibold hover:text-[#009444] duration-300"> <MdOutlineFeaturedVideo /> Featured</NavLink></Navbar.Link>
            <Navbar.Link><NavLink to={'/wishlist'} className="flex items-center gap-[5px] font-semibold hover:text-[#009444] duration-300"> <FaRegHeart /> Whishlist</NavLink></Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainMenu;