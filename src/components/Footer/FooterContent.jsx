import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FooterContent = () => {
    return (
        <div className="bg-[#f5f5f5] pt-5">
            <div>
                <div className="container mx-auto px-5">
                    <div className="w-full">
                        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                            <div>
                                <div>
                                    <img src="https://i.postimg.cc/Znwr2bW5/logo.png" className="h-6 sm:h-9 mt-3" alt="Flowbite React Logo" />
                                    <p className="max-w-[420px] text-sm mt-3 mb-5 font-medium">Scribble is a dynamic platform for diverse blogs, offering insights, stories, and perspectives across various topics.</p>
                                </div>
                                <div>
                                    <div className="flex gap-2 font-semibold items-center text-[#474747]">
                                        <FaEnvelope />
                                        <p className="">support@scribble.com</p>
                                    </div>
                                    <div className="flex gap-2 font-semibold items-center text-[#474747] mt-2 mb-5">
                                        <IoCall />
                                        <p className="">+8801863-931220</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex space-x-6 sm:mt-0 sm:justify-center md:justify-start">
                                    <Footer.Icon className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#" icon={BsFacebook} />
                                    <Footer.Icon className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#" icon={BsInstagram} />
                                    <Footer.Icon className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#" icon={BsTwitter} />
                                    <Footer.Icon className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#" icon={BsGithub} />
                                    <Footer.Icon className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#" icon={BsDribbble} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-5 sm:grid-cols-3 sm:gap-6 md:mt-0">
                                <div>
                                    <Footer.Title className="text-[#009444]" title="Services" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Blogs</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Add Blog</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Read Blogs</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Wishlist Blogs</Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title className="text-[#009444]" title="Follow us" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Facebook</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Instagram</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Twitter</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Github</Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title className="text-[#009444]" title="Legal" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Cookie Policy</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Privacy Policy</Footer.Link>
                                        <Footer.Link className="text-[#474747] hover:decoration-transparent hover:text-[#009444] font-semibold" href="#">Terms &amp; Conditions</Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:flex sm:items-center sm:justify-between bg-[#009444] text-white py-4 mt-7">
                    <p className="text-center mx-auto font-semibold"> &copy; 2024 All Rights Reserved By Scribble</p>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;