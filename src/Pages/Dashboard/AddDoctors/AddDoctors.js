import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostingKey = process.env.REACT_APP_imagebb_key
    const navigate = useNavigate()


    const { data: specialty, isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data
        }

    })

    const handleAddDoctor = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('doc-accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data)
                                toast.success('Doctor added successfully')
                                navigate('/dashboard/managedoctors')
                            }

                        })
                }
            })

    }
    if (isLoading) {
        return <p>Loading .....</p>
    }
    return (
        <div>
            <h2 className='text-3xl'>Add A New Doctor</h2>
            <div className='w-3/5 mt-20 mx-auto'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name?</span>
                        </label>
                        <input type="text"
                            {...register('name', { required: 'Your name is required' })}
                            placeholder="Your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email',
                            { required: 'Your email is required' })}
                            placeholder="Enter your email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"> Specialty </span>
                        </label>
                        <select {...register('specialty', { required: 'Enter Your File' })} className="select select-bordered w-full">

                            {
                                specialty?.map(slot => <option
                                    key={slot._id}
                                    slot={slot}
                                >{slot.name}</option>)
                            }

                        </select>

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"  {...register('image',
                            { required: 'Your photo is required' })}
                            placeholder="Enter your Photo" className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>

                    <input className='btn btn-accent mt-3 w-full' type="submit" value="Add Doctor" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;