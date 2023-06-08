import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn text-white px-6 bg-gradient-to-r from-secondary to-primary">{children}</button>
    )

};

export default PrimaryButton;