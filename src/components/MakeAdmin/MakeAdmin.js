import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="heading">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    placeholder="Enter email address"
                    onBlur={handleOnBlur}
                    style={{width: "50%", padding: "10px"}}
                     /> <br />
                <Button
                type="submit" className="btn btn-success my-2">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;