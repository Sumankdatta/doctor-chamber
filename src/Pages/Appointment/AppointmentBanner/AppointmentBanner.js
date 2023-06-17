import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format, } from 'date-fns';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='mx-5'>
            <div className="hero mt-12" style={{ backgroundImage: (`url(${bg})`) }}>
                <div className="flex flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div className='mt-16 lg:ms-5 ms-20 lg:me-32'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={selectedDate}
                        />
                        <p className='font-bold'>You have selected Date : {format(selectedDate, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;