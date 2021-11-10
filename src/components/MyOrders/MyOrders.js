import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const [deleteCount, setDeleteCount] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [user.email, deleteCount]);

    const handleDelete = (id)=>{
        window.confirm('Are you sure to delete?')
        fetch(`http://localhost:5000/deleteOrder/:${id}/?email=${user?.email}`,{
            method:"DELETE",
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deleteCount === 1){
                alert('Order Cancel Successful');
                setDeleteCount(data.deleteCount);
                window.location.reload();
            }
        })

    }
    return (
        <div>
            <h2>This is my orders</h2>
            <Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>User Email</th>
                        <th>Manage Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((pd,index)=> <tr>
                            <td>{index+1}</td>
                            <td>{pd.productName}</td>
                            <td>{pd.email}</td>
                            <td>

                                <Button onClick={()=>handleDelete(pd._id)} className="btn btn-danger">Cancel Order</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default MyOrders;