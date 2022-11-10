import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://assinment-11-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    // HandelDelete -------
    const handleDelete = _id => {
        const proceed = window.confirm('are you sure this order item is cancel')
        if (proceed) {
            fetch(`https://assinment-11-server.vercel.app/orders/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully ');
                        const remaining = orders.filter(ord => ord._id !== _id);
                        setOrders(remaining)
                    }
                })
        }

    }
    // update--------
    const handleUpdate = _id => {
        fetch(`https://assinment-11-server.vercel.app/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(ord => ord._id !== _id);
                    const approving = orders.find(ord => ord._id === _id);
                    approving.status = 'approvedeeee';

                    const newOrder = [approving, ...remaining];
                    setOrders(newOrder)

                }
            })

    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Update</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleUpdate={handleUpdate}></OrderRow>)
                    }

                </tbody>

                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Orders;




