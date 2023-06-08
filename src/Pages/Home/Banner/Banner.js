import React from 'react';
import banner from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero mt-12" style={{ backgroundImage: (`url(${bg})`) }}>
            <div className="flex flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                <div className='mt-16 me-8'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 text-justify me-5">We custom-make veneers for trusted dentists so you get the most beautiful, natural-looking smile. Your New Beautiful Smile Starts Here! We'd love to meet you, and give you the smile you deserve.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;