import React, { useEffect, useState } from 'react';


const OrderRow = ({ order, handleDelete, handleUpdate }) => {
    const { _id, orderName, phone, customerName, price, email, service, status, message } = order;
    const [orderService, setOderService] = useState({});


    useEffect(() => {
        fetch(`https://assinment-11-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOderService(data))
    }, [service])


    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-warning text-red-500'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{orderName}</div>
                            <div className="text-sm opacity-50">${price} </div>
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <button className="btn btn-ghost btn-xs mt-14">{email}</button>
                <p className='text-xs'>{message}</p>
                <th>
                    <button onClick={() => handleUpdate(_id)}> <td className='text-orange-500'>{status ? status : 'Pending'}</td></button>

                </th>
            </tr>
        </div>
    );
};

export default OrderRow;