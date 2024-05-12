const Newsletter = () => {
    return (
        <div className="container mx-auto px-5">
            <div className="py-24 bg-gradient-to-r from-green-500 to-green-700 mb-20 mt-10 rounded-lg">
                <h1 className="text-3xl font-semibold text-center mb-5 text-white">Subscribe To Get The Latest News About Us</h1>
                <p className="text-center text-sm max-w-[520px] mx-auto text-white">Stay updated with exclusive access to our latest blog posts by subscribing to our newsletter for all the latest insights!</p>
                <div>

                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-700 mt-10 flex justify-center items-center">

                    <input type="email" className="bg-green-400 border-none w-[85%] md:w-[60%] lg:w-[40%] placeholder:text-white text-white" placeholder="Enter Your Email" />
                    <input className="px-5 py-2 bg-green-500 text-white cursor-pointer hover:bg-green-800 duration-300 font-semibold" type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;