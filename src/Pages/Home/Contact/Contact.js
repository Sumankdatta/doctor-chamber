import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='mt-20 py-12'>
            <div className='text-center '>
                <h4 className='text-primary'> Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center mt-8'>
                <input type="text" placeholder="Type here" className="input mt-5 input-bordered  w-3/5" /><br />
                <input type="text" placeholder="Type here" className="input mt-5 input-bordered  w-3/5" /><br />
                <textarea className="textarea textarea-bordered mb-8 mt-5 w-3/5" placeholder="Bio"></textarea><br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;