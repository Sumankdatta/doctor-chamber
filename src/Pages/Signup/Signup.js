import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail);
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const handleRegister = (data, e) => {
        console.log(data)
        const { name } = data
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                user.displayName = name
                console.log(user)
                handleUpdate(name)
                e.target.reset()
                saveUser(data.name, data.email)
            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleUpdate = (name) => {
        const profile = {
            displayName: name
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)

                saveUser(user.displayName, user.email)

            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email) => {
        const user = {
            name: name,
            email: email,

        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserEmail(email)
            })
    }


    return (
        <div className='my-32 w-full flex justify-center items-center'>
            <div className='w-96'>
                <h3 className='text-3xl text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password',
                            {
                                required: 'Your email is required',
                                pattern: { value: /(?=.{8,})(?=.*[A-Z])(?=.*[a-z])/, message: 'should be 8 character,upper case,lower case', },
                            },

                        )}

                            placeholder="Your Password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent mt-3 w-full' type="submit" value="Sign Up" />
                </form>
                <p className='mt-3'>Already have an account ? <Link className='text-secondary' to='/login'>please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;