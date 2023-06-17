import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }


    const handleLogin = (data, e) => {
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUserEmail(data.email)
                e.target.reset()

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                setUserEmail(user.email)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='my-32 w-full flex justify-center items-center'>
            <div className='w-96 '>
                <h3 className='text-3xl text-center'>Log in</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                required: 'Your Password is required',
                            },
                        )}
                            placeholder="Your Password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent mt-3 w-full' type="submit" value="Sign Up" />
                </form>
                <p className='mt-3'>New to website ? <Link className='text-secondary' to='/login'>please Sign up</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;