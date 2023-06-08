import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums.',
            icon: fluoride,

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed.',
            icon: cavity,

        },
        {
            id: 3,
            name: ' Teeth Whitening  ',
            description: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!',
            icon: whitening,

        }
    ]
    return (
        <div>
            <div className='mt-20'>
                <h4 className='text-2xl text-center text-primary uppercase'>Our Services</h4>
                <h1 className='text-4xl text-center' >Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;