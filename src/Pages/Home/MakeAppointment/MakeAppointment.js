import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero lg:mt-44 mt-12" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt='' className="w-1/2 -mt-32 -mb-4 hidden lg:block rounded-lg shadow-2xl" />
                <div className='ms-4 mt-4'>
                    <h4 className='text-lg text-primary font-bold mb-5'>Appointment</h4>
                    <h1 className="text-4xl text-white font-semibold">Make An Appointment Today</h1>
                    <p className="py-6 text-white">Quickly find an appointment that's convenient for you. Make an appointment now and you'll have little to no wait time when you arrive.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;