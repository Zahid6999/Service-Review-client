import React from 'react';
import about from '../../../access-11/about.webp';

const About = () => {
    return (
        <div>
            <p className="text-orange-500 text-center">About Us</p>
            <div className='grid grid-cols-2 items-center'>
                <div>
                    <span className='text-orange-600 py-4 lg:ml-7'>_  Cleaning Solutions</span>
                    <h1 className='text-2xl lg:text-4xl font-bold text-slate-900 mt-6 mb-4'>Digital Private Clenio <br /> <span className='text-orange-600'> Agency</span></h1>
                    <p className='text-xs pb-5'>Nor is there anyone who loves or pursues or desires itself, because is pain, <br /> but occasionally. home cleaning service options and continue by example, <br /> leaving other cleaning companies</p>
                    <button className="btn border-none px-8 bg-orange-500">More About</button>
                </div>

                <div>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;