import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';



const BookingModal = ({ booked, selectedDate, setBooked, refetch }) => {
    const { name: treatmentName, slots } = booked;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(name, email, phone)

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking successfully')
                    setBooked(null)
                    refetch()
                }
                else {
                    toast.error(data.message)

                }

            })
    }
    return (

        <div>

            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box mt-2">
                    <div className="modal-action">
                        <label htmlFor="booking" className="btn">X</label>
                    </div>

                    <form onSubmit={handleBooking}>
                        <div className=''>
                            <h3 className="font-bold text-lg">{treatmentName}</h3>
                            <input type="text" value={date} disabled className="input mt-2 input-bordered w-full " />
                            <select name='slot' className="select select-bordered w-full mt-2">
                                {
                                    slots?.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input mt-2 input-bordered w-full " />
                            <input type="email" name='email' defaultValue={user?.email} disabled placeholder="your email" className="input mt-2 input-bordered w-full " />
                            <input type="phone" name='phone' placeholder="Your Phone Number" className="input mt-2 input-bordered w-full " /><br />
                            <input type="submit" value="submit" className="btn btn-neutral mt-4 input-bordered w-full " />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;