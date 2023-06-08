import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const TreatmentSection = () => {
    return (
        <div className="hero mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="lg:w-2/5 rounded-lg shadow-2xl" alt="" />
                <div className='lg:ms-20 lg:text-justify'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is in the seeking of EXCEPTIONAL dental care, that discerning patients will want to pay extra close attention to the dental practitioner they choose.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default TreatmentSection;