const Banner = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/VLbsFDXL/Banner.jpg')] w-full h-[680px] bg-no-repeat bg-cover bg-center">
            <div className="container mx-auto px-5">
                <div>
                    <h1 className="text-4xl text-center font-bold pt-20 text-[#474747]">Engaging Content for the Inquisitive Mind</h1>
                    <p className="text-sm text-center max-w-[700px] mx-auto text-[#474747] font-medium mt-5">Explore diverse topics, from tech to culture, through thought-provoking articles, fostering curiosity and sparking meaningful conversations in a vibrant community.</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <input type="text" className="border-none bg-[#eeeeee] rounded-s-full px-5 active:outline-none placeholder:text-sm" placeholder="Type here" />
                    <button className="bg-green-600 py-[10px] px-5 rounded-e-full text-sm font-semibold hover:bg-green-800 duration-300 text-white">Search</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;