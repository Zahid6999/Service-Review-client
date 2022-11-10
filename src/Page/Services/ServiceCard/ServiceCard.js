import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    // console.log(props.service.name);
    const { _id, name, img, price } = props.service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-3">

                <figure><img className='h-96' src={img} alt="Clean" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-orange-600'>Price: {price}</p>

                    <div className="card-actions justify-end">

                        <Link to={`/checkout/${_id}`}>
                            <FaArrowRight className='text-orange-600 text-2xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;