import React from 'react';

const Review = ({ data }) => {
    const { name, review, location, img } = data;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{review}</p>
                <div className="flex items-center mt-8">
                    <img className='w-12 rounded-full me-4 ring ring-primary ring-offset-base-100 ring-offset-2' src={img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;