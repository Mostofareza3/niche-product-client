import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const [deleteCount, setDeleteCount] = useState(false)

    useEffect(() => {
        fetch(`https://quiet-dawn-43980.herokuapp.com/myOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [deleteCount]);

    const handleDelete = (id)=>{
        window.confirm('Are you sure to delete?')
        fetch(`https://quiet-dawn-43980.herokuapp.com/deleteOrder/:${id}/?email=${user?.email}`,{
            method:"DELETE",
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount === 1){
                alert('Order Cancel Successful');
                setDeleteCount(data.deletedCount);
            }
        })

    }
    return (
        <div>
            <h2 className="heading"> my orders</h2>
            <Container>
            <Table>
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>Product Name</th>
                        <th>Product Img</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>Manage Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((pd,index)=> <tr key={index}>
                            <td>{index+1}</td>
                            <td>{pd.productName}</td>
                            <td>
                                <img className="pd-img" src={pd.img} alt="" />
                            </td>
                            <td>{pd.email}</td>
                            <td>
                            <Button className="btn btn-success mx-2">{pd?.status}</Button>
                            </td>
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