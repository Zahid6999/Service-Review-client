import React from 'react';
import img1 from '../../../access-11/banner/img-1.jpg';
import img2 from '../../../access-11/banner/img-5.jpg';
import img3 from '../../../access-11/banner/img-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full mt-10 mb-20">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img3} alt="/" className='w-full rounded-xl ' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-3 lg:left-28 top-2/3">
                    <h1 className='text-2xl lg:text-6xl font-bold text-white'>Certified <br /> &  <br /> <span className='text-orange-500'>Experienced <br /> Cleaners</span></h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 lg:bottom-28 bottom-5">
                    <a href="#slide3" className="btn btn-circle bg-orange-500 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-500 border-none ml-4">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">

                <img src={img2} alt="/" className='w-full rounded-t-xl' />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-3 lg:left-28 top-2/3">
                    <h1 className='text-2xl lg:text-6xl font-bold text-white'>Certified <br /> &  <br /> <span className='text-orange-500'>Experienced <br /> Cleaners</span></h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 lg:bottom-28 bottom-5">
                    <a href="#slide1" className="btn btn-circle  bg-orange-500 border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-orange-500 border-none ml-4">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img1} alt="/" className='w-full' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-3 lg:left-28 top-2/3 ">
                    <h1 className='text-2xl lg:text-6xl font-bold text-white'>Certified <br /> &  <br /> <span className='text-orange-500'>Experienced <br /> Cleaners</span></h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 lg:bottom-28 bottom-5">
                    <a href="#slide2" className="btn btn-circle  bg-orange-500 border-none ">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-orange-500 border-none ml-4">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;