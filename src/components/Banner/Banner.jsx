import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/VLbsFDXL/Banner.jpg')] w-full h-[680px] bg-no-repeat bg-cover bg-center">
            <div className="container mx-auto px-5">
                <div>
                    <h1 data-aos="fade-up" className="text-nowrap px-5 text-lg md:text-3xl lg:text-4xl font-bold pt-20 text-[#474747] flex justify-center gap-2">Engaging Content for the 
                        <span className="text-green-600">
                            <Typewriter
                            options={{
                                strings: [' Inquisitive Mind', ' Curious Mind', ' Inquisitive Mind'],
                                autoStart: true,
                                loop: true,
                                delay: 1,
                                deleteSpeed: 1
                            }}
                         />
                         </span>
                    </h1>
                    <p data-aos="fade-up" className="text-sm text-center max-w-[700px] mx-auto text-[#474747] font-medium mt-5">Explore diverse topics, from tech to culture, through thought-provoking articles, fostering curiosity and sparking meaningful conversations in a vibrant community.</p>
                </div>
                <div data-aos="fade-up" className="flex justify-center items-center mt-5">
                    <input type="text" className="border-none bg-[#eeeeee] rounded-s-full px-5 active:outline-none placeholder:text-sm" placeholder="Type here" />
                    <button className="bg-green-600 py-[10px] px-5 rounded-e-full text-sm font-semibold hover:bg-green-800 duration-300 text-white">Search</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;