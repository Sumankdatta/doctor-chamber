import React from 'react';
import comma from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviewData = [
        {
            id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: 'They are professional and they take the time to explain everything to us.',
            img: people1,

        },
        {
            id: 2,
            name: 'Jecika wislet',
            location: 'California',
            review: 'Everyone is friendly, in and out was convenient, and she has new equipment in giving me a thorough check up and cleaning. I’ve found my new Dentist!',
            img: people2,

        },
        {
            id: 3,
            name: ' Rose Henry ',
            location: 'California',
            review: 'By far the best dental experience I’ve ever had! Great staff and great location. Highly recommended.',
            img: people3,

        }
    ]

    return (
        <section className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-primary text-semibold'>Testimonial</h4>
                    <h3 className='text-3xl '>What Our Patients Says</h3>
                </div>
                <img className='lg:w-40 w-24' src={comma} alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20'>
                {
                    reviewData.map(data => <Review
                        key={data.id}
                        data={data}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;