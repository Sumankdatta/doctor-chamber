import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Allusers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())

    });

    const handleMakeAdmin = (_id) => {
        fetch(`http://localhost:5000/users/admin/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('doc-accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success('Make admin successfully')
                    refetch()
                }

            })
    }

    const handleUserDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log(data)
                    toast.success('Deleted successfully')
                    refetch()
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl">All User</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary text-white'>Make Admin</button>}</td>
                                <td><button onClick={() => handleUserDelete(user._id)} className='btn btn-xs btn-error text-white'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Allusers;