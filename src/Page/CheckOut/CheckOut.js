import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const { _id, name, price, img, title } = useLoaderData();



    //  handlePleaseOrder 
    const handlePleasOrder = (event) => {
        event.preventDefault()

        const form = event.target;
        const first = form.first.value;
        const orderName = name;
        const last = form.last.value;
        const phone = form.phone.value;
        const email = user?.email || 'unRegister';
        const message = form.message.value;


        const orders = {
            service: _id,
            price,
            customerName: `${first} ${last}`,
            phone,
            email,
            message,
            orderName: orderName
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('your order is successfully ');
                    form.reset()
                }
            })
            .catch(err => console.error(err))


    }
    return (
        <div>
            <form onSubmit={handlePleasOrder}>
                <div className='flex justify-around items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-4xl text-slate-400'>{name}</h1>
                        <p className='text-xl text-orange-500'>Price: {price}</p>
                        <p className='text-xs'>{title}</p>

                    </div>
                    <div>
                        <img className='w-96 h-96' src={img} alt="" />
                    </div>
                </div>
                <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 my-8'>
                    <input type="text" name='first' placeholder="First Name" className="input input-bordered input-error w-full " />
                    <input type="text" name='last' placeholder="Last Name " className="input input-bordered input-error w-full " />
                    <input type="number" name='phone' placeholder="Phone " className="input input-bordered input-error w-full " />
                    <input type="email" name='email' defaultValue={user?.email} placeholder="Email " className="input input-bordered input-error w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-success w-full h-72 mb-4 bg-slate-100" placeholder="Bio"></textarea>
                <input className="btn btn-active btn-info" type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default CheckOut;