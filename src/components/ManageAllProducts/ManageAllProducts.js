import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';





const ManageAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })


    useEffect(() => {
        fetch('https://quiet-dawn-43980.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);

            })
    }, [isDelete]);

    //delete a product 
    const handleDelete = (id) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://quiet-dawn-43980.herokuapp.com/products/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setIsDelete(true)
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }

        });

    }

    return (
        <div>
            <h2 className="heading">This is Manage All products</h2>
            <div className="products-container container justify-content-center row">

                {
                    allProducts?.map(product => <div key={product._id} className="single-product col-md-4 col-sm-12">
                        <div>
                            <img width="100%" src={product.img} alt="" />
                        </div>
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <h5>Price: ${product.price}</h5>
                            <Button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete Product</Button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllProducts;