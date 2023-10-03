import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModa/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {

    const [booked, setBooked] = useState(null)
    console.log(booked)
    const date = format(selectedDate, 'PP')

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <p className='text-xl text-center text-orange-600'>Loading...</p>
    }


    return (
        <section className='my-20 mx-5'>
            <p className='text-center font-bold text-secondary'>Available Appointment on :  {format(selectedDate, 'PP')}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {appointmentOption &&
                    appointmentOption?.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setBooked={setBooked}
                    ></AppointmentOptions>)
                }
            </div>
            {
                booked &&
                <BookingModal
                    booked={booked}
                    selectedDate={selectedDate}
                    setBooked={setBooked}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;