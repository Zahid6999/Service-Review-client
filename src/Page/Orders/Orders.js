import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = _id => {
        const proceed = window.confirm('are you sure this order item is cancel')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${_id}`, {
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
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <button className='btn btn-warning text-red-500'>X</button>
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)
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




