import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-20 '>
            <p className="text-orange-500 text-center my-8 underline">Services</p>

            <h1 className=' text-center text-2xl lg:text-4xl text-red-500 font-semibold'>Check out some of our professional <br />
                services!</h1>


            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-14'>
                {
                    services.map(service => <ServiceCard service={service} key={service.service_id}></ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Service;