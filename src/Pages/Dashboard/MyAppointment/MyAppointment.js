import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MyAppointment = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const { data: bookings = [], loading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('doc-accessToken')}`
                }
            })
                .then(res => {
                    console.log('jante chai', res)
                    if (res.status === 401 || res.status === 403) {
                        logOut()
                        navigate('/login')
                    }
                    return res.json()
                })
    })

    console.log(bookings)

    const handleBookingDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
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
            <h2 className='text-2xl'>My Appointment</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment Name</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings &&
                                bookings?.map((booking, index) => <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td><button><button onClick={() => handleBookingDelete(booking._id)} className='btn btn-xs btn-error text-white'>Delete</button></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;