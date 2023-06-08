import React from 'react';

const InfoCard = ({ card }) => {
    const { name, icon, bgClass, description } = card;
    return (
        <div className={`px-6 card lg:py-1 py-6 lg:card-side ${bgClass} text-white shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className='card-body'>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;