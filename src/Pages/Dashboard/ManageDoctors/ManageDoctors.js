import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DeleteModal from '../../../Shared/DeleteModal/DeleteModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const cancelDelete = () => {
        setDeletingDoctor(null)
    }
    const handleDeleteDoctor = (doctor) => {
        console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('doc-accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    console.log(data)
                    refetch()
                    toast.success(`${doctor.name} Deleted successfully`)
                }
            })
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <h1 className='text-3xl'>Manage Doctors</h1>
            <div className="overflow-x-auto mt-12">
                <table className="table table-zebra">
                    {doctors.length === 0 && <p className='text-3xl text-secondary'>Doctors is not available .Please Add a  doctors</p>}
                    <thead>
                        <tr className='text-xl'>
                            <th>No:</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) => <tr
                                key={doctor._id}
                            >
                                <th>{i + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-xl">
                                        <img src={doctor.img} alt="" />
                                    </div>
                                </div></th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>

                                <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-modal" className="btn btn-xs btn-error text-white">Delete</label></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <DeleteModal
                    title={`Are you sure you want to Delete?? `}
                    message={`If you Delete ${deletingDoctor.name} you can not undone`}
                    cancelDelete={cancelDelete}
                    deleteData={deletingDoctor}
                    handleDeleteDoctor={handleDeleteDoctor}
                >

                </DeleteModal>
            }
        </div>
    );
};

export default ManageDoctors;