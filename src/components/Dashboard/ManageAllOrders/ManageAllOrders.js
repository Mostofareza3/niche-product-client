import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import '../../MyOrders/MyOrders.css'

const ManageAllOrders = () => {
    const [myOrders, setAllOrders] = useState([]);
    const [updateCount, setUpdateCount] = useState(false);
    const [clear, setClear] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [updateCount,clear]);

    const handleUpdateStatus = (id)=>{
       fetch(`http://localhost:5000/allOrders/${id}`,{
           method: "PUT",
           headers:{
               "content-type": "application/json"
           },
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount){
               setUpdateCount(data.modifiedCount)
               alert('Shipping Successful.')
           }
       })

    };
    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/clearOrder/${id}`,{
            method: "DELETE",
            headers: {
                "content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>setClear(data))

    }
    return (
        <div>
            <h2 className="heading"> manage all orders</h2>
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
                            <Button className="btn btn-success">{pd.status}</Button>

                            </td>
                            <td>

                              
                               { pd.status=== "pending"? <Button onClick={()=>handleUpdateStatus(pd._id)} className="btn btn-danger">Confirm Order</Button>
                               :
                               <>
                                <Button onClick={()=>handleDelete(pd._id)} className="btn btn-danger">clear</Button>
                                
                               </>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default ManageAllOrders;