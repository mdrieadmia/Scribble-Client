import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { MdFormatQuote, MdOutlineStar } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
const Spotlight = () => {
    return (
        <div className="container mx-auto px-5">
            <div>
                <h1 className="text-2xl font-semibold text-center mb-2">Spotlight</h1>
                <p className="text-center text-sm max-w-[560px] mx-auto text-[#474747]">This could feature quick and actionable tips related to your blog&apos;s niche or topics. Whether it&apos;s productivity hacks or DIY tutorials</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div>
                    <img className='w-[90%] mx-auto' src="https://i.postimg.cc/MHFZLTK7/Frame-1014.png" alt="Spot Light Image" />
                </div>
                <div className='max-w-[500px] px-5'>
                    <div>
                        <h1 className='ml-2 text-2xl font-bold text-[#474747]'>Showcase Reviews</h1>
                        <h1><MdFormatQuote className='text-5xl text-green-500' /></h1>
                    </div>
                    <div className='ml-2 max-w-[350px]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className=''>
                                <div className='mb-7'>
                                    <h1 className='text-xl font-semibold'>A Gripping Psychological Thriller</h1>
                                    <p className='text-sm mt-3'>In The Silent Patient, Alex Michaelides crafts a riveting narrative that keeps readers on the edge of their seats until the very last page. The story follows Alicia Berenson, a celebrated painter who inexplicably murders her husband and then goes silent. </p>
                                    <h1 className='mt-2 flex items-center'> <span className='text-xl flex text-yellow-300'><MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /></span> </h1>
                                    <p className='text-lg font-semibold flex items-center gap-2 mt-3'> <FaUser  className='mb-1'/>MD Riead Hasan</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='mb-7'>
                                    <h1 className='text-xl font-semibold'>Wireless Freedom with Superior Sound</h1>
                                    <p className='text-sm mt-3'>The Apple AirPods Pro redefine the wireless earbud experience with their sleek design, active noise cancellation, and impressive audio quality. Whether youre commuting, working out, or simply relaxing at home, these earbuds deliver immersive.</p>
                                    <h1 className='mt-2 flex items-center'> <span className='text-xl flex text-yellow-300'><MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /></span> </h1>
                                    <p className='text-lg font-semibold flex items-center gap-2 mt-3'> <FaUser  className='mb-1'/>Shahrin Neha</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='mb-7'>
                                    <h1 className='text-xl font-semibold'>A Genre-Defying Masterpiece</h1>
                                    <p className='text-sm mt-3'>Bong Joon-hos Parasite is a cinematic tour de force that defies easy categorization. Part dark comedy, part social commentary, and part thriller, this South Korean film transcends genre boundaries to deliver a thought-provoking and visually stunning experience.</p>
                                    <h1 className='mt-2 flex items-center'> <span className='text-xl flex text-yellow-300'><MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /></span> </h1>
                                    <p className='text-lg font-semibold flex items-center gap-2 mt-3'> <FaUser  className='mb-1'/>Thomas Alvi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='mb-7'>
                                    <h1 className='text-xl font-semibold'>A Journey Through Time and Tradition</h1>
                                    <p className='text-sm mt-3'>Kyoto, Japan, is a city that seamlessly blends ancient tradition with modern innovation, offering visitors a truly unique travel experience. From the iconic Fushimi Inari Shrine with its thousands of vermillion torii gates to the serene Zen.</p>
                                    <h1 className='mt-2 flex items-center'> <span className='text-xl flex text-yellow-300'><MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /></span> </h1>
                                    <p className='text-lg font-semibold flex items-center gap-2 mt-3'> <FaUser  className='mb-1'/>Devit Guitta</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;