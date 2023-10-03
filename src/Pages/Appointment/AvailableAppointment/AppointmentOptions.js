import React from 'react';

const AppointmentOptions = ({ option, setBooked }) => {
    const { name, slots } = option;

    // const callDouble = () => {
    //     window.bookingModal.showModal(null)
    //     setBooked(option)
    // }
    return (
        <div className="card mt-12  shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-primary">{name}</h2>
                <p>{slots?.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots?.length} {slots?.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">
                    {/* working two system */}
                    {/* <button onClick={() => callDouble()} className="btn btn-primary">Book Appointment</button> */}
                    {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}


                    <label onClick={() => setBooked(option)} disabled={slots?.length === 0} htmlFor="booking" className="btn text-white px-6 bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;